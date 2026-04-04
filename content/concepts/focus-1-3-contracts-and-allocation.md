---
title: "FOCUS 1.3: Contract Commitments, Split Cost Allocation, and Data Quality"
---

# FOCUS 1.3: Contract Commitments, Split Cost Allocation, and Data Quality

> Version 1.3 introduced the first supplemental dataset (Contract Commitments), standardized how providers expose cost-splitting methodology, and added data freshness/completeness metadata.

## Release Context

FOCUS v1.3 was ratified by the Steering Committee on **December 4, 2025**. It's the most architecturally significant release since v1.0, introducing the concept of **supplemental datasets** and making the spec's first foray into exposing cost allocation methodology rather than just allocation results.

## Key Features

### Contract Commitment Dataset

This is a landmark addition — the **first time FOCUS extended beyond the core cost/usage dataset** to create a supplemental, linked dataset.

The Contract Commitment dataset isolates contract terms into their own structured records:
- **Start and end dates** of the contract
- **Remaining units** (how much of the commitment is left)
- **Contract descriptions** and terms
- **Commitment type** and status

Previously, commitment information was scattered across charge rows — you'd have to reconstruct your commitment portfolio from covering/covered charge relationships. The Contract Commitment dataset provides a **single source of truth** for all active commitments, their terms, and their remaining obligations.

This pattern (supplemental datasets) is expected to be reused in future versions for other adjacent data domains.

### Allocation Columns

FOCUS v1.3 added new columns that let data generators expose **how they split costs** across workloads. This is a shift from "here's the allocated cost" to "here's the allocated cost AND here's how we calculated it."

The specification standardizes three allocation methodologies:
- **Resource-based allocation** — costs split based on resource ownership/tagging
- **Usage-based allocation** — costs split proportional to consumption
- **Hybrid approaches** — combinations of the above

Related FOCUS glossary concepts:
- **Allocated Charge** — a charge created through allocation operations from an origin charge
- **Allocated Method** — the process or formula by which cost is allocated

This transparency is crucial for FinOps teams that need to **validate and explain** their chargeback numbers. When a business unit questions their allocated costs, practitioners can now point to the methodology, not just the output.

### Data Recency and Completeness

v1.3 added metadata columns addressing a persistent trust problem in billing data:

- **Last-updated timestamps** — providers must now indicate when a dataset was last refreshed. This tells practitioners whether they're looking at data from 5 minutes ago or 5 hours ago.
- **Completeness flags** — datasets must indicate whether they're complete (closed billing period) or still being updated (open billing period).

These metadata additions enable:
- Automated data pipeline quality checks
- Dashboards that show data freshness
- Distinction between "this is a preliminary number" and "this is the final number"
- SLA monitoring for billing data delivery

## Architectural Significance

v1.3 establishes two important precedents:

1. **Supplemental datasets are part of FOCUS** — the spec is no longer limited to a single cost/usage table. The Contract Commitment dataset proves that related data domains can be standardized alongside the core billing data.

2. **Methodology transparency** — FOCUS isn't just standardizing data values, it's standardizing the explanation of how data was derived. This raises the bar for what "FOCUS-compliant" means.

## Key Points

- The Contract Commitment dataset is the first supplemental dataset — more are expected in future versions
- Allocation columns expose the "how" of cost splitting, not just the "what"
- Data recency/completeness metadata addresses a real trust gap in billing data consumption
- v1.3 positions FOCUS as increasingly opinionated about data quality, not just data structure
- The release was accompanied by expanded vendor support for v1.2

## Connections

- Related to: [[version-history]] — where v1.3 fits in the release timeline
- Related to: [[commitment-discounts]] — the commitment model that the Contract Commitment dataset enriches
- Related to: [[finops-framework-relationship]] — cost allocation and commitment optimization capabilities
- Related to: [[tags-and-metadata]] — data quality metadata
- Related to: [[roadmap-and-future]] — where v1.4 goes from here
- See also: [[focus-1-2-saas-and-invoicing]], [[cloud-provider-support]]

## Sources

- [Introducing FOCUS 1.3](https://www.finops.org/insights/introducing-focus-1-3/) — official release announcement
- [Linux Foundation FOCUS 1.3 Press Release](https://www.linuxfoundation.org/press/finops-foundation-launches-focus-1.3-to-deepen-cloud-and-saas-billing-transparency-announces-expanded-vendor-support-for-focus-1.2) — launch details
- [SD Times — FOCUS 1.3](https://sdtimes.com/finops/finops-foundation-releases-focus-1-3-to-address-issues-related-to-splitting-shared-resource-costs/) — coverage of allocation features
- [Network World — FinOps Foundation sharpens FOCUS](https://www.networkworld.com/article/4105706/finops-foundation-sharpens-focus-to-reduce-cloud-cost-chaos.html) — industry analysis
