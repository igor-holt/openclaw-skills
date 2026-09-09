# Register on ClawHub

This pack is public at:
https://github.com/igor-holt/openclaw-skills/tree/main/skills/openclaw-hermitian-thermo

It is **not** indexed on clawhub.ai until an authenticated publish runs.

## Workstation (preferred)

```bash
npm i -g clawhub
clawhub login          # or: clawhub login --token "$CLAWHUB_TOKEN"
cd /path/to/openclaw-skills
clawhub skill publish ./skills/openclaw-hermitian-thermo \
  --slug openclaw-hermitian-thermo \
  --name "OpenClaw Hermitian Thermo" \
  --version 1.2.0 \
  --changelog "v1.2.0 — Drive-only env pointers, LegacyEdge client mode, no-new-site, gibbs-r30 untouched." \
  --clawscan-note "Instruction-only. No credentials, no binaries, no network from the pack. MIT-0." \
  --yes
clawhub inspect openclaw-hermitian-thermo --versions
```

Expected listing: https://clawhub.ai/igor-holt/openclaw-hermitian-thermo

## GitHub import

https://clawhub.ai/import — signed-in GitHub account must own `igor-holt/openclaw-skills` (public, non-fork). The importer discovers `SKILL.md` under `skills/`.

## Do not

- Put `CLAWHUB_TOKEN` in this repository.
- Publish env wrapper bodies.
- Create a Netlify/Vercel site as part of registration.
