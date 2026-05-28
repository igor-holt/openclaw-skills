# AGENTS.md

This repository contains the three production-oriented OpenClaw / ClawHub skills maintained by Igor Holt (Genesis Conductor):

- `grok-persistent-state/` — Persistent memory + omniskill registry for stateless LLMs
- `mcp-openclaw-bridge/` — Turn MCP servers into versioned, installable ClawHub skills
- `smithery-mcp-orchestrator/` — Secure Smithery discovery, connections, and token scoping for agents

These three skills are explicitly designed as a **paired trio** that compose for professional autonomous agent workflows (discovery + durable memory + safe distribution).

## Critical Rules for Agents Working in This Repo

1. **Never modify the core `SKILL.md` files** inside the three skill directories except to fix clear factual errors, security issues, or version bumps accompanied by a changelog entry.
   - These files are the canonical published definitions consumed by ClawHub and every installing agent.
   - All other improvements belong in `README.md`, supporting examples, `docs/`, `examples/`, or publishing tooling.

2. **Preserve the paired-trio philosophy** in any new content or examples:
   - Every skill must reference how it composes with the other two.
   - Document trigger phrases, strict "MUST / MUST NEVER" safety boundaries, and data-flow/privacy declarations.
   - Follow the existing high-signal, production-grade tone (no toy examples).

3. **Documentation & discoverability first**
   - Keep root `README.md` as the clean "paired trio" overview (it already is).
   - Skill-level `README.md` files (now present) are the human quick-start surface.
   - Add or improve concrete usage in `examples/` and `docs/`.
   - The existing `examples/combined-three-skill-workflow.md` and new `docs/combined-workflow.md` demonstrate the intended composition.

4. **Publishing & versioning**
   - Use `publishing/publish-all.sh` and follow `publishing/PRE_PUBLISH_CHECKLIST.md` exactly.
   - All skills use strict semver. Changelog entries are mandatory on publish.
   - The bundle is MIT-0 licensed (see `LICENSE`).

5. **No secrets ever**
   - Treat any committed `.env` or keys as sensitive (none should exist in this repo).
   - State files, tokens, and credentials are always user-local.

## Recommended Workflow for Changes

- Read root `README.md` + `CONTRIBUTING.md` first.
- Read the relevant `SKILL.md` (for reference only) + the new `README.md` in the target skill folder.
- Make the smallest focused change possible.
- Validate that examples still match documented trigger phrases and safety rules.
- If touching publishing or templates, run the checklist mentally.
- Open PR using the provided `.github/PULL_REQUEST_TEMPLATE.md`.

## Broader Context

This repo is part of Igor Holt's open agent infrastructure work (Genesis Conductor, thermodynamic verification, clawbot-grok patterns).

See also the parent workspace `AGENTS.md` / `Claude.md` files for overall repo conventions when working across the larger Igor projects.

Keep every addition professional, precise, and aimed at raising the reliability floor of the open agent ecosystem.

**Current published versions:** All skills at v1.0.0.