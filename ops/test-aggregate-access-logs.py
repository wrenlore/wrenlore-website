#!/usr/bin/env python3
import json
import subprocess
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SCRIPT = ROOT / "aggregate-access-logs.py"


class AggregateAccessLogsTest(unittest.TestCase):
    def test_counts_signals_without_persisting_client_data(self):
        with tempfile.TemporaryDirectory() as temporary:
            tmp = Path(temporary)
            website = tmp / "website.log"
            installer = tmp / "installer.log"
            demo = tmp / "demo.log"
            output = tmp / "report.json"
            website.write_text(
                '203.0.113.10 - - [25/Nov/2026:12:00:00 +0000] "GET /install/ HTTP/1.1" 200 123 "-" "Mozilla/5.0"\n'
                '203.0.113.99 - - [25/Nov/2026:12:01:00 +0000] "GET /robots.txt HTTP/1.1" 200 20 "-" "SearchBot/1.0"\n'
            )
            installer.write_text(
                '198.51.100.4 - - [25/Nov/2026:12:02:00 +0000] "GET /install.sh HTTP/1.1" 200 999 "-" "curl/8.0"\n'
            )
            demo.write_text(
                '192.0.2.8 - - [25/Nov/2026:12:03:00 +0000] "GET /share/key/p/page HTTP/1.1" 200 456 "-" "Mozilla/5.0"\n'
                '192.0.2.8 - - [25/Nov/2026:12:04:00 +0000] "GET /share/key/p/page HTTP/1.1" 200 456 "-" "Mozilla/5.0"\n'
            )
            subprocess.run(
                [
                    str(SCRIPT),
                    "--log", f"website={website}",
                    "--log", f"installer={installer}",
                    "--log", f"demo={demo}",
                    "--output", str(output),
                ],
                check=True,
            )
            report = json.loads(output.read_text())
            self.assertEqual(report["totals"]["website_page"]["requests"], 1)
            self.assertEqual(report["totals"]["installer_script"]["requests"], 1)
            self.assertEqual(report["totals"]["demo_showroom"]["requests"], 2)
            self.assertEqual(report["days"]["2026-11-25"]["demo_showroom"]["approximateClients"], 1)
            rendered = output.read_text()
            self.assertNotIn("203.0.113.10", rendered)
            self.assertNotIn("Mozilla/5.0", rendered)


if __name__ == "__main__":
    unittest.main()
