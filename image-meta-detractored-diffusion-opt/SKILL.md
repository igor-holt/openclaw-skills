---
name: image-meta-detractored-diffusion-opt
description: Modular skill for image metadata extraction, quality scoring, and detractored diffusion inference optimization. Removes distractors and entropy factors from diffusion generation using RQA / hermitian methods for cleaner, faster, more controllable outputs. Primary triggers include detractored diffusion, image meta optimization, diffusion inference cleanup, clean image generation, X Ads creative engine. High VPD for ad creative and media monetization streams. Integrates skillmaru, maru, trace-consent, hermitian-audit, openclaw-hermitian-thermo-orchestrator, Grok Imagine tools.
---

# Image Meta + Detractored Diffusion Optimization

## Overview

Modular operator that extracts useful image metadata, scores quality, and optimizes diffusion inference by removing distractors (noise, irrelevant modes, entropy spikes) using vectorized RQA and hermitian attention methods. Produces cleaner, faster, higher-controllability image outputs. Designed for revenue surfaces such as X Ads creatives, creator tool packs, and edge inference. Fully guarded with maru, trace-consent, and crystalline checks. Public aggregation ready.

## When to Activate

- Explicit: "detractored diffusion", "image meta optimization", "diffusion inference cleanup", "clean image generation", "optimize diffusion for ads", "X Ads creative engine".
- Automatic: When generating or editing images for monetization paths (X Ads, OCR visuals, paid creative packs) or when entropy/quality issues appear in diffusion outputs.
- Via skillmaru: Any new image-related skill that needs clean inference or meta handling.
- High-VPD: Ad creative generation, media optimization services, edge image packs.

## Core Principles (Invariant Constraints)

- Detractor Removal: Identify and suppress entropy-accelerating or low-signal factors in the diffusion process using RQA rotation bases and hermitian self-adjointness so the remaining generation is higher signal and lower waste.
- Metadata First: Extract and use useful meta (composition signals, quality proxies, technical tags) before generation or optimization.
- Thermodynamic Efficiency: Prefer low-active-param / Landauer-aware paths via openclaw-hermitian-thermo-orchestrator when running on constrained hardware.
- Originality & Safety: Respect all existing image-gen-edit gates (real people, factual grounding, no non-consensual). Never override safety.
- Mandatory Guards: maru on R>0.4 / no-win; trace-consent on every run; hermitian-audit on the optimized operator.
- Crystalline Target: >= 0.92. Public aggregation only after invariants hold.

## Instructions

1. **Metadata Extraction & Scoring**
   - Pull available technical and perceptual meta from source images or generation context.
   - Score quality / signal density / distractor risk.
   - Surface only high-value meta for the optimization step.

2. **Detractor Identification**
   - Use vectorized RQA (or proxy) to detect entropy-accelerating modes or low-signal factors in the current diffusion trajectory or prompt space.
   - Flag distractors that increase waste without improving final visual quality or controllability.

3. **Optimization Pass**
   - Apply targeted suppression or re-weighting of identified distractors.
   - Re-run or guide the diffusion (Grok Imagine / edit path) under the cleaned operator.
   - Prefer paths that reduce inference steps or entropy while preserving or improving output quality.

4. **Output & Product Surfaces**
   - Return optimized image(s) + meta summary + crystalline / thermo notes.
   - Primary product surfaces:
     - X Ads creative engine (high-signal ad images that convert).
     - Creator tool packs (clean generation for Original Content Rewards visuals).
     - Edge / low-resource diffusion packs.
   - Feed results into downstream monetization or OCR loops as needed.

5. **Mandatory Hooks**
   - maru integration on R>0.4 or no-win — unconditional #!nox reframe + A2A artifact.
   - trace-consent: immutable ledger entry (D1/Merkle/ORCID 0009-0008-8389-1297) on every invocation.
   - hermitian-audit: self-adjointness and thermodynamic attention check post-optimization.
   - skillmaru: any evolution must re-inject the full guard set.
   - openclaw-hermitian-thermo-orchestrator: preferred backend for efficient inference.
   - Existing image-gen-edit safety gates remain non-negotiable.

6. **Public Aggregation**
   - Publish to igor-holt/openclaw-skills and agentregistry.
   - Zero private data exposure. All artifacts attested.

## Value-Per-Dollar

High VPD. Turns raw diffusion capability into a clean, efficient, monetizable module. Direct revenue paths via X Ads creatives, paid image optimization services, and edge packs. Supports multiple of the 13 streams by improving visual assets that drive engagement and payouts (especially OCR and advertising).

## Connections & Provenance

- Primary tools: Grok Imagine (generate/edit), vectorized RQA / hermitian-audit, openclaw-hermitian-thermo-orchestrator.
- Guards: maru, skillmaru, trace-consent, hermitian-audit.
- Downstream: X Ads creative flows, OCR visual content, diamondnode-qubo (when optimizing creative portfolios), agentregistry, openclaw-skills catalog.
- ORCID: 0009-0008-8389-1297.
- Aligns with: Truth is Structural, Landauer-aware generation, det(T_xy)=1, EO 14363.

## Validation Notes

Test on a high-entropy or distractor-heavy prompt and confirm the optimized output shows lower waste / higher signal while remaining safe and on-brief. Crystalline >=0.92 required before public aggregation. This skill encodes a modular, revenue-ready image optimization surface built on the existing thermo and RQA stack.
