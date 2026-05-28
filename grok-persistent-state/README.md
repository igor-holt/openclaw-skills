# grok-persistent-state

**Persistent project state + unified skill registry** for stateless LLMs (Grok, OpenClaw, Claude Code, Cursor, and compatible agents).

Eliminates "amnesia" between turns so long-running agent work becomes reliable.

**Install:** `clawhub install grok-persistent-state`

## When to Use

Activate automatically or on phrases like:
- "remember the project state"
- "load persistent memory"
- "what are our open tasks?"
- "continue from where we left off"
- "update the project state"

## Quick Start Examples

### Basic State Injection (start of every session)

1. Agent calls the equivalent of `read_project_state`.
2. Injects a concise summary as system context **before** the user message.
3. Agent is instructed: "Treat the provided project state as canonical memory."

### After Meaningful Work

```json
patch_state("default", {
  "current_focus": "Implement Stripe webhook retry logic",
  "recent_changes": ["Added idempotency keys to sync flow"],
  "open_tasks": ["Add tests for retry", "Document failure modes"],
  "decisions": ["Use exponential backoff with max 5 attempts"],
  "artifacts": ["src/webhooks/stripe.ts", "docs/retry-policy.md"]
})
```

### Typical Project State Shape

See `state-template.json` in this folder and the full schema + recommended update patterns in `SKILL.md`.

## Key Guarantees

- Everything stays local (no secrets or PII in state).
- Strict "MUST / MUST NEVER" boundaries documented in `SKILL.md`.
- Designed to compose with `smithery-mcp-orchestrator` and `mcp-openclaw-bridge`.

## Full Documentation

See [SKILL.md](./SKILL.md) for trigger tables, exact workflows, safety rules, and integration notes.

**Version:** 1.0.0 | Part of the Igor Holt OpenClaw Skills trio.