# GitHub Release Notes Draft — v1.0.0 Bundle

**Repository:** https://github.com/igor-holt/openclaw-skills  
**Tag:** v1.0.0  
**Title suggestion:** v1.0.0 — Three Skills, One Professional Stack: grok-persistent-state + mcp-openclaw-bridge + smithery-mcp-orchestrator

---

## Release Summary

This is the coordinated initial public release of three OpenClaw skills designed from the ground up to compose into a complete professional agent infrastructure layer on the OpenClaw + Smithery + MCP ecosystem.

- **grok-persistent-state** — Persistent project state and unified omniskill registry for stateless LLMs.
- **mcp-openclaw-bridge** — Authoritative patterns and templates for turning MCP servers into permanent ClawHub skills.
- **smithery-mcp-orchestrator** — Production-grade Smithery discovery, connection management, and secure token scoping for autonomous agents.

These skills were extracted and hardened from real Genesis Conductor deployments, clawbot-grok reference implementations, and multi-agent orchestration work. They prioritize correctness, explicit safety boundaries, token scoping, durable memory, and composability over hype.

All skills are published individually on ClawHub under MIT-0 and are intended to be installed together.

**ClawHub install commands:**

```bash
clawhub install grok-persistent-state
clawhub install mcp-openclaw-bridge
clawhub install smithery-mcp-orchestrator
```

Full documentation, SKILL.md files, state templates, mapping examples, and combined workflows: https://github.com/igor-holt/openclaw-skills

---

## What's Included

### 1. grok-persistent-state v1.0.0
- Canonical `project_state.json` schema (goal, current_focus, recent_changes, open_tasks, decisions, artifacts, smithery metadata, etc.)
- Optional human-readable `PROJECT_STATE.md`
- Safe `read_project_state` + `patch_state` workflow with strict injection discipline
- Unified tool/skill registry loading pattern
- Zero network surface; everything remains strictly local
- Explicit trigger phrases and MUST / MUST NEVER safety rules (never store secrets or PII)

### 2. mcp-openclaw-bridge v1.0.0
- Repeatable thin-adapter pattern for publishing MCP capabilities as native ClawHub skills
- `mcp-mapping-example.json` and recommended SKILL.md structure
- Mandatory privacy & data-flow declarations ("data that stays local")
- Support for stdio, HTTP, and SDK-based MCP servers
- Designed to complement native OpenClaw skills and pair with the other two skills in the bundle

### 3. smithery-mcp-orchestrator v1.0.0
- Namespace discipline and persistent tracking of active namespaces
- Full MCP connection lifecycle handling (connected / auth_required / error)
- Advanced token scoping examples using policies and `rpcReqMatch` restrictions
- Tool discovery (search / list / get) and JSONL piping patterns
- Explicit guidance for human handoff on interactive auth flows
- Direct composition recipes with `grok-persistent-state` (memory) and `mcp-openclaw-bridge` (promotion)

---

## How the Three Skills Compose

The bundle implements a closed professional loop:

**Discovery & Security** (smithery-mcp-orchestrator)  
→ **Memory & Continuity** (grok-persistent-state)  
→ **Distribution & Permanence** (mcp-openclaw-bridge)

Example production workflow (detailed in `docs/combined-workflow.md` and `examples/combined-three-skill-workflow.md`):

1. Use smithery-mcp-orchestrator to create a dedicated namespace and scoped connections (GitHub, Linear, etc.) with narrow token policies.
2. Immediately record namespace, connection IDs, and token metadata via grok-persistent-state.
3. On subsequent turns, restore exact context automatically — no re-authentication or re-explanation required.
4. Identify high-value repeated MCP tool combinations and promote them into standalone ClawHub skills using the mcp-openclaw-bridge patterns.

This turns ephemeral agent experimentation into reliable, auditable, reusable infrastructure.

---

## Installation & Verification

After publishing to ClawHub (see `publishing/RECOMMENDED_COMMANDS.md` and `publishing/publish-all.sh`):

```bash
clawhub install grok-persistent-state
clawhub install mcp-openclaw-bridge
clawhub install smithery-mcp-orchestrator
```

Inspect published skills:

```bash
clawhub inspect grok-persistent-state --versions --files
clawhub search "persistent state"
```

See individual skill READMEs and SKILL.md files for trigger tables, full workflows, and safety declarations.

---

## Philosophy & Design Goals

- **Thermodynamic verification + topological orchestration mindset** applied to practical agent tooling (Genesis Conductor lineage).
- Reliability and verifiability over convenience.
- Explicit security boundaries, especially around credentials and token scoping.
- Everything that can be made permanent and distributable (via ClawHub) should be.
- Strong preference for narrow, short-lived, auditable permissions.
- Full transparency: every safety rule, mapping, and composition pattern is documented in the SKILL.md files.

---

## Attribution & Licensing

Maintained by Igor Holt  
AI Architect | Creator of Genesis Conductor  
https://github.com/igor-holt/openclaw-skills

All skills and supporting files are released under the MIT-0 License (public domain equivalent).

Special thanks to the OpenClaw and Smithery communities for the substrate that makes these patterns possible and valuable.

---

## Next Steps & Feedback

- Report production usage, edge cases, and suggested improvements via GitHub Issues.
- Future minor releases will maintain backward compatibility with the v1.0.0 trio.
- Contributions that improve safety declarations, add new verified workflow examples, or extend the state schema while preserving the strict boundaries are welcome.

**Full repository:** https://github.com/igor-holt/openclaw-skills

---

**End of GitHub Release draft.** Copy the content above (excluding this line) into the GitHub Releases UI when creating the v1.0.0 tag.