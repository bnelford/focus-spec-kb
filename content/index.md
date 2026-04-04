---
title: "FOCUS — FinOps Open Cost and Usage Specification"
---

# FOCUS — FinOps Open Cost and Usage Specification

> The open standard for normalizing technology billing data across cloud, SaaS, and infrastructure providers.

FOCUS is a vendor-neutral, community-driven specification that defines a common schema and vocabulary for cost and usage billing data. Developed under the Linux Foundation as a Joint Development Foundation (JDF) Specification Project — with operational support from the FinOps Foundation — FOCUS aims to eliminate the fragmentation that has long plagued multi-cloud and multi-vendor cost analysis. The specification standardizes how billing data generators (CSPs, SaaS platforms, MSPs, internal platforms) structure their output so that FinOps practitioners and tooling vendors can consume it uniformly.

As of early 2026, FOCUS has shipped six releases (v0.5 through v1.3), is natively supported by AWS, Microsoft Azure, Google Cloud, and Oracle Cloud, and is being adopted by major FinOps platform vendors including Broadcom Tanzu CloudHealth, IBM Cloudability, and ServiceNow Cloud Cost Management. Version 1.4 is already under development.

---

## Key Concepts

### Specification Fundamentals

- [[focus-overview]] — What FOCUS is, why it exists, and the problem it solves
- [[version-history]] — Release timeline from v0.5 through v1.3 and beyond
- [[governance-and-charter]] — JDF structure, Steering Committee, and how the spec is ratified
- [[design-principles]] — Iterative development, scenario-driven design, provider neutrality, extensibility

### Data Model

- [[columns-dimensions-metrics]] — The core schema: dimensions (categorical), metrics (numeric), and attributes
- [[cost-columns]] — ListCost, ContractedCost, EffectiveCost, BilledCost and how they relate
- [[pricing-and-quantities]] — PricingQuantity, PricingUnit, UsageQuantity, UsageUnit, and block pricing
- [[commitment-discounts]] — Commitment types, amortization, covering/covered charges, flexibility
- [[charge-types-and-categories]] — ChargeCategory, ChargeClass, PricingCategory, and ServiceCategory
- [[tags-and-metadata]] — Tag schemes, finalized tags, custom columns (x_ prefix)

### Ecosystem and Tooling

- [[github-organization]] — All 10 repos in the FinOps-Open-Cost-and-Usage-Spec org
- [[focus-converter]] — CLI tool for converting AWS, Azure, GCP, and OCI billing data to FOCUS format
- [[focus-validator]] — Python-based dataset validation against the specification
- [[sample-data-and-sandbox]] — The FOCUS Sandbox with anonymized real-world datasets
- [[requirements-model]] — The machine-readable JSON encoding of all normative requirements
- [[requirements-model-analyzer]] — Tools for extracting and visualizing normative requirements

### Adoption and Integration

- [[data-generators]] — **Complete guide** to all providers producing FOCUS data: cloud, SaaS, data platforms, version support, and the SaaS gap
- [[cloud-provider-support]] — How AWS, Azure, GCP, and Oracle export FOCUS-formatted data
- [[finops-vendor-adoption]] — CloudHealth, Cloudability, ServiceNow, Vantage, and others
- [[finops-framework-relationship]] — How FOCUS enables FinOps capabilities like chargeback, showback, and allocation
- [[contribution-process]] — EasyCLA, membership, GitHub workflow, and the hybrid contribution model

### Guides

- [[contributing-to-focus]] — **Comprehensive guide** to contributing: membership, CLA, editorial standards, AI tooling, review process, and building locally

### What's New and What's Next

- [[focus-1-2-saas-and-invoicing]] — SaaS/PaaS support, invoice reconciliation, virtual currencies
- [[focus-1-3-contracts-and-allocation]] — Contract Commitment dataset, split cost allocation, data recency
- [[roadmap-and-future]] — v1.4 development, data center and AI expansion, international standardization

---

## Quick-Start Path

If you're new to FOCUS, start here:

1. [[focus-overview]] — Understand the why and what
2. [[columns-dimensions-metrics]] — Learn the data model
3. [[cost-columns]] — Master the four cost metrics
4. [[cloud-provider-support]] — See how to get FOCUS data from your cloud
5. [[contribution-process]] — Get involved

---

## Recent Developments

- **December 2025**: FOCUS v1.3 ratified — introduces Contract Commitment dataset, allocation columns, and data recency/completeness metadata
- **May 2025**: FOCUS v1.2 ratified — adds SaaS/PaaS support, InvoiceId, virtual currency lifecycle, BillingAccountType/SubAccountType
- **v1.4 under development**: Deepening cloud and SaaS support, expanding to data center and AI billing
- **FinOps X 2026** (San Diego, June 8–11): Dedicated FOCUS Lab for hands-on specification work

---

## Open Questions

- How will FOCUS handle the growing diversity of AI/ML billing models (tokens, GPU-hours, inference units)?
- Will FOCUS pursue formal ISO/IEC standardization, and on what timeline?
- How can the spec better accommodate software licensing and ITAM-adjacent billing (perpetual licenses, true-ups, maintenance)?
- What's the path to SaaS vendor adoption at scale — most SaaS providers still don't generate FOCUS-formatted data natively?
- How should the spec evolve to support sustainability and carbon cost attribution?
