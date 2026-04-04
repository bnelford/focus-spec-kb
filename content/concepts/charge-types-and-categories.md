---
title: "Charge Types and Categories"
---

# Charge Types and Categories

> FOCUS classifies every charge along two axes: what kind of charge it is (ChargeCategory/ChargeClass) and how it was priced (PricingCategory), plus the service's functional category (ServiceCategory).

## ChargeCategory

ChargeCategory describes **what the charge represents**. It answers: "Is this a usage charge, a purchase, a tax, a credit, or an adjustment?"

Allowed values:
- **Usage** — charges for consuming a service (compute hours, storage GB, API calls)
- **Purchase** — buying a commitment or one-time fee (RI purchase, Savings Plan enrollment, domain registration)
- **Tax** — government-imposed taxes, surcharges, or fees
- **Credit** — a financial incentive unrelated to other charges (promotional credits, free-tier credits)
- **Adjustment** — modifications to billing data addressing errors, disruptions, or pricing changes

## ChargeClass

ChargeClass provides a **secondary classification** that refines ChargeCategory. While ChargeCategory tells you the nature of the charge, ChargeClass indicates whether it's a normal charge or a correction. Key values include:

- **Correction** — modifications to previously delivered records within defined delivery scopes
- **Refund** — a return of previously charged funds

## PricingCategory

PricingCategory describes **how the charge was priced** — the pricing model or mechanism used. It answers: "Was this priced at standard rates, through a commitment, or dynamically?"

Allowed values:
- **Standard** — pricing at the predetermined agreed-upon rate for the billing account (your normal contracted rate)
- **Committed** — the charge is subject to an existing [[commitment-discounts|commitment discount]] (it's a covered charge, not the purchase of the commitment)
- **Dynamic** — pricing determined by the provider and may change over time (spot instances, preemptible VMs), regardless of any predetermined agreement pricing
- **Other** — a pricing model exists but none of the allowed values apply

PricingCategory is **Conditional** — it must be present when the provider supports more than one pricing category across all SKUs.

## ServiceCategory

ServiceCategory is the **highest-level classification** of a service based on its core function. It answers: "What kind of service is this?" Think of it as the broadest possible grouping — compute, storage, networking, database, AI/ML, analytics, etc.

ServiceCategory is **Mandatory** — it must be present in every FOCUS dataset and must never be null. This makes it a reliable grouping dimension for cross-provider analysis (e.g., "What do I spend on compute across all clouds?").

## How They Work Together

These categories create a multi-dimensional classification system:

```
A charge for an EC2 instance covered by a Reserved Instance:
  ChargeCategory: Usage
  PricingCategory: Committed
  ServiceCategory: Compute
  CommitmentDiscountType: "Standard RI"

A tax line item:
  ChargeCategory: Tax
  PricingCategory: (null or N/A)
  ServiceCategory: (inherits from taxed service)

A spot instance charge:
  ChargeCategory: Usage
  PricingCategory: Dynamic
  ServiceCategory: Compute

A promotional credit:
  ChargeCategory: Credit
  PricingCategory: (null or N/A)
```

## Key Points

- ChargeCategory and PricingCategory are orthogonal — a Usage charge can be Standard, Committed, or Dynamic
- ServiceCategory enables cross-provider spend analysis at the function level
- ChargeClass is a refinement of ChargeCategory, not a separate axis
- PricingCategory specifically excludes commitment *purchases* — "Committed" means a charge *covered by* a commitment, not the commitment purchase itself
- These columns are designed for direct filtering and grouping in analytical queries — no parsing required

## Connections

- Related to: [[columns-dimensions-metrics]] — the broader column taxonomy
- Related to: [[commitment-discounts]] — the commitment pricing mechanism behind "Committed" PricingCategory
- Related to: [[cost-columns]] — how charge types affect cost metrics
- See also: [[pricing-and-quantities]], [[finops-framework-relationship]]

## Sources

- [Microsoft Learning FOCUS: Charge types and pricing models](https://techcommunity.microsoft.com/blog/finopsblog/learning-focus-charge-types-and-pricing-models/4357997) — detailed walkthrough
- [FOCUS Column Library](https://focus.finops.org/focus-columns/) — column definitions and allowed values
- [FOCUS Glossary (GitHub)](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/specification/glossary.md) — term definitions
