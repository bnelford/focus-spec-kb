---
title: "FinOps Vendor Adoption"
---

# FinOps Vendor Adoption

> Beyond cloud providers, third-party FinOps platforms are adopting FOCUS to reduce multi-cloud ingestion complexity and deliver standardized cost analysis experiences.

## The Vendor Adoption Landscape

FOCUS adoption by FinOps tool vendors is the second critical wave of adoption (after cloud provider native exports). When tool vendors adopt FOCUS, it creates a **virtuous cycle**: providers produce FOCUS data → tools consume it natively → practitioners get consistent experiences → more providers adopt FOCUS.

## Major Platform Implementations

### Broadcom Tanzu CloudHealth (formerly VMware CloudHealth)

CloudHealth released a **FOCUS FlexReport template** in March 2024 that converts cloud billing data to the FOCUS format and renders graphical visualizations. As one of the largest FinOps platforms by customer count, CloudHealth's early adoption signaled market validation for FOCUS.

### IBM Cloudability (formerly Apptio Cloudability)

IBM's Cloudability platform is working on FOCUS support. As a market leader in FinOps tooling (by active customer count and scope of offerings), Cloudability's adoption is significant for enterprise practitioners who depend on it for multi-cloud cost management.

### ServiceNow Cloud Cost Management

ServiceNow's cost management capabilities are being aligned with FOCUS. Given ServiceNow's massive enterprise footprint (particularly in ITSM and ITAM), their FOCUS adoption is relevant for organizations that want to bridge cloud cost management with broader IT financial management and asset management workflows.

### Vantage

Vantage launched **FOCUS-compatible data exports**, allowing customers to export their cost data in the FOCUS format. This is useful for organizations that use Vantage for analysis but want to exchange data with other tools using the standard schema.

### Other Adopters

The FinOps Foundation maintains a list of [FinOps tool vendors adopting FOCUS](https://focus.finops.org/adoption/finops-vendors/). The ecosystem is growing steadily, with vendors at various stages from evaluation to full production support.

## Benefits for Vendors

FinOps platforms benefit from FOCUS adoption in several ways:

1. **Reduced ingestion complexity** — instead of maintaining N provider-specific parsers, vendors can build one FOCUS-based pipeline. As cloud providers add native FOCUS exports, the vendor's ingestion layer simplifies.
2. **Cross-cloud dashboards** — FOCUS-compliant dashboards work for any cloud that provides FOCUS data, reducing per-provider dashboard development.
3. **Faster onboarding** — pre-built FOCUS connectors mean faster time-to-value for new customers.
4. **Future-proofing** — as FOCUS expands to SaaS, data center, and AI billing, vendors who adopt FOCUS early will be positioned to handle these new data sources.

## Adoption Challenges

The FinOps community has identified several barriers to broader FOCUS adoption:

- **Time constraints** — teams are busy with operational work and can't prioritize FOCUS migration
- **Limited internal skills** — not enough people understand both the spec and their organization's billing data deeply enough to validate conversions
- **Native support gaps** — while cloud providers have gotten better, SaaS providers largely aren't generating FOCUS data natively, meaning tool vendors still need custom SaaS ingestion
- **Version churn** — with releases every 4–5 months, tools need to keep up with new columns and changed requirements

## Key Points

- The three largest FinOps platforms by customer count (CloudHealth, Cloudability, ServiceNow) are all engaging with FOCUS
- Vendor adoption creates network effects — more tools speaking FOCUS makes the standard more valuable
- SaaS provider adoption remains a major gap — most SaaS vendors present billing data in proprietary formats
- The FinOps Foundation tracks and promotes vendor adoption through a dedicated page

## Connections

- Related to: [[cloud-provider-support]] — the data source side of adoption
- Related to: [[finops-framework-relationship]] — the FinOps capabilities that FOCUS data enables in vendor tools
- Related to: [[focus-1-2-saas-and-invoicing]] — SaaS support that vendors need
- Related to: [[roadmap-and-future]] — how the spec evolves to serve vendor needs
- See also: [[focus-converter]], [[focus-overview]]

## Sources

- [FOCUS Adoption by FinOps Tooling Vendors](https://focus.finops.org/adoption/finops-vendors/) — official adoption tracker
- [FinOps tool vendors are adopting FOCUS](https://www.finops.org/insights/finops-vendors-adopt-focus/) — adoption overview article
- [Vantage FOCUS-Compatible Exports](https://www.vantage.sh/blog/focus-export) — Vantage implementation
- [Holori FOCUS Explained](https://holori.com/what-is-finops-focus-the-key-to-standardizing-cloud-billing-data/) — adoption landscape overview
