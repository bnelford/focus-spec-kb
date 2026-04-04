---
title: "Cost Columns"
---

# Cost Columns

> FOCUS defines four cost metrics — ListCost, ContractedCost, EffectiveCost, and BilledCost — that represent a charge at different stages of discount application, from retail price to invoice amount.

## The Four Cost Metrics

Understanding the relationship between these four cost columns is fundamental to working with FOCUS data. They represent a **discount cascade** — the same charge seen through different pricing lenses:

### ListCost

**Definition**: Cost calculated by multiplying the List Unit Price by the corresponding Pricing Quantity.

ListCost represents the **public retail or market price** without any discounts applied. This is the "sticker price" — what you'd pay if you walked in off the street with no agreements, no commitments, and no negotiated rates.

Use cases: Calculating the value of your negotiated discounts, benchmarking against public pricing, understanding the theoretical maximum cost.

### ContractedCost

**Definition**: Cost calculated using the Contracted Unit Price, which is the agreed-upon unit price inclusive of **negotiated discounts** but exclusive of commitment discounts.

ContractedCost reflects your organization's **negotiated pricing** — enterprise agreements, custom rate cards, volume-based discounts that were privately negotiated with the provider. It does not include savings from commitment purchases (Reserved Instances, Savings Plans, CUDs).

Use cases: Understanding the value of commitment discounts specifically (the delta between ContractedCost and EffectiveCost), evaluating the effectiveness of your procurement negotiations.

### EffectiveCost

**Definition**: The amortized cost of the charge after applying all reduced rates, discounts, and the applicable portion of relevant prepaid purchases (one-time or recurring) that covered this charge.

EffectiveCost is the most analytically useful cost metric for most FinOps work. It shows **what you actually paid** (or will pay) after all discounts and after amortizing prepaid commitments over their usage period. The amortized portion is proportional to the Pricing Quantity and the time granularity of the data.

Use cases: True cost analysis, unit economics, chargeback/showback (when you want to reflect actual spend rather than invoice amounts), commitment utilization analysis.

### BilledCost

**Definition**: The amount that was or will be invoiced. This is the **Mandatory** cost column — it must always be present and must never be null.

BilledCost is the **invoice-facing** number. It reflects what shows up on your bill, including the full upfront cost of commitment purchases in the period they were bought (rather than amortized). This means BilledCost can spike in months when commitments are purchased and be lower in subsequent months.

Use cases: Invoice reconciliation, cash flow analysis, accounts payable matching, financial reporting that must align to invoiced amounts.

## The Discount Cascade

```
ListCost (retail price)
  └─ minus negotiated discounts ─→ ContractedCost
       └─ minus commitment discounts (amortized) ─→ EffectiveCost

BilledCost (what's on the invoice — not amortized)
```

The relationship between EffectiveCost and BilledCost is nuanced: they diverge when commitment discounts are involved. A 1-year Reserved Instance purchased for $12,000 upfront will show $12,000 in BilledCost in the purchase month, but the EffectiveCost will amortize that $12,000 across 12 months ($1,000/month) and allocate it to the covered resources.

## Denomination and Currency

All four cost columns are denominated in the **BillingCurrency** (the currency the provider invoices in). The spec follows ISO 4217 currency codes. For SaaS providers that bill in virtual currencies (credits, tokens), v1.2 introduced additional pricing currency support.

## Key Points

- **BilledCost** is the only Mandatory cost metric — it must always exist and never be null
- ListCost ≥ ContractedCost ≥ EffectiveCost (in the general case, assuming discounts are savings)
- EffectiveCost handles amortization proportionally — making it the go-to for ongoing cost analysis
- BilledCost reflects cash flow; EffectiveCost reflects economic cost
- The spec provides both **unit prices** (ListUnitPrice, ContractedUnitPrice) and **total costs** for each tier
- All costs must conform to the Numeric Format attribute and be of type Decimal

## Connections

- Related to: [[columns-dimensions-metrics]] — the broader column classification system
- Related to: [[pricing-and-quantities]] — how unit prices and quantities feed into cost calculations
- Related to: [[commitment-discounts]] — the mechanism that creates the gap between ContractedCost and EffectiveCost
- See also: [[charge-types-and-categories]], [[focus-1-2-saas-and-invoicing]]

## Sources

- [Microsoft Learning FOCUS: Cost columns](https://techcommunity.microsoft.com/blog/finopsblog/learning-focus-cost-columns/4352713) — detailed walkthrough with examples
- [FOCUS Column Library](https://focus.finops.org/focus-columns/) — official column definitions
- [FOCUS Specification v1.1 (PDF)](https://focus.finops.org/wp-content/uploads/2024/11/FOCUS-spec-v1_1.pdf) — normative requirements for cost columns
