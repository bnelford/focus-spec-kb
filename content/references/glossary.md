---
title: "FOCUS Glossary"
---

# FOCUS Glossary

> Key terms and definitions from the FOCUS specification, drawn from the official glossary in the FOCUS_Spec repository.

## Billing and Accounts

| Term | Definition |
|---|---|
| **Billing Account** | A container consolidating resources and services billed together, potentially including sub-accounts |
| **Billing Currency** | An identifier representing the currency for resource and service charges (ISO 4217) |
| **Billing Period** | Time window for which an organization receives an invoice, inclusive of start date and exclusive of end date |
| **Closed Billing Period** | A period financially closed after all anticipated invoices have been issued |
| **Open Billing Period** | An ongoing period remaining subject to updates until formal closure |
| **Invoice** | A document summarizing charges for resources or services consumed |
| **Invoice Reconciliation** | Verifying costs, quantities, and adjustments match usage records and rates |
| **Sub Account** | Organizational unit within a billing account; doesn't receive invoices independently |

## Charges and Costs

| Term | Definition |
|---|---|
| **Charge** | A single row in a FOCUS-compatible cost and usage dataset |
| **Charge Period** | Time window for which a charge is effective, inclusive of start date and exclusive of end date |
| **Adjustment** | A modification to billing data addressing errors, disruptions, or pricing changes |
| **Allocated Charge** | A charge created through allocation operations from an origin charge |
| **Allocated Method** | The process or formula by which cost is allocated to produce allocated charges |
| **Correction** | Modifications to previously delivered records within defined delivery scopes |
| **Credit** | A financial incentive unrelated to other charges |
| **Refund** | A return of previously charged funds |
| **Covered Charge** | A charge whose cost is absorbed by a corresponding covering charge |
| **Covering Charge** | A purchase charge offsetting covered charges' costs |

## Pricing and Commitments

| Term | Definition |
|---|---|
| **Amortization** | Distribution of upfront costs over time to reflect consumption or benefit derived |
| **Block Pricing** | Cost determined based on predefined quantities or tiers of usage |
| **Commitment** | Agreement to spend a defined monetary amount or consume a specific quantity of resources |
| **Commitment Discount** | Publicly available discounted pricing requiring specific spend/usage commitments |
| **Commitment Discount Flexibility** | Features allowing transformation of usage based on provider-specific requirements |
| **Contracted Unit Price** | Agreed-upon unit price inclusive of negotiated discounts, excluding commitment discounts |
| **List Unit Price** | Service-provider-published unit price exclusive of any discounts |
| **Negotiated Discount** | Privately agreed discounts with customized terms and pricing modifications |
| **SKU** | A construct composed of the common properties of a product offering |
| **SKU Price** | Pricing construct encompassing functionality, specifications, and stable pricing details |
| **Virtual Currency** | Proprietary provider-issued credits or tokens |
| **National Currency** | Government-issued currency |
| **Price List** | Comprehensive pricing offered by service providers |

## Infrastructure and Services

| Term | Definition |
|---|---|
| **Availability Zone** | Geographically separated locations containing a data center or cluster of data centers |
| **Capacity Reservation** | Agreement securing a dedicated amount of resources for a specified period |
| **Cloud Service Provider (CSP)** | Organization providing remote computing resources for a fee |
| **Interruptible** | Compute resources pausable or terminable by the CSP at reduced pricing |
| **On-Demand** | Services available immediately without pre-scheduling |
| **Resource** | Unique component that incurs a charge |
| **Service** | Offering that can be purchased from a service provider |

## Data Model

| Term | Definition |
|---|---|
| **Dimension** | A categorical attribute providing context to billing data |
| **Metric** | A numeric FOCUS column supporting aggregation and statistical operations |
| **Custom Column** | Non-FOCUS columns prefixed with "x_" providing additional native dataset context |
| **FOCUS Column** | Specification-defined columns in FOCUS datasets |
| **FOCUS Dataset** | Structured collection of columns conforming to BCP14 criteria established by FOCUS |
| **Native Dataset** | Data provided by generators in non-FOCUS formats |
| **Dataset Artifact** | Physical representation of a dataset instance |
| **Dataset Instance** | Specific FOCUS dataset implementation with varying properties |
| **Delivery Scope** | Boundary determining which records are included in a dataset |

## Tags and Metadata

| Term | Definition |
|---|---|
| **Tag** | Metadata label assigned to a resource for categorization and management |
| **Tag Scheme** | A distinct framework for assigning metadata to various assets |
| **Tag Source** | Constructs for grouping resources and assigning tags |
| **Finalized Tag** | A tag value selected from possibilities through defined rules |

## Organizations and Roles

| Term | Definition |
|---|---|
| **Managed Service Provider (MSP)** | Organization providing outsourced IT service management |
| **Practitioner** | Individual who performs FinOps within an organization |
| **Contract** | Collection of agreed terms between a service provider and a customer |
| **Contract Commitment** | A measurable obligation defining minimum spend or usage requirements |

## Formatting and Conventions

| Term | Definition |
|---|---|
| **Pascal Case** | Identifier format with concatenated capitalized words (e.g., BilledCost) |
| **Exclusive End Bound** | A date/time value outside ending period boundaries |
| **Inclusive Start Bound** | A date/time value within beginning period boundaries |
| **Period** | Time window with a specifically defined start and end date/time |
| **Accrual-Based Accounting** | Record costs in the period when resources are utilized |
| **Cash-Based Accounting** | Record expenses when invoiced, regardless of consumption timing |

## Sources

- [FOCUS Glossary (GitHub)](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/specification/glossary.md) — authoritative source
