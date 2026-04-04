---
title: "FOCUS 1.2: SaaS/PaaS Support and Invoice Reconciliation"
---

# FOCUS 1.2: SaaS/PaaS Support and Invoice Reconciliation

> Version 1.2 expanded FOCUS beyond cloud-only billing into SaaS and PaaS territory, added direct invoice linking, and introduced virtual currency support for AI and token-based services.

## Release Context

FOCUS v1.2 was ratified by the Steering Committee on **May 29, 2025**. It represents the spec's first major scope expansion — moving from "cloud billing standard" toward "technology billing standard." This release directly addressed three use cases that practitioners had been requesting since v1.0.

## Key Features

### SaaS/PaaS Support

v1.2 introduced foundational support for **Software as a Service** and **Platform as a Service** billing data. This means SaaS providers can now produce FOCUS-compliant billing exports, and practitioners can combine SaaS costs with cloud costs in a single schema.

New normative columns support:
- **Pricing currencies** — handling both national currencies (USD, EUR) and virtual currencies
- **Effective cost calculations** for SaaS charges
- **Contracted pricing in non-monetary units** — credits, tokens, and other virtual currency denominations

This is the "Cloud+ Unified Reporting" capability — combining SaaS, PaaS, and Cloud billing in one schema.

### Invoice Reconciliation (InvoiceId)

v1.2 added the **InvoiceId column**, which links every charge row directly to a specific provider invoice. This is deceptively powerful:

- **Month-end close**: Finance teams can now trace any charge back to an invoice, matching FOCUS data against accounts payable
- **Dispute resolution**: When a charge looks wrong, you can immediately identify which invoice it appeared on
- **Audit compliance**: Creates a clear paper trail from analyzed costs back to source invoices
- **Chargeback accuracy**: Departments can verify that their allocated costs align with invoiced amounts

Previously, mapping FOCUS rows to invoices required provider-specific logic. InvoiceId standardizes this across providers.

### Deeper Cost Allocation

New columns sharpen the ability to allocate costs to business entities:

- **BillingAccountType** — classifies the billing account (e.g., enterprise agreement, pay-as-you-go, reseller)
- **SubAccountType** — classifies sub-accounts within a billing hierarchy

These allow practitioners to build more nuanced allocation models that account for the different financial relationships within their organization's cloud setup.

### Virtual Currency Lifecycle

The addition of virtual currency support is forward-looking. As AI services (OpenAI, Anthropic, etc.) and SaaS platforms increasingly bill in **tokens, credits, or custom units** rather than dollars, FOCUS needs to track:

- How credits/tokens are purchased (in national currency)
- How they're consumed (in virtual currency units)
- The effective cost in national currency after consumption

v1.2's pricing currency columns handle this by allowing costs to be expressed in both the provider's virtual currency and the billing account's national currency.

## Impact on the Ecosystem

- **Cloud providers**: Azure began previewing FOCUS 1.2 exports in late 2025
- **FinOps vendors**: Tools that adopt v1.2 can offer cross-cloud + SaaS unified dashboards
- **Practitioners**: The ability to combine cloud and SaaS costs in one analysis was a top request

## Key Points

- v1.2 is where FOCUS stopped being "just a cloud billing spec" and became a technology billing spec
- InvoiceId solves a real pain point for finance teams doing month-end reconciliation
- Virtual currency support positions FOCUS for AI billing, which is increasingly token-denominated
- SaaS adoption is still the biggest gap — most SaaS providers don't yet generate FOCUS data natively
- BillingAccountType and SubAccountType enable more accurate cost allocation models

## Connections

- Related to: [[version-history]] — where v1.2 fits in the release timeline
- Related to: [[cost-columns]] — how v1.2 enriches cost calculations
- Related to: [[pricing-and-quantities]] — virtual currency pricing changes
- Related to: [[finops-framework-relationship]] — invoice reconciliation and chargeback capabilities
- Related to: [[focus-1-3-contracts-and-allocation]] — the next release's additions
- See also: [[cloud-provider-support]], [[finops-vendor-adoption]]

## Sources

- [Introducing FOCUS 1.2](https://www.finops.org/insights/focus-1-2-available/) — official release announcement
- [Linux Foundation FOCUS 1.3 Press Release](https://www.linuxfoundation.org/press/finops-foundation-launches-focus-1.3-to-deepen-cloud-and-saas-billing-transparency-announces-expanded-vendor-support-for-focus-1.2) — v1.2 vendor support details
- [FOCUS Specification v1.2](https://focus.finops.org/focus-specification/v1-2/) — specification text
