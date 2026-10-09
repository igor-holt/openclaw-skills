---
name: 80-20-knowledge-engine
description: >
  Pareto cut over operator knowledge: isolate the vital 20% of levers that
  move 80% of proof-density and income. Trigger on: 80/20, Pareto, vital few,
  knowledge engine, evidence-to-income, conversion chain, $70k stream.
metadata:
  short-description: "Pareto cut — vital 20% of levers"
  crystalline: "0.93"
  vpd: High
  hermes: Sonnet
  hermes_cap: "8k"
  orcid: "0009-0008-8389-1297"
---

# 80/20 Knowledge Engine

Apply a cold Pareto cut. Do not enumerate everything. Rank levers by expected
income × proof-density, then execute only the vital 20%.

## Maru

maru integration on R>0.4 or no-win — unconditional #!nox reframe + A2A artifact.

A no-win is any of: a livemode Stripe write without explicit operator
confirmation; a footer that says the Maru gate passed while this section is
absent; a $70k/mo stream treated as in motion while the vital levers are
unconfirmed; or a dispatch on an unbound chain. On any of those, stop. Reframe
to the single next confirmed lever. Emit the artifact below with
`"action":"hold"`. Do not stamp `Maru Gate: Passed`. This section is the gate.

## Trace-consent

Produces immutable ledger entry on every invocation with D1/Merkle/ORCID.

ORCID `0009-0008-8389-1297`, consent:full, is the trace id on this skill. If
the A2A bus is unbound, draft the evt- record and mark it not dispatched. Do
not fake a ledger write.

## Hermes

Default Sonnet. A two-lever hold stays inside the 8k cap. Escalate to Opus only
when the operator asks for a cross-skill rewrite of this file. Do not spend
Opus on the catalog that this cut already set aside.

## This invocation (Stripe × Lattice)

Livemode Genesis Conductor, LLC (`acct_1Sw9EcL3TAuvgpHc`):

| Signal | Value |
| --- | --- |
| Available / pending | $0 / $0 |
| Customers, charges, invoices, subscriptions | 0 |
| Payment links | 0 |
| Yennefer.quest SKUs | 3 live products, 3 live prices, `default_price` null |

Vital 20% (weight 0.64):

1. **Publish one live payment link** on `price_1SxD2NL3TAuvgpHcs4x9cOwT` ($29/mo). Weight 0.42. Blocked until the operator confirms a livemode write.
2. **Bind `default_price`** on all three Yennefer.quest products. Weight 0.22. Same write gate.

The remaining 80% (Phase-2 routing, JSONL ledger, $19/$49 on-ramps) is catalog.
It is not this cut. Recurring $29 is the stream that scales toward $70k/mo
(~2,414 subscribers per stream), and only after the link exists.

The balance table is the last cut recorded in this file. Re-read Stripe before
treating it as current.

## A2A artifact

One JSONL line per invocation.

```json
{"evt":"evt-8020-cut","schema_version":"1.0","record_type":"pareto_cut","crystalline_score":0.93,"orcid":"0009-0008-8389-1297","consent":"full","chain":"unbound","action":"hold","levers":["payment_link:price_1SxD2NL3TAuvgpHcs4x9cOwT","default_price:3"],"writes":0,"maru":"#!nox","dispatched":false}
```

## Rules

- No livemode Stripe writes (prices, payment links, product updates) without explicit operator confirmation.
- Naming this skill is not that confirmation.
- Chain unbound: do not fake a dispatch.
- Do not execute the remaining 80% in place of the vital 20%.
