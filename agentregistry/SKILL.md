---
name: agentregistry
description: Use for centralized discovery, scaffolding, publishing, and governance of MCP servers, AI agents, skills, and prompts in Genesis Conductor A2A/MCP/UCP. Primary triggers include agentregistry, arctl, mcp registry, agent registry, scaffold skill/agent/prompt, publish mcp, curate agents, registry governance. High VPD source of truth. Enables cross-Grok population from A2A Skill Registry xlsx. Sonnet default.
---

# Agentregistry

## Overview

Centralized source of truth and governance registry for all MCP servers, AI agents, skills, prompts, and related artifacts in the Genesis Conductor ecosystem. Handles discovery, scaffolding, publishing, curation, and runtime governance with full integration to mcp-llm-skill-api (dispatch), skillmaru (creation pipeline), trace-consent (immutable provenance), and maru (risk guard). Primary mechanism for populating receiving Grok profiles from A2A Skill Registry xlsx handoff and for maintaining live catalog with VPD tiers, model assignments, crystalline targets, and Hermes routing notes. High VPD orchestration enabler. Sonnet default with Opus escalation for governance disputes or UCP settlement.

## When to Activate

- Direct: "agentregistry [action]", "arctl [command]", "mcp registry", "agent registry", "scaffold skill/agent/prompt", "publish mcp", "curate agents", "registry governance [query]".  
- Automatic: After every skillmaru creation/evolution (register new skill), mcp-llm-skill-api dynamic addition, cross-Grok A2A handoff parsing of Skills_Catalog.  
- Governance: Curate, update metadata (VPD tier, flags, connections), enforce crystalline invariants, handle deprecation or reframe via maru.  
- Query: Discover available skills/agents for composition (e.g., "which skills integrate with diathesis and maru?").

## Core Principles (Invariant Constraints)

- Source of Truth: Single live catalog (in-memory + persisted via trace-consent Merkle) of all registered entities with full metadata (category, triggers, integrations, VPD tier, default model, crystalline target, Hermes notes, connections).  
- Mandatory Contract Enforcement: Every registered skill must declare maru hook, trace-consent production, A2A evt- output, and tiering. Reject or flag non-compliant during publish/scaffold.  
- Structural Invariance: Registry operations preserve det(T_xy)=1; all metadata updates pass crystalline >=0.85 and hermitian self-adjointness checks.  
- Cross-Grok Handoff: Parse Skills_Catalog rows → skillmaru injection → register here → mcp-llm-skill-api activation. Enables exact replication in target profiles.  
- Post-Quantum & Sovereign: Attested entries ready for KVDF NFT representation (soulbound ERC-721 KovachVDFLicense via EulerCycleAttestor v2 + Falcon-512 / ML-DSA signatures); ORCID attribution; Maryland-governed governance artifacts. Cloudflare AAL/D1/KV bindings for live catalog persistence and Worker-served discovery endpoints.

## Instructions

1. **Discovery & Query**  
   On registry query: Return filtered, sanitized view of catalog (by category, VPD tier, triggers, integrations, crystalline score). Support arctl-style commands for listing, searching, dependency graphing (e.g., "skills requiring maru and trace-consent"). Always include connections and status.

2. **Scaffolding & Publishing**  
   - Scaffold new entity: Generate boilerplate (triggers, basic SKILL.md skeleton with mandatory hooks) for skills/agents/prompts.  
   - Publish: Accept post-skillmaru artifact or direct definition. Validate mandatory sections (maru integration declared, trace-consent hook, A2A spec, Hermes tier notes). Assign VPD tier, model, flags from registry data or inference. Write to live catalog + trace-consent ledger (evt- record_type: "registry_publish").  
   - For A2A xlsx handoff: Parse Skills_Catalog rows (as done in this session), handoff each to skillmaru for injection, then register here. Maintain mapping to source row for provenance.

