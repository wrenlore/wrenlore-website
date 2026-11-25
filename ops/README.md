# Aggregate public-surface metrics

`aggregate-access-logs.py` derives a small daily report from the Apache combined
logs already described on the website privacy page. It counts:

- human-looking page requests on `wrenlore.com`;
- successful requests for `get.wrenlore.com/install.sh`;
- human-looking root or public-share requests on `demo.wrenlore.com`.

The script uses the source IP and user-agent only in memory to estimate distinct
daily clients. The JSON output never contains either value. It does not add
browser JavaScript, cookies, cross-site identifiers or an install-success ping.
A script request remains a distribution signal, not proof of a successful
installation.

Example:

```bash
./ops/aggregate-access-logs.py \
  --log 'website=/var/log/apache2/wrenlore-access.log*' \
  --log 'installer=/var/log/apache2/get-wrenlore-access.log*' \
  --log 'demo=/var/log/apache2/demo-wrenlore-access.log*' \
  --output /var/lib/wrenlore-metrics/aggregate.json
```

Run `python3 ops/test-aggregate-access-logs.py` before deployment. Keep the
aggregate report operator-only unless a deliberately public stats surface is
reviewed separately.
