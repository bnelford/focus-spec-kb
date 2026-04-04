---
title: "Pricing and Quantities"
---

# Pricing and Quantities

> FOCUS separates pricing from usage into distinct column pairs, accommodating the reality that providers often price resources differently from how they're consumed.

## The Pricing vs. Usage Distinction

A key insight embedded in the FOCUS data model is that **how you're charged** (pricing) and **how you consume** (usage) are often measured in different units. For example, a storage service might price in GB-months but you consume in bytes. A compute service might price in "normalized instance-hours" but you use actual vCPU-hours. FOCUS makes this explicit with separate column pairs.

### Pricing Columns

- **PricingQuantity** — the quantity of the service consumed, expressed in the provider's **pricing unit**. This is the number that gets multiplied by the unit price to produce the cost.
- **PricingUnit** — the unit of measurement for pricing (e.g., "GB-month", "hours", "requests", "units")

### Usage Columns

- **UsageQuantity** — the quantity of the service consumed, expressed in the provider's **usage unit**. This reflects real-world consumption in terms the user can understand.
- **UsageUnit** — the unit of measurement for usage (e.g., "GB", "hours", "API calls")

### Unit Prices

- **ListUnitPrice** — the published retail price per PricingUnit, before any discounts
- **ContractedUnitPrice** — the negotiated price per PricingUnit, inclusive of negotiated discounts but excluding commitment discounts

## Block Pricing

FOCUS explicitly handles **block pricing** — a pricing model where cost is determined based on predefined quantities or tiers of usage. In block pricing, you pay for a "block" of units regardless of whether you use all of them. For example, a provider might sell storage in 100 GB blocks — if you use 150 GB, you pay for 2 blocks (200 GB).

The PricingQuantity and PricingUnit columns capture the block-level pricing, while UsageQuantity and UsageUnit capture actual consumption. This separation lets practitioners verify pricing accuracy and identify waste from partially-used blocks.

## How Cost Is Calculated

The fundamental equation:

```
ListCost = ListUnitPrice × PricingQuantity
ContractedCost = ContractedUnitPrice × PricingQuantity
```

EffectiveCost adds amortization of prepaid commitments on top of this, and BilledCost reflects the invoiced amount (which may differ from EffectiveCost for commitment purchases).

## SKU and SKU Price

Two supporting concepts tie pricing together:

- **SKU (Stock Keeping Unit)** — a construct composed of the common properties of a product offering. Think of it as the abstract "thing" you're buying (e.g., "m5.large Linux instance in us-east-1").
- **SKU Price (SkuPriceId)** — a pricing construct that encompasses the functionality, specifications, and stable pricing details of a specific SKU. Multiple SKU Prices can exist for the same SKU — representing different pricing tiers, commitment levels, or regions.

## Virtual Currencies (v1.2+)

Starting with v1.2, FOCUS supports **virtual currencies** — proprietary provider-issued credits or tokens used as billing units. This is critical for SaaS platforms (and increasingly for AI services) that don't bill in national currency units. Think Azure Monetary Credits, AWS Credits, or AI inference tokens.

The spec accommodates this through pricing currency columns that can represent both national currencies (ISO 4217) and virtual currencies, allowing practitioners to track token/credit consumption alongside traditional monetary costs.

## Key Points

- PricingQuantity × UnitPrice = Cost — this relationship is explicit and verifiable in FOCUS data
- The pricing/usage split makes it possible to identify block pricing waste and verify provider charges
- SkuPriceId is the key that links a charge to its specific pricing terms
- Usage and pricing units are **not always the same** — don't assume they're interchangeable
- Virtual currency support (v1.2) enables FOCUS to handle SaaS and AI billing models

## Connections

- Related to: [[cost-columns]] — the cost outputs that pricing feeds into
- Related to: [[commitment-discounts]] — how commitments modify pricing
- Related to: [[columns-dimensions-metrics]] — the broader schema context
- See also: [[focus-1-2-saas-and-invoicing]], [[charge-types-and-categories]]

## Sources

- [Microsoft Learning FOCUS: Prices + quantities](https://techcommunity.microsoft.com/blog/finopsblog/learning-focus-prices--quantities/4418097) — practical walkthrough
- [FOCUS Glossary (GitHub)](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/specification/glossary.md) — definitions for SKU, Block Pricing, Virtual Currency
- [FOCUS Specification v1.2 (PDF)](https://focus.finops.org/wp-content/uploads/2025/05/FOCUS-spec-v1_2.pdf) — virtual currency additions
