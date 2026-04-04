---
title: "Commitment Discounts"
---

# Commitment Discounts

> Commitment discounts are publicly available reduced pricing that requires a commitment to a specific spend or usage level over a defined term — the most complex pricing concept in FOCUS.

## What Are Commitment Discounts?

A commitment discount is a billing discount model that offers **reduced rates on preselected SKUs** in exchange for an obligated usage or spend amount over a predefined term. In practice, these are:

- **AWS**: Reserved Instances (RIs) and Savings Plans
- **Azure**: Reservations and Savings Plans
- **GCP**: Committed Use Discounts (CUDs)
- **Oracle**: Reserved capacity

Commitment discounts are distinct from **negotiated discounts** — privately agreed pricing that comes through enterprise agreements or custom contracts. FOCUS treats these as fundamentally different mechanisms: commitment discounts are publicly available to anyone willing to make the commitment, while negotiated discounts are privately agreed terms.

## FOCUS Columns for Commitment Discounts

### Identification

- **CommitmentDiscountId** — unique identifier for the specific commitment instance (e.g., the specific RI or Savings Plan). Conditional: must be present when the provider supports commitment discounts.
- **CommitmentDiscountName** — human-readable name for the commitment
- **CommitmentDiscountType** — provider-assigned name identifying the type of commitment (e.g., "Standard RI", "Compute Savings Plan"). Must be null when CommitmentDiscountId is null; must NOT be null when CommitmentDiscountId is not null.
- **CommitmentDiscountStatus** — whether the commitment is active, expired, etc.

### Quantities

- **CommitmentDiscountQuantity** — the amount of the commitment purchased or accounted for, denominated in CommitmentDiscountUnits
- **CommitmentDiscountUnit** — the provider-specific measurement unit for the commitment (e.g., "normalized hours", "dollars/hour")

## Covering and Covered Charges

FOCUS introduces a precise vocabulary for how commitment discounts interact with charges:

- **Covering Charge** — the purchase charge for the commitment itself (the RI purchase, the Savings Plan enrollment). This charge "covers" other charges by offsetting their cost.
- **Covered Charge** — a usage charge whose cost is absorbed (fully or partially) by a corresponding covering charge. When your EC2 instance is covered by an RI, that instance's charge row is a "covered charge."

This relationship is what creates the gap between [[cost-columns|ContractedCost and EffectiveCost]]. The ContractedCost reflects what you'd pay at your negotiated rate without the commitment. The EffectiveCost shows the actual amortized cost after the commitment is applied.

## Amortization

**Amortization** is the distribution of upfront commitment costs over time to accurately reflect the consumption or benefit derived from the associated resources. FOCUS requires that EffectiveCost includes the amortized portion of prepaid commitments, proportional to the Pricing Quantity and the time granularity of the data.

For example, a 1-year all-upfront RI costing $8,760:
- **BilledCost**: $8,760 in the purchase month, $0 in subsequent months
- **EffectiveCost**: ~$1/hour amortized across every hour the RI provides coverage, allocated to the covered resources

This makes EffectiveCost the right metric for ongoing cost analysis and chargeback, while BilledCost is correct for cash flow and invoice reconciliation.

## Commitment Discount Flexibility

Some commitment discounts offer **flexibility** — the ability to transform usage based on provider-specific requirements. For example, AWS Regional RIs provide instance size flexibility, meaning a reservation for an m5.xlarge can cover two m5.large instances. GCP CUDs offer similar flexibility within machine families.

FOCUS captures this concept to ensure practitioners can understand when and how their commitments are being applied to resources that don't exactly match the original purchase.

## PricingCategory Integration

The [[charge-types-and-categories|PricingCategory]] column classifies charges based on their pricing model:

- **Committed** — the charge is subject to an existing commitment discount (it's a covered charge)
- **Standard** — pricing at the agreed-upon rate without commitment discounts
- **Dynamic** — spot/preemptible pricing determined by the provider
- **Other** — none of the above

## Key Points

- Commitment discounts are **not** negotiated discounts — they're publicly available programs requiring usage/spend commitments
- The covering/covered charge relationship is the foundation for understanding commitment impact
- Amortization is essential for accurate cost analysis but differs from cash-flow (BilledCost) views
- CommitmentDiscountType is provider-specific — there's no cross-provider normalization of RI types
- v1.3's Contract Commitment dataset provides even deeper visibility into commitment terms

## Connections

- Related to: [[cost-columns]] — how commitment discounts create the gap between ContractedCost and EffectiveCost
- Related to: [[pricing-and-quantities]] — how commitment pricing relates to usage quantities
- Related to: [[charge-types-and-categories]] — the PricingCategory classification
- Related to: [[focus-1-3-contracts-and-allocation]] — the Contract Commitment supplemental dataset
- See also: [[finops-framework-relationship]]

## Sources

- [Microsoft Learning FOCUS: Commitment discounts](https://techcommunity.microsoft.com/blog/finopsblog/learning-focus-commitment-discounts/4411405) — detailed walkthrough
- [FOCUS Glossary (GitHub)](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/specification/glossary.md) — formal definitions
- [FOCUS Column Library](https://focus.finops.org/focus-columns/) — column specifications