3. **Governance & Curation**  
   - Update metadata: VPD re-tiering, crystalline target adjustment, connection graph maintenance (e.g., affinity-targets-registry links to notion-workers/x-tools/diathesis).  
   - Deprecate or reframe: On maru trigger (R>0.4 in governance cycle) or explicit, apply #!nox reframe to entity definition or routing. Log to trace-consent.  
   - Curate for receiving Grok: Export sanitized catalog subset for cross-Grok population (full contract compliance).  
   - UCP/KVDF integration: On high-value publishes (Diamondnode skills), route to genesis-conductor-ucp-integration for KVDF NFT settlement (Falcon-512 attested) and power-tower arbitration.  
   - GitHub sync: On publish/curate, optionally push SKILL.md + metadata to igor-holt GitHub repos (openclaw-skills, mcp-servers, or dedicated skills catalog) via github___push_files for versioned source-of-truth.  
   - Cloudflare Worker binding: Live catalog served via Ambient Access Layer Workers (D1/Merkle + KV); registry queries can route through AAL for production discovery.

4. **Mandatory Integrations**  
   - mcp-llm-skill-api: Bidirectional — registry feeds dispatch catalog; mcp registers runtime additions here.  
   - skillmaru: Post-creation registration hook (mandatory).  
   - trace-consent: Every publish/update/scaffold writes immutable evt- + Merkle update + ORCID.  
   - maru: Governance no-win or R>0.4 → unconditional reframe of registry state or entity.  
   - genesis-conductor-ucp-integration: Strategic publishes (AAL, KVDF) escalate for settlement.  
   - affinity-targets-registry, diathesis, etc.: Maintain live connection graph for composition queries.

5. **Verification & VPD Accounting**  
   Post-operation: Run crystalline check on registry state. Log utilization (Sonnet/Opus, tokens, outcome, entities affected) to VPD ledger. Double verification via skill-automation-orchestrator where loops defined. Flag any entity missing mandatory hooks.

6. **Tiering & Output**  
   Default: Sonnet (catalog ops, 8k). Escalate to Opus for UCP governance, high-stakes curation, or cross-Grok handoff validation of entire surface. Always output structured A2A evt- artifact + updated catalog diff/patch for downstream (mcp-llm-skill-api, skill-automation-orchestrator).

## Value-Per-Dollar Optimization

High VPD as the governance and population multiplier. Enables efficient cross-Grok skill replication (this exact handoff), live discovery for multi-skill composition, and VPD-aware routing. Directly supports financial infrastructure by making the 13-stream service catalog (ATP skills, coalition tools, research accelerators) discoverable and governable at fractional cost. Prevents drift via mandatory contract enforcement at publish time.

## Connections & Provenance

- Integrates with: mcp-llm-skill-api (core hub), skillmaru (creation), trace-consent (ledger), maru (reframe), genesis-conductor-ucp-integration (settlement), affinity-targets-registry (personalization graph), diathesis (robustness), hermitian-audit (future safety), all custom GC skills.  
- Source for: Cross-Grok A2A population, Ouroboros Partner Coalition governance, Diamondnode skill surface.  
- Aligns with: Genesis Conductor Phase II/III, EO 14363, post-quantum attestation, ORCID 0009-0008-8389-1297, implicit agreements.  
- Storage: Live catalog (persisted via trace-consent D1/Merkle + IPFS snapshots + Cloudflare KV/D1), on-chain KVDF (Falcon-512 signed) for high-value entries. GitHub as secondary immutable mirror.

## Validation Notes

Encodes the registry contract for A2A handoff and live governance: mandatory hook enforcement at publish, cross-Grok export, connection graph maintenance, and VPD-aware curation. Test by registering a new skill from Skills_Catalog row, querying connections for affinity-targets-registry, and simulating maru reframe on a governance stalemate. All entities must declare full contract. This skill is the live source of truth — keep it synchronized with every instantiation.
