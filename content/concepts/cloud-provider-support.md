---
title: "Cloud Provider Support"
---

# Cloud Provider Support

> AWS, Azure, Google Cloud, and Oracle Cloud all support native FOCUS-formatted billing exports, though implementation maturity and version support vary across providers.

## The Big Four

All four major cloud infrastructure providers committed to native FOCUS support alongside the v1.0 GA release in June 2024. This was a pivotal moment — it meant practitioners could get standardized billing data directly from their providers without needing the [[focus-converter]].

### Amazon Web Services (AWS)

**Status**: FOCUS 1.0 in General Availability

AWS provides FOCUS-formatted data through the **Data Exports** feature in the Billing and Cost Management console. Key details:

- Access via console, CLI, or SDKs
- Export format: Parquet (recommended) or CSV
- Based on the CUR (Cost and Usage Report) infrastructure
- AWS includes provider-specific columns with the `x_` prefix alongside FOCUS columns
- Available under **Data Exports** → create a FOCUS 1.0 export

AWS was an early mover on FOCUS support, previewing FOCUS exports before the GA release and making them generally available alongside the v1.0 announcement.

### Microsoft Azure

**Status**: FOCUS 1.2 billing exports in Public Preview (as of late 2025)

Azure has been one of the most active FOCUS supporters, both in specification development and implementation:

- FOCUS data is available through **Azure Cost Management** exports
- Microsoft publishes an extensive "Learning FOCUS" blog series covering cost columns, charge types, pricing models, commitment discounts, and prices/quantities
- Azure's FinOps toolkit includes FOCUS-formatted sample data
- Microsoft's FinOps team is a significant contributor to the specification itself
- Some fields in the v1.2 preview exports are still being populated

### Google Cloud Platform (GCP)

**Status**: FOCUS 1.0 support

GCP takes a BigQuery-native approach to FOCUS:

- Provides a **FOCUS BigQuery view** over your billing dataset
- Includes a **Looker Template** for visualizing FOCUS-formatted data
- The BigQuery approach means FOCUS data is immediately queryable via SQL without exporting files
- Google Cloud's blog highlighted FOCUS v1.0 GA as a milestone for cloud cost transparency

### Oracle Cloud Infrastructure (OCI)

**Status**: FOCUS support in cost reports

Oracle provides FOCUS-formatted data through their cost management tools. As one of the four founding cloud supporters, OCI's inclusion demonstrates FOCUS's reach beyond the "big three" hyperscalers.

## Vendor Support for FOCUS 1.2

The Linux Foundation's December 2025 press release (alongside the v1.3 launch) announced **expanded vendor support for FOCUS 1.2**, indicating that cloud providers are actively implementing the newer spec versions. The pace of adoption has been encouraging — providers are generally tracking within 6–12 months of spec releases.

## Native vs. Converter Approach

| Approach | Pros | Cons |
|---|---|---|
| Native FOCUS export | Provider-maintained, always current, no tooling overhead | Version support may lag latest spec, provider-specific quirks |
| [[focus-converter]] | Works with historical data, transparent mapping logic | Requires Python tooling, best-effort mapping, maintenance burden |

For new implementations, native exports are the recommended approach. The converter is primarily useful for historical data conversion and for providers not yet supporting native FOCUS.

## Key Points

- All four major cloud providers (AWS, Azure, GCP, Oracle) support native FOCUS exports
- Implementation maturity varies — Azure is furthest along with v1.2 preview support
- Provider-specific data is preserved through x_ custom columns
- The GCP approach (BigQuery view) is architecturally different from AWS/Azure's export-based approach
- Over 90% of enterprises use multi-cloud — making cross-provider FOCUS data critically useful

## Connections

- Related to: [[focus-converter]] — the alternative to native exports
- Related to: [[sample-data-and-sandbox]] — provider sample data in the FOCUS Sandbox
- Related to: [[finops-vendor-adoption]] — tool vendors consuming FOCUS data from providers
- Related to: [[columns-dimensions-metrics]] — the schema providers implement
- See also: [[focus-1-2-saas-and-invoicing]], [[finops-framework-relationship]]

## Sources

- [FOCUS 1.0 GA Announcement](https://www.finops.org/insights/focus-1-0-available/) — provider support announcements
- [AWS Data Exports for FOCUS 1.0](https://aws.amazon.com/blogs/aws-cloud-financial-management/data-exports-for-focus-1-0-is-now-generally-available/) — AWS implementation details
- [Google Cloud FOCUS v1.0 GA Blog](https://cloud.google.com/blog/topics/cost-management/cloud-costs-come-into-view-with-focus-v1-0-ga) — GCP implementation
- [Linux Foundation FOCUS 1.3 Press Release](https://www.linuxfoundation.org/press/finops-foundation-launches-focus-1.3-to-deepen-cloud-and-saas-billing-transparency-announces-expanded-vendor-support-for-focus-1.2) — v1.2 vendor support expansion
- [Archera FOCUS 1.2 for Azure](https://www.archera.ai/blog/focus1-2) — third-party Azure FOCUS support
