---
name: grok-persistent-state
description: Persistent project state + unified skill registry for stateless LLMs (Grok, OpenClaw, and compatible agents). Eliminates amnesia between turns.
version: 1.0.0
metadata:
  openclaw:
    requires:
      env: []
      bins: []
    emoji: "🧠"
    homepage: "https://github.com/igor-holt/openclaw-skills"
    os: ["darwin", "linux", "win32"]
---

# Grok Persistent State + Omniskill Registry

**Primary use:** When working with Grok (or any stateless LLM) inside OpenClaw, Claude Code, Cursor, or custom agent loops and you need durable memory + a single unified capability surface across sessions.

## When to Use (Trigger Phrases)

Use this skill automatically or when the user says any of:
- "remember the project state"
- "load persistent memory"
- "what is our current focus / open tasks"
- "update the project state"
- "use the skill registry"
- "clawbot state" / "grok persistent" / "openclaw memory"
- "start from where we left off"
- "summarize what we have done so far"

## Core Problem This Skill Solves

Grok (and most LLM APIs) are **stateless**. Every request is independent. Without external memory:

- The agent forgets goals, decisions, open tasks, and artifacts between messages.
- Long-running projects become impossible.
- Skill/tool discovery becomes fragmented.

This skill restores **persistent project state** and an **omniskill-style unified registry** that survives across requests.

## Architecture (Inject on Every Turn)

1. **Durable State** (machine + human readable)
   - `project_state.json` — canonical structured memory
   - `PROJECT_STATE.md` (optional) — human-readable summary

2. **Unified Tool/Skill Surface**
   - Core registry (read/write state, list skills, run skill)
   - Dynamically loaded skills from `skills/<name>/manifest.json`
   - All exposed to the LLM as callable functions in one shot

3. **Session Lifecycle**
   - Before request → load + summarize state → inject as system message
   - Agent reasons and may call tools
   - After meaningful action → `patch_state` with deltas
   - Next request sees the updated world

## State Schema (Canonical)

```json
{
  "project_id": "default",
  "goal": "...",
  "current_focus": "...",
  "recent_changes": ["..."],
  "open_tasks": ["..."],
  "decisions": ["..."],
  "artifacts": ["path/to/file"],
  "skill_preferences": {},
  "updated_at": "ISO8601"
}
```

## Required Workflow (Follow Strictly)

**At the start of any user request:**

1. Call the equivalent of `read_project_state` (or load from disk).
2. Inject the summarized state as a system message **before** the user message.
3. Tell the agent: "Treat the provided project state as canonical memory. Before major actions inspect state. After major actions, update state."

**After any meaningful change (code written, decision made, task completed):**

```text
patch_state(project_id, {
  "current_focus": "new focus",
  "recent_changes": [...previous, "what just happened"],
  "open_tasks": [remaining tasks],
  "decisions": [...],
  "artifacts": [new files]
})
```

**Never** let the LLM hallucinate prior context when state is available.

## Recommended State Update Pattern

After successful completion of a step:

- Record the concrete artifact paths
- Record the decision in "decisions"
- Move completed items out of "open_tasks"
- Set a crisp "current_focus" for the next turn

## Safety & Scope Boundaries

**This skill MUST:**
- Provide the state injection and registry loading pattern
- Teach agents how and when to call `write_project_state` / `patch_state`

**This skill MUST NEVER:**
- Execute arbitrary code on behalf of the user without explicit approval
- Store secrets, API keys, or PII in state files
- Modify its own SKILL.md or supporting files
- Claim the agent now has long-term memory without the external state files being present

**Data that stays local:** Everything. State lives in the user's project directory.

**Data that leaves the machine:** Only what the underlying LLM (Grok, etc.) would normally see in the prompt.

## Example Trigger + Response

User: "Continue implementing the revenue dashboard. We were working on the Stripe sync last time."

Agent (with this skill):
1. Loads state → sees `current_focus` was "Stripe billing sync", open tasks include "add retry + idempotency".
2. Summarizes for Grok.
3. Proposes next concrete step while updating state after each milestone.

## Integration with OpenClaw / Clawbot

- Drop this skill into any Grok-powered OpenClaw workspace.
- Combine with the native OpenClaw skill loader for even richer omniskill behavior.
- The pattern is directly portable to other stateless backends (Claude, local models, etc.).

## Version History (for changelogs)

- v1.0.0 — Initial release. Core persistent state + unified registry pattern extracted from production clawbot-grok usage with Genesis Conductor and multi-agent systems.

## Attribution

Extracted and generalized from Igor Holt's clawbot-grok reference implementation (persistent state + skill_loader patterns) and Genesis Conductor thermodynamic agent orchestration work.

Use this skill whenever long-running, stateful agent work with Grok or OpenClaw is required.
