---
title: "Design Principles"
---

# Design Principles

> FOCUS is built on four core principles: iterative development, scenario-driven design, provider neutrality, and extensibility.

## Iterative Development

The FOCUS team deliberately chose a fast-release cadence over trying to ship a comprehensive spec all at once. Regular incremental releases prioritize **practical value over completeness** — each version adds a targeted set of capabilities that address real practitioner needs. This approach means the spec can ship useful improvements (like SaaS support in v1.2 or contract commitments in v1.3) without waiting for every possible billing scenario to be modeled.

The working draft branch on GitHub has over 607 commits, showing continuous work between formal releases. This is a living spec, not one that sits static between major versions.

## Scenario-Driven Design

The guiding mantra is: *"Define columns that answer scenario questions; don't look for scenarios to fit a column."* Every column in the FOCUS schema exists because it solves a specific FinOps use case — chargeback, commitment optimization, invoice reconciliation, unit economics, or similar. Columns are not added speculatively or because they "might be useful."

This means the spec is shaped by practitioner workflows, not abstract data modeling. When the FOCUS community identifies a use case that can't be adequately addressed by the current schema (e.g., "I need to reconcile my FOCUS data against my invoice"), a new column or dataset is designed to answer that specific question (→ InvoiceId in v1.2).

## Provider Neutrality

While the FOCUS team reviews major CSP implementations (AWS CUR, Azure Cost Management, GCP BigQuery billing export, OCI cost reports) when designing columns, the specification remains **agnostic**. No column definition is shaped to favor or simplify adoption for any single provider. This is reinforced by the [[governance-and-charter]] — FOCUS is structured as an independent project specifically to avoid capture by any vendor.

Provider-specific data that doesn't fit the FOCUS schema can still be included using the **x_ prefix** convention for custom columns. This lets providers add their own dimensions without polluting the standard namespace.

## Extensibility

FOCUS is designed to grow without breaking backward compatibility. Key extensibility mechanisms include:

- **Custom columns (x_ prefix)**: Providers can include additional data beyond what FOCUS specifies
- **Feature levels**: Columns are classified as Mandatory, Conditional, Recommended, or Optional — allowing the spec to express a range of requirements without forcing all-or-nothing adoption
- **Supplemental datasets**: v1.3 introduced the Contract Commitment dataset as a separate, linked dataset. This pattern allows FOCUS to expand into adjacent data domains without overloading the core cost/usage schema.
- **SaaS and non-monetary units**: v1.2 added support for virtual currencies (credits, tokens), meaning the spec can accommodate pricing models beyond simple per-unit-per-hour cloud billing

## Data Analysis Optimization

A secondary but important principle: FOCUS columns are designed for **large-scale analytical queries**. Column definitions avoid requiring value parsing or complex JSON structures — every field should be directly filterable, groupable, and aggregatable without transformation. This reflects the reality that FOCUS data is consumed in data warehouses (BigQuery, Snowflake, Redshift) and BI tools, not in application code.

## Naming Conventions

FOCUS uses **PascalCase** for all column names (e.g., BilledCost, ServiceName, CommitmentDiscountId). The spec follows ISO standards where applicable — ISO 8601 for dates, ISO 4217 for currency codes. Naming is designed to create logical associations: related columns share prefixes (e.g., Commitment Discount Id, CommitmentDiscountName, CommitmentDiscountType).

## Key Points

- The spec uses RFC 2119 / BCP 14 normative language: MUST, MUST NOT, SHOULD, SHOULD NOT, MAY
- Feature levels map to normative language: Mandatory = unconditional MUST, Conditional = MUST with conditions, Recommended = SHOULD, Optional = MAY
- The scenario-driven approach keeps the spec lean — no "nice to have" columns

## Connections

- Related to: [[focus-overview]] — the broader context for these principles
- Related to: [[columns-dimensions-metrics]] — how the principles manifest in the data model
- Related to: [[tags-and-metadata]] — the x_ prefix extensibility mechanism
- See also: [[governance-and-charter]], [[contribution-process]]

## Sources

- [FOCUS Specification Overview (GitHub)](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/specification/overview.md) — design rationale and structural principles
- [FOCUS Foundation — Guiding Principles](https://github.com/FinOps-Open-Cost-and-Usage-Spec/foundation) — foundational project values
