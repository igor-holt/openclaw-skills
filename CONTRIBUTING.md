# Contributing to openclaw-skills

Thank you for your interest in contributing to Igor Holt's OpenClaw Skills — the professional "paired trio" for persistent memory, MCP bridging, and Smithery orchestration inside autonomous agents.

These skills are published via [ClawHub](https://clawhub.com) and are designed for production-grade reliability, clear safety boundaries, and composability with Genesis Conductor patterns.

## Ways to Contribute

- **Improve documentation** (READMEs, examples, USAGE guides, combined workflows)
- **Enhance supporting files** (templates, scripts, checklists)
- **Report bugs** or suggest features for the skills or repo structure
- **Propose new companion skills** that follow the same high bar (persistent state discipline, explicit pairing, safety declarations)
- **Fixes to examples or publishing tooling**

## Important Rules for Skill Content

**Do NOT edit the core `SKILL.md` files** inside `grok-persistent-state/`, `mcp-openclaw-bridge/`, or `smithery-mcp-orchestrator/` unless you are fixing a clear factual error, security issue, or updating version metadata with a corresponding changelog entry.

These files are the canonical definitions that get published to ClawHub. Changes here affect every agent that installs the skill.

Preferred places for improvements:
- `README.md` (human-friendly quick start + examples) inside each skill folder
- `examples/` and `docs/` at the root
- Supporting JSON templates and publishing scripts

## Development & Testing Process

1. Clone the repo and explore the three skill directories.
2. Read the root `README.md` to understand the "paired trio" philosophy.
3. Make focused changes (one skill or one doc at a time).
4. Validate that any new examples or workflows correctly reference the trigger phrases and safety rules from the corresponding `SKILL.md`.
5. If you have access to an OpenClaw + Grok (or Claude Code) environment, smoke-test the updated skill instructions.
6. For publishing changes, follow `publishing/PRE_PUBLISH_CHECKLIST.md`.

## Pull Request Guidelines

- Use clear, descriptive PR titles (e.g., "docs: add quick-start examples to grok-persistent-state").
- Reference any related issues.
- Keep PRs small and reviewable.
- Include before/after context or example agent sessions when changing documentation.
- All contributions must remain MIT-0 compatible.

## Issue Reporting

Please use the provided issue templates:
- Bug report
- Feature request

When reporting a skill behavior issue, include:
- The exact trigger phrase used
- The OpenClaw / agent environment
- Relevant excerpts from persistent state (redacted)
- Expected vs actual behavior

## Code of Conduct

This project follows the spirit of the broader open agent ecosystem: professionalism, clarity, safety, and raising the reliability floor for everyone.

Be respectful in discussions. Feedback on architectural patterns is welcome; personal attacks are not.

## Licensing & Attribution

All contributions are made under the MIT-0 license (see `LICENSE`).

When adding substantial new patterns, please keep attribution to original authors where appropriate while following the lightweight style used in the existing skills.

## Questions?

- Open an issue with the "question" label (or just ask in a feature request / discussion).
- For broader context, see the links in the root `README.md` (Genesis Conductor, igor-holt.github.io).

Thank you for helping make autonomous agents more reliable and production-ready.

— Igor Holt & contributors