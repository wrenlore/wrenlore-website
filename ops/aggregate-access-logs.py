#!/usr/bin/env python3
"""Create aggregate WrenLore adoption signals from ordinary Apache access logs.

The output contains counts only. Client IP addresses and user-agent strings are
used in memory to estimate daily clients and are never written to the report.
"""
from __future__ import annotations

import argparse
import glob
import json
import re
from collections import defaultdict
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlsplit

COMBINED = re.compile(
    r'^(?P<ip>\S+) \S+ \S+ \[(?P<time>[^]]+)] "(?P<method>\S+) (?P<target>\S+) [^"]+" '
    r'(?P<status>\d{3}) \S+ "[^"]*" "(?P<ua>[^"]*)"'
)
BOT = re.compile(r'bot|spider|crawler|slurp|preview|facebookexternalhit|monitor|uptime', re.I)
DATE_FORMAT = "%d/%b/%Y:%H:%M:%S %z"


def signal_for(label: str, method: str, path: str, status: int, ua: str) -> str | None:
    if method != "GET" or not (200 <= status < 400):
        return None
    if label == "installer" and path == "/install.sh":
        return "installer_script"
    if BOT.search(ua):
        return None
    if label == "website" and path.endswith("/") and not path.startswith(("/api/", "/_")):
        return "website_page"
    if label == "demo" and (path == "/" or path.startswith("/share/")):
        return "demo_showroom"
    return None


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--log", action="append", default=[], metavar="LABEL=GLOB", required=True)
    parser.add_argument("--output", required=True)
    args = parser.parse_args()

    days: dict[str, dict[str, dict[str, object]]] = defaultdict(
        lambda: defaultdict(lambda: {"requests": 0, "clients": set(), "responses": defaultdict(int)})
    )
    parsed = 0
    for item in args.log:
        label, pattern = item.split("=", 1)
        for filename in sorted(glob.glob(pattern)):
            opener = open
            if filename.endswith(".gz"):
                import gzip
                opener = gzip.open
            with opener(filename, "rt", encoding="utf-8", errors="replace") as handle:
                for line in handle:
                    match = COMBINED.match(line)
                    if not match:
                        continue
                    parsed += 1
                    status = int(match["status"])
                    path = urlsplit(match["target"]).path
                    signal = signal_for(label, match["method"], path, status, match["ua"])
                    if not signal:
                        continue
                    day = datetime.strptime(match["time"], DATE_FORMAT).date().isoformat()
                    bucket = days[day][signal]
                    bucket["requests"] += 1
                    bucket["clients"].add((match["ip"], match["ua"]))
                    bucket["responses"][f"{status // 100}xx"] += 1

    serialised_days = {}
    totals = defaultdict(lambda: {"requests": 0, "approximateClientsByDay": 0})
    for day, signals in sorted(days.items()):
        serialised_days[day] = {}
        for signal, bucket in sorted(signals.items()):
            result = {
                "requests": bucket["requests"],
                "approximateClients": len(bucket["clients"]),
                "responses": dict(sorted(bucket["responses"].items())),
            }
            serialised_days[day][signal] = result
            totals[signal]["requests"] += result["requests"]
            totals[signal]["approximateClientsByDay"] += result["approximateClients"]

    report = {
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "privacy": "Aggregate counts only; no IP addresses or user-agent strings are retained in this report.",
        "definition": "Requests and approximate daily clients are distribution signals, not confirmed installations or active users.",
        "parsedLogLines": parsed,
        "totals": dict(sorted(totals.items())),
        "days": serialised_days,
    }
    destination = Path(args.output)
    destination.parent.mkdir(parents=True, exist_ok=True)
    temporary = destination.with_suffix(destination.suffix + ".tmp")
    temporary.write_text(json.dumps(report, indent=2, sort_keys=True) + "\n")
    temporary.replace(destination)


if __name__ == "__main__":
    main()
