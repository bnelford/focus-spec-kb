---
title: "Version History"
---

# Version History

> FOCUS has evolved through six releases since its inception, each expanding scope from cloud-only billing to SaaS, contract commitments, and cost allocation.

## Timeline

### Pre-1.0: Origins (2023)

FOCUS began as the **Open Billing working group** under the FinOps Foundation. In January 2023, the decision was made to migrate this work into a standalone project under the Linux Foundation — the FinOps Open Cost and Usage Specification — to provide the governance structure needed for a proper specification. The initial **v0.5 preview** established the foundational schema concepts and was used to validate the approach with early cloud provider partners.

### v1.0 — General Availability (June 20, 2024)

The GA release of FOCUS 1.0 was the inflection point. It defined **43 columns** covering cloud billing data, including the core cost metrics (BilledCost, ListCost, ContractedCost, EffectiveCost), commitment discount handling, and basic resource/service/region dimensions. All four major cloud providers — AWS, Azure, GCP, and Oracle — announced native FOCUS export support alongside this release. The v1.0 release also shipped with open-source [[focus-converter]] implementations and the [[focus-validator]] to accelerate adoption.

### v1.1 — Deeper Cloud Support (November 7, 2024)

Ratified five months after GA, v1.1 added new columns to deepen cloud billing support. Key improvements included enhanced metadata to better support ETL processes and normative changes to existing columns. This was a targeted release focused on making the existing cloud billing schema more complete and practically useful.

### v1.2 — SaaS, Invoicing, and Virtual Currencies (May 29, 2025)

v1.2 was a significant scope expansion. Key additions:

- **SaaS/PaaS support**: Foundational columns for pricing currencies, effective cost, and contracted pricing in non-monetary units (credits, tokens)
- **InvoiceId column**: Links every charge row directly to a provider invoice, enabling direct invoice reconciliation
- **BillingAccountType and SubAccountType**: Sharper cost allocation to business entities
- **Virtual currency lifecycle**: Tracks credit and token consumption from AI services and SaaS platforms

This release represents FOCUS moving beyond "just cloud" toward being the unified schema for all technology billing.

### v1.3 — Contracts, Allocation, and Data Quality (December 4, 2025)

The most architecturally significant release since 1.0. v1.3 introduced:

- **Contract Commitment dataset**: A supplemental dataset (the first time FOCUS extended beyond the core cost/usage dataset) that isolates contract terms — start/end dates, remaining units, descriptions. This gives practitioners structured visibility into their contractual obligations.
- **Allocation columns**: New columns that expose *how* providers split shared costs across workloads — whether resource-based, usage-based, or hybrid. Practitioners can now see the methodology, not just the output.
- **Data recency and completeness**: Providers must now timestamp datasets and flag completeness status, addressing a long-standing trust problem with billing data freshness.

### v1.4 — Under Development (2026)

As of early 2026, v1.4 is actively being developed. The backlog includes member feedback and requests accumulated since v1.3. Future versions will deepen SaaS support while expanding to **data center** and **AI** billing scopes.

## Key Points

- Six releases over approximately 2.5 years — a cadence of roughly one release every 4–5 months
- The spec follows Semantic Versioning 2.0
- Each release must pass through community contribution, review, approval, ratification by the Steering Committee, and IP review — all conducted openly via GitHub
- The working draft branch (`working_draft`) on GitHub has 607+ commits, showing active development between releases

## Connections

- Related to: [[focus-overview]] — what the spec is and why it exists
- Related to: [[governance-and-charter]] — the ratification process
- Related to: [[focus-1-2-saas-and-invoicing]] — deep dive on v1.2 features
- Related to: [[focus-1-3-contracts-and-allocation]] — deep dive on v1.3 features
- See also: [[roadmap-and-future]]

## Sources

- [FOCUS 1.0 is Now Available](https://www.finops.org/insights/focus-1-0-available/) — GA announcement
- [FOCUS Specification Releases (GitHub)](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/releases) — all release tags
- [Linux Foundation FOCUS 1.3 Press Release](https://www.linuxfoundation.org/press/finops-foundation-launches-focus-1.3-to-deepen-cloud-and-saas-billing-transparency-announces-expanded-vendor-support-for-focus-1.2) — v1.3 announcement with vendor support details
- [FOCUS Specification page](https://focus.finops.org/focus-specification/) — links to all published versions
