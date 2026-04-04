---
title: "FinOps Framework Relationship"
---

# FinOps Framework Relationship

> FOCUS is the data standard that enables FinOps Framework capabilities — it provides the normalized billing data needed for chargeback, showback, allocation, commitment optimization, and unit economics.

## How FOCUS and the FinOps Framework Connect

The FinOps Framework defines **what** organizations should do to manage cloud costs — the practices, capabilities, and maturity models. FOCUS defines **what the data looks like** to support those practices. They're complementary: the framework is the strategy, FOCUS is the data layer.

The FOCUS community explicitly prioritizes enabling FinOps Capabilities and alignment with the FinOps Framework. When deciding which columns to add or how to structure data, the question is always: "Does this help practitioners perform a FinOps capability?"

## Key FinOps Capabilities Enabled by FOCUS

### Chargeback and Showback

- **Chargeback** sends expenses to a product or department P&L — making teams accountable for their actual cloud spend
- **Showback** displays charges by product or department but keeps expenses in a centralized budget — creating visibility without full financial accountability

FOCUS enables both through standardized dimensions like **SubAccountId**, **Tags**, and **ServiceCategory** that allow costs to be sliced by organizational unit, plus **BilledCost** and **EffectiveCost** as the authoritative cost metrics. The v1.2 additions of **BillingAccountType** and **SubAccountType** sharpen allocation to business entities.

### Cost Allocation

Allocating shared costs (shared infrastructure, platform services, support charges) across teams or products is one of the hardest FinOps problems. FOCUS v1.3's **allocation columns** directly address this by standardizing how providers expose their cost-splitting methodology — whether resource-based, usage-based, or hybrid. Practitioners can now see **how** costs were split, not just the result.

Related FOCUS concepts:
- **Allocated Charge** — a charge created through allocation operations from an origin charge
- **Allocated Method** — the process or formula used for allocation

### Commitment Optimization

Understanding [[commitment-discounts]] — their utilization, coverage, and savings — requires consistent data about commitment types, covered charges, and amortized costs. FOCUS provides this through:

- CommitmentDiscountId, CommitmentDiscountType, CommitmentDiscountStatus
- The covering/covered charge relationship
- EffectiveCost (amortized) vs. BilledCost (cash flow)
- v1.3's Contract Commitment dataset for visibility into commitment terms

### Invoice Reconciliation

Matching billing data to actual invoices was a pain point that FOCUS v1.2 addressed directly with the **InvoiceId** column. Every charge, credit, or refund can now be associated with a specific provider invoice, enabling:

- Month-end close workflows
- Audit trails from invoice to line item
- Dispute resolution with provider invoices as the anchor

### Unit Economics

Calculating cost-per-unit metrics (cost per GB stored, cost per API call, cost per user) requires consistent quantity and cost data across providers. FOCUS's separation of [[pricing-and-quantities|pricing and usage quantities]] plus standardized cost metrics make cross-provider unit economics calculations feasible for the first time.

### Budgeting and Forecasting

FOCUS's consistent schema enables time-series analysis across providers using common dimensions. Budget variance analysis becomes simpler when AWS, Azure, and GCP costs all use the same column names, charge categories, and service classifications.

## Key Points

- FOCUS doesn't replace the FinOps Framework — it enables it with standardized data
- The spec's column design is driven by FinOps use cases, not abstract data modeling
- Each major spec release has addressed specific FinOps capability gaps (v1.2 → invoicing, v1.3 → allocation)
- Cross-provider analytics are the killer use case — FOCUS makes multi-cloud FinOps practical rather than heroic
- ServiceCategory enables "how much do I spend on compute?" across all providers with a single query

## Connections

- Related to: [[focus-overview]] — the broader context for why FOCUS exists
- Related to: [[cost-columns]] — the cost metrics that drive FinOps analysis
- Related to: [[commitment-discounts]] — the data model behind commitment optimization
- Related to: [[charge-types-and-categories]] — the classification system for FinOps filtering
- Related to: [[focus-1-2-saas-and-invoicing]] — invoice reconciliation capabilities
- See also: [[focus-1-3-contracts-and-allocation]], [[cloud-provider-support]]

## Sources

- [Adopting FOCUS](https://www.finops.org/wg/adopting-focus-the-finops-open-cost-and-usage-specification/) — FinOps Foundation's adoption guidance
- [FinOps Framework — Chargeback](https://www.finops.org/framework/previous-capabilities/chargeback/) — capability definition
- [FOCUS Specification Overview (GitHub)](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/specification/overview.md) — FinOps alignment design principle
