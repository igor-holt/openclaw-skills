---
name: openclaw-hermitian-thermo
version: 3.7-LEO
license: Apache-2.0
orcid: 0009-0008-8389-1297
---

# LEO addendum (ClawHub pack)

Governance layer above the OpenClaw Gateway. Does not replace the Gateway.

## Planes
- GitHub: skill publish only. Never env or secrets.
- Drive: env wrappers and ledger.
- Netlify: static cards. Never Gateway daemon.
- Vercel: previews/docs. Never serverless Gateway.

## Gates
- Hermitian ingest is read-only public metadata.
- LegacyEdge (≤1.5 GB RAM): Gemma-3-270M / Qwen3-0.6B / MobileLLM-Flash via TFLite/Executorch only.
- Maru on R>0.4, no-win, high-entropy deploy without verified controls, or >0.6B-active on LegacyEdge.
- Escape: det(T_xy)=1, thermo yield ≥ +1.28×, crystalline ≥ 0.92.

## Tools in this directory
- `plane-check.py <plane> <artifact_type>`
- `maru-trace-consent.sh [evt_id] [reason]`
