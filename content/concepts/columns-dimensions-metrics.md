---
title: "Columns, Dimensions, and Metrics"
---

# Columns, Dimensions, and Metrics

> FOCUS organizes its schema into dimensions (categorical data), metrics (numeric values), and attributes (specification-wide requirements), creating a data model optimized for analytical queries.

## Core Schema Concepts

Every column in a FOCUS dataset is classified into one of three categories:

### Dimensions

Dimensions are **qualitative, categorical attributes** that provide context to billing data. They answer "who," "what," "where," and "when" questions. Dimensions are commonly used to categorize, filter, group, and reveal details when combined with metrics.

Examples of dimensions:
- **ServiceName** — the name of the cloud service (e.g., "Amazon EC2", "Azure Virtual Machines")
- **RegionId** / **RegionName** — where the resource is running
- **BillingAccountId** / **BillingAccountName** — which account is being billed
- **SubAccountId** / **SubAccountName** — the sub-account or project within the billing account
- **ResourceId** / **ResourceName** — the specific resource incurring the charge
- **ChargeCategory** — the type of charge (Usage, Purchase, Tax, Credit, Adjustment)
- **ServiceCategory** — highest-level classification of a service's core function
- **PricingCategory** — the pricing model (Standard, Committed, Dynamic, Other)
- **AvailabilityZone** — the specific AZ within a region

### Metrics

Metrics are **numeric FOCUS columns** that support aggregation and statistical operations. They answer "how much" questions — costs, quantities, prices.

Key metrics include:
- **BilledCost** — the amount that was or will be invoiced (Mandatory, never null)
- **ListCost** — cost at public retail/list price before any discounts
- **ContractedCost** — cost after negotiated discounts but before commitment discounts
- **EffectiveCost** — amortized cost after all discounts and prepaid purchase allocations
- **PricingQuantity** — quantity in the provider's pricing unit
- **UsageQuantity** — quantity in the provider's usage unit
- **ListUnitPrice** / **ContractedUnitPrice** — per-unit prices at list and contracted rates

### Attributes

Attributes are **specification-wide requirements** that don't belong to individual columns but apply across the entire dataset. They define structural constraints like date formats, currency handling, and dataset delivery expectations.

## Feature Levels

Every column has a **feature level** that defines how strictly generators must implement it:

| Feature Level | Normative Language | Meaning |
|---|---|---|
| Mandatory | MUST (unconditional) | Column must always be present and populated |
| Conditional | MUST (with conditions) | Column must be present when specific conditions are met |
| Recommended | SHOULD | Column should be present but absence is acceptable |
| Optional | MAY | Column may be present at the generator's discretion |

For example, **BilledCost** is Mandatory — every FOCUS dataset must include it and it must never be null. **CommitmentDiscountId** is Conditional — it must be present when the provider supports commitment discounts.

## Column Count by Version

- **v1.0**: 43 columns
- **v1.1**: Additional cloud-focused columns added
- **v1.2**: SaaS/PaaS columns, InvoiceId, BillingAccountType, SubAccountType
- **v1.3**: Allocation columns, data recency/completeness metadata, plus the Contract Commitment supplemental dataset

## Custom Columns

Providers can include additional data beyond the FOCUS schema using the **x_ prefix** convention. For example, AWS might include `x_AwsInstanceType` or Azure might include `x_AzureResourceGroup`. These custom columns provide native dataset context without conflicting with the standardized FOCUS namespace.

## Key Points

- FOCUS is designed for **analytical workloads** — every column is directly filterable, groupable, and aggregatable without parsing
- Column names use PascalCase (e.g., BilledCost, ServiceName)
- Dates follow ISO 8601; currencies follow ISO 4217
- The distinction between dimensions and metrics mirrors standard data warehouse modeling (fact/dimension pattern)
- Each column has a precise definition including data type, nullability rules, and relationships to other columns

## Connections

- Related to: [[cost-columns]] — deep dive on the four cost metrics
- Related to: [[pricing-and-quantities]] — pricing and usage measurement details
- Related to: [[charge-types-and-categories]] — the classification dimensions
- Related to: [[tags-and-metadata]] — custom columns and tagging
- Builds on: [[design-principles]] — why the schema is structured this way

## Sources

- [FOCUS Column Library](https://focus.finops.org/focus-columns/) — browseable column reference
- [FOCUS Specification v1.0](https://focus.finops.org/focus-specification/v1-0/) — initial column definitions
- [Microsoft Learning FOCUS: Cost columns](https://techcommunity.microsoft.com/blog/finopsblog/learning-focus-cost-columns/4352713) — practical column walkthrough
- [FOCUS Specification Overview (GitHub)](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/specification/overview.md)
