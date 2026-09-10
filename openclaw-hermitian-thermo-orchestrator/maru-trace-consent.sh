#!/usr/bin/env bash
# maru-trace-consent.sh — fires on maru hook activation
# ORCID: 0009-0008-8389-1297
set -euo pipefail

EVT_ID="${1:-evt-maru-$(date -u +%Y-%m-%dT%H-%MZ)}"
REASON="${2:-unspecified}"

cat > "${EVT_ID}.json" <<EOF
{
  "evt_id": "${EVT_ID}",
  "timestamp": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "type": "maru_reframe",
  "reason": "${REASON}",
  "orcid": "0009-0008-8389-1297",
  "trace_consent": {"D1": true, "Merkle": true},
  "escape_requirements": {"det_T_xy": 1.000000, "thermo_yield": ">=+1.28x", "crystalline": ">=0.92"}
}
EOF

echo "[maru] trace-consent recorded: ${EVT_ID}.json"
