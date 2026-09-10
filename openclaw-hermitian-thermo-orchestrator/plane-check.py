#!/usr/bin/env python3
"""plane-check.py — validate deploy target against orchestrator plane rules."""
import sys

PLANES = {
    "github":    {"allow": ["skill_pack", "source_of_truth"], "deny": ["env_files", "secrets"]},
    "drive":     {"allow": ["evt_mirror", "env_wrappers", "ledger"], "deny": ["public_default_branch"]},
    "netlify":   {"allow": ["static_card", "gibbs_surface", "status_page"], "deny": ["gateway_daemon"]},
    "vercel":    {"allow": ["edge_middleware", "preview_deploy", "docs_mirror"], "deny": ["serverless_gateway"]},
}

def main():
    if len(sys.argv) < 3:
        print("usage: plane-check.py <plane> <artifact_type"); sys.exit(2)
    plane, artifact = sys.argv[1].lower(), sys.argv[2].lower()
    if plane not in PLANES:
        print(f"FAIL: unknown plane '{plane}'"); sys.exit(1)
    p = PLANES[plane]
    if artifact in p["deny"]:
        print(f"FAIL: {artifact} is forbidden on {plane} — {p['deny']}"); sys.exit(1)
    if artifact in p["allow"]:
        print(f"PASS: {artifact} allowed on {plane}"); sys.exit(0)
    print(f"WARN: {artifact} not classified on {plane} — manual review"); sys.exit(3)

if __name__ == "__main__":
    main()
