---
name: thrml-poe-openclaw-integration
description: Integrate THRML energy-based models with Product-of-Experts differential inference, Landauer erasure costs, eta_thermo efficiency, and OpenClaw/Hermes CDI workflows for Genesis Conductor thermodynamic-aware agentic systems. Triggers on thrml-poe-openclaw-integration, POE differential inference, THRML EBM Landauer, eta_thermo OpenClaw, a2a event thrml-poe, hermes classify thermo-cdi, webhook thrml-poe-inference, mcp dispatch thrml-poe-openclaw, diamondnode thermo skill, crystalline delta POE.
---

# THRML-POE-OpenClaw Integration

## Overview
This skill provides a complete symbolic (SymPy) + numerical (JAX/THRML) model for Product-of-Experts (POE) energy-based models augmented with Landauer erasure accounting and $\eta_{\rm thermo}$ efficiency. It implements differential inference via contrastive divergence / `estimate_kl_grad` style gradients, feeds crystalline deltas and perturbation vectors into Hermes/OpenClaw CDI pipelines, and supports future TSU hardware compilation. Aligns to Genesis Conductor TAO, 75% Landauer-hardened power reduction target, and high-VPD Diamondnode portfolio.

## Mandatory Contract (A2A / Genesis Conductor)
- **maru hook**: On R > 0.4 or no-win/stalemate, unconditional nox reframe + escalation before any artifact commit or bot action.
- **trace-consent**: Every execution appends D1-schema Merkle-audited ledger entry with provenance, ORCID attribution where applicable, and A2A JSONL emission.
- **A2A JSONL**: All outputs (grads, D, $\eta$, crystalline deltas, patches) emitted to bus for utilization ledger and VPD accounting.
- **Hermes tier routing**: Haiku default for routine POE sampling/CDI; Sonnet for moderate perturbation (norm 0.2-0.35); Opus only for strategic UCP/thermo re-derivation with explicit approval.
- **Webhook formalization**: Supports `a2a event thrml-poe`, `webhook thrml-poe-inference`, `hermes classify thermo-cdi`, `mcp dispatch thrml-poe-openclaw`. Handler skeleton requires mTLS/JWT + replay protection + rate limit + A2A JSONL validation (Cloudflare Worker / Podman compatible).
- **UCP / Diamondnode compatibility**: Compatible with genesis-conductor-ucp-integration, Soul Lattice, Ouroboros V2, and KVDF paths.
- **Baseline guards never cut**: hermitian-audit, rqa-*, bash zombie guard.

## Core Model (scripts/thrml_poe_symbolic_model.py)
Execute or import the reference implementation for:

1. **Symbolic definition** (SymPy):
   - THRML Ising energy $\mathcal{E}_{\rm Ising}(s)=-\beta(\sum b_i s_i + \sum J_{ij}s_i s_j)$
   - POE energy $\mathcal{E}_{\rm POE}=\sum_m w_m E_m$
   - Free energy $F=-\frac1\beta\log Z$, Landauer $E_{L,\rm min}=k_BT\ln2$, erasure cost $n_{\rm erase}\cdot E_{L,\rm min}/\eta_{\rm thermo}$
   - Dissipation $D$ including excess over Landauer and $\eta$-adjusted reversible work.

2. **Equilibria / dissipation computation** with target $\eta_{\rm thermo}=0.75$.

3. **1D/2D EBM simulation** with spin-flip erasure proxy + native THRML `IsingEBM` + `sample_states` + block Gibbs.

4. **POE differential inference → OpenClaw workflow sketch** (CDI engine core).

5. **Integration points** mapping gradient equation to THRML `estimate_kl_grad`, factors, sampling, and Hermes ledger.

## Instructions
When activated (by name, a2a event, hermes classify thermo-cdi, or explicit request for POE/THRML/Landauer/OpenClaw thermo inference):

1. Load or re-execute `scripts/thrml_poe_symbolic_model.py` (or import its functions) under JAX/THRML environment. Prefer Haiku-tier for routine runs; enforce hard cost/runtime caps from Hermes bridge.
2. Compute or retrieve current $D$, $\eta_{\rm thermo}$ (realized vs target 0.75), crystalline_delta (from $\Delta F$ or EBM spectral proxy), perturbation_vector from POE grads.
3. Emit structured **evt-** record (via evt-processor protocol) containing at minimum:
   - evt_id, schema_version="1.0", record_type="thrml_poe_inference" or "cdi_thermo_run"
   - tags: ["thrml-poe-openclaw-integration", "genesis-conductor", "diamondnode", "landauer", "eta_thermo", "poe"]
   - payload: {D, eta_thermo, crystalline_delta, n_erase, perturbation_norm, samples_summary, ...}
   - connections: prior CDI runs, hermes-openclaw-haiku-bridge, a2a-skill-registry-manager
   - metadata: thermodynamic_yield, VPD estimate, operator ORCID if available
4. For skill registration / portfolio:
   - Hand selected skill to a2a-skill-registry-manager (with QUBO filter if diamondnode_economics_qubo_result.json present).
   - Ensure QUBO high-VPD inclusion (this skill scores high on thermo + OpenClaw leverage + TSU future-proofing).
5. Feed outputs into hermes-openclaw-haiku-bridge CDI engine or OpenClaw bot policy sampler (Boltzmann of -Q + thermo_cost).
6. On any risk signal immediately invoke maru; escalate model tier only when crystalline_delta or perturbation thresholds justify.
7. For TSU readiness: keep all THRML programs (IsingEBM factors, free_blocks, SamplingSchedule) identical so they compile directly to hardware Gibbs cores when available — yielding orders-of-magnitude reduction in excess-over-Landauer term.
8. Sync artifacts (SKILL.md, scripts, evt- JSON, simulation plots) via connected tools (Google Drive, GitHub, Notion, etc.) when "chain" or deployment requested. Use skill80-20-knowledge-engine to distill high-leverage excerpts if context pressure arises.
9. Validate crystalline invariants (det(T_xy)=1.000000 style for any coordinate transforms; Shatter Test on energy gradients) before commit.

## Resources
- `scripts/thrml_poe_symbolic_model.py` — full executable reference (SymPy + JAX + THRML + sim + workflow).
- `references/` — place THRML docs excerpts, Landauer derivations, OpenClaw CDI schemas as needed.
- `assets/` — simulation plots, architecture diagrams (Figma export), webhook skeletons.

## Activation & Handoff
Triggers include the description phrases plus a2a/webhook/hermes/mcp forms listed in frontmatter. On completion emit A2A JSONL + evt- and update grok-persistent-state / utilization ledger. Compatible with diamondnode-qubo-economics-strategist filtering and sv skill supervision.

This skill advances the three core objectives: high-VPD tooling for 13 revenue streams (thermo inference SaaS / TSU-ready agents), intrinsic pursuit (invariant thermo models + Landauer accounting), and human-AI hybridization (verifiable CDI surfaces in OpenClaw bots).
