# High-Quality Changelog Texts for v1.0.0

This file contains the authoritative, detailed changelog entries for the initial release of the three Igor Holt OpenClaw Skills and the bundle as a whole.

These texts (or slightly condensed versions) are used by:
- `publish-all.sh`
- Manual `clawhub skill publish` commands
- Future release notes, announcements, and the ClawHub skill version history UI

---

## grok-persistent-state v1.0.0

```
v1.0.0 — Initial public release. Production-grade persistent project state + unified omniskill registry for stateless LLMs (Grok, OpenClaw, Claude Code, Cursor, etc.). Delivers canonical JSON state schema (goal, current_focus, open_tasks, decisions, artifacts, etc.), safe read/inject + patch_state workflow, explicit trigger phrases, and strict MUST / MUST NEVER safety boundaries (never store secrets or PII; no autonomous execution). Extracted and hardened from the clawbot-grok reference implementation and Genesis Conductor multi-agent systems. Composes directly with the other two skills in this bundle.
```

**Key highlights for readers:**
- Solves the fundamental "amnesia" problem for long-running agent projects
- Machine-readable + optional human-readable (`PROJECT_STATE.md`) state
- Designed for injection at the start of every turn and safe patching after meaningful work
- Zero external dependencies and zero network surface

---

## mcp-openclaw-bridge v1.0.0

```
v1.0.0 — Initial public release. Authoritative patterns for turning any MCP server into first-class, versioned, triggerable OpenClaw / ClawHub skills. Covers explicit mapping strategy (with mcp-mapping-example.json), mandatory privacy declarations (all credentials and execution remain strictly local), recommended SKILL.md structure, and workflows for promoting Smithery or custom MCP tools into permanent community skills. Designed to complement native OpenClaw skills and pair with the persistent-state and Smithery orchestrator skills in this bundle.
```

**Key highlights for readers:**
- Unlocks the entire existing MCP ecosystem (100K+ tools via Smithery + custom servers) for OpenClaw agents
- Thin, auditable adapters — not heavy wrappers
- Strong emphasis on security declarations and "data that stays local"
- Includes concrete example mapping file for a multi-provider MCP server

---

## smithery-mcp-orchestrator v1.0.0

```
v1.0.0 — Initial public release. Production-ready Smithery MCP orchestration layer for OpenClaw and Grok agents. Includes namespace discipline + persistent tracking, long-lived connection lifecycle (connected/auth_required/error), advanced secure token scoping using policies and rpcReqMatch, tool discovery (search/list/get), JSONL piping support, auth handoff guidance, and explicit composition recipes with grok-persistent-state (memory) and mcp-openclaw-bridge (promotion to permanent skills). Hardened from real deployments using Genesis Conductor patterns.
```

**Key highlights for readers:**
- The missing "professional operations manual" for using Smithery safely inside autonomous agents
- Strongly discourages ever giving agents raw credentials
- First-class support for the interactive `auth_required` flow (human handoff)
- Explicitly paired with the other two skills for a complete discovery → memory → distribution loop

---

## Bundle Release — The Professional Trio (v1.0.0)

```
Bundle v1.0.0 — Coordinated initial release of the three-skill professional stack for OpenClaw:

- grok-persistent-state — Durable memory & unified capability surface
- mcp-openclaw-bridge — MCP → permanent ClawHub skill promotion layer
- smithery-mcp-orchestrator — Safe Smithery discovery, connections, and token scoping

These skills were designed together from the ground up. Used in combination they give agents:
  Discovery (Smithery) + Memory (persistent state) + Distribution (MCP bridge to the community)

Each skill is independently valuable and versioned under MIT-0. Together they form a production-grade foundation for reliable, long-running, multi-service autonomous agent work on the Smithery + MCP + OpenClaw platform.

See the root README.md and the combined workflow example for recommended pairing patterns.
```

**Bundle context:**
Published simultaneously so the cross-references and composition instructions in the SKILL.md files are correct from day one. Future minor/patch releases of individual skills will maintain compatibility with the v1.0.0 trio.

---

## Usage Notes

- The single-paragraph versions above are ideal for the `--changelog` flag (concise yet rich).
- The expanded sections in this file are suitable for GitHub releases, announcement posts, and the `promotion/` directory.
- All changelogs emphasize **correctness, safety boundaries, and composability** — the core philosophy of the Genesis Conductor / Igor Holt OpenClaw contributions.

When preparing v1.0.1+ entries, follow the same style: start with the version + "—", one strong sentence describing the release, followed by the most important concrete additions/fixes, ending with composition or safety notes where relevant.

MIT-0 — 2026 Igor Holt