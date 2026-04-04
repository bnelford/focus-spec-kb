---
title: "Data Generators"
---

# Data Generators

> The complete landscape of cloud, SaaS, data platform, and infrastructure providers that natively produce FOCUS-formatted billing data — the supply side of the FOCUS ecosystem.

## What Is a Data Generator?

In FOCUS terminology, a **data generator** is any organization that produces billing or cost/usage data for consumption by practitioners and tools. This includes cloud service providers (CSPs), SaaS platforms, data/AI platforms, managed service providers (MSPs), and internal platform teams. FOCUS defines clear requirements for generators to produce consistent, standardized datasets.

The generator ecosystem has grown significantly since v1.0's launch in June 2024. What started as four hyperscale cloud providers now spans 10+ organizations across cloud, SaaS, data platforms, and regional cloud providers — with more in the pipeline.

---

## Cloud Infrastructure Providers

### Amazon Web Services (AWS)

| Detail | Value |
|---|---|
| **FOCUS Version** | v1.2 (GA, November 2025) |
| **Export Method** | Data Exports in Billing & Cost Management console |
| **Format** | Parquet (recommended) or CSV, exported to S3 |
| **Availability** | US East (N. Virginia) region; covers all AWS regions except GovCloud and China |

AWS was a launch partner for FOCUS 1.0 GA in June 2024 and has actively tracked spec releases. The v1.2 export (GA'd at re:Invent 2025) adds **14 additional columns** over v1.0, including InvoiceId for invoice reconciliation, CapacityReservationId/Status for tracking On-Demand Capacity Reservations and EC2 Capacity Blocks for ML, and virtual currency support for multi-cloud and SaaS cost management. AWS also includes provider-specific columns using the `x_` prefix (e.g., `x_AwsInstanceType`). Users select between FOCUS 1.0 and FOCUS 1.2 via a dropdown when creating exports.

### Microsoft Azure

| Detail | Value |
|---|---|
| **FOCUS Version** | v1.2 (Public Preview, late 2025) |
| **Export Method** | Azure Cost Management exports |
| **Notable** | Most active contributor to the spec; extensive "Learning FOCUS" blog series |

Azure has been the most visibly engaged cloud provider in FOCUS development. Microsoft's FinOps team publishes a detailed "Learning FOCUS" blog series covering cost columns, charge types, pricing models, commitment discounts, and prices/quantities. Their FinOps Toolkit includes FOCUS-formatted sample data. Some fields in the v1.2 preview are still being populated as Microsoft iterates toward GA.

### Google Cloud Platform (GCP)

| Detail | Value |
|---|---|
| **FOCUS Version** | v1.0 (GA) |
| **Export Method** | BigQuery view + Looker Template |
| **Notable** | BigQuery-native approach — no file export needed |

GCP's approach is architecturally distinctive: instead of file-based exports, they provide a **FOCUS BigQuery view** over your billing dataset. This means FOCUS data is immediately queryable via SQL without an export step. A Looker Template provides visualization on top. Google Cloud published a dedicated blog post at the v1.0 GA launch.

### Oracle Cloud Infrastructure (OCI)

| Detail | Value |
|---|---|
| **FOCUS Version** | v1.0 |
| **Export Method** | Cost management tools / cost reports |
| **Notable** | Fourth founding cloud supporter |

Oracle provides FOCUS-formatted cost reports through their cost management console. As one of the four founding supporters alongside AWS, Azure, and GCP, OCI's inclusion from day one demonstrated FOCUS's reach beyond the "big three" hyperscalers.

### Alibaba Cloud

| Detail | Value |
|---|---|
| **FOCUS Version** | v1.0 (Invitational Preview) |
| **Export Method** | Export to Cloud Object Storage (OSS) |
| **Notable** | First major Chinese cloud provider to adopt FOCUS |

Alibaba Cloud announced FOCUS support alongside the v1.2 release cycle (announced as one of three new providers). Their implementation exports FOCUS 1.0 data with Alibaba Cloud-specific columns to OSS buckets. The feature is currently in **invitational preview** with continuous iterations — users can request access through their Alibaba Cloud console. This is significant as the first entry of a Chinese hyperscaler into the FOCUS ecosystem.

### Huawei Cloud

| Detail | Value |
|---|---|
| **FOCUS Version** | Listed as supporting FOCUS (version unconfirmed publicly) |
| **Notable** | Active in FOCUS 1.3 specification development |

Huawei Cloud is listed among the worldwide FOCUS-supporting providers and has been a contributor to the v1.3 specification development. Huawei has also developed a FinOps reference architecture based on the FinOps Foundation's framework, integrating FOCUS concepts into their cloud adoption guidance. Specific public documentation on their FOCUS export feature is limited.

### OVHcloud

| Detail | Value |
|---|---|
| **FOCUS Version** | v1.0 |
| **Export Method** | Public Cloud billing data export |
| **Notable** | European sovereignty-focused cloud provider |

OVHcloud provides FOCUS 1.0-compliant data for its public cloud services. As a European cloud provider with a strong sovereignty narrative, OVHcloud's FOCUS adoption is notable for extending the standard beyond US-headquartered hyperscalers. Their implementation is accessible through OVHcloud Labs.

### Tencent Cloud

| Detail | Value |
|---|---|
| **FOCUS Version** | Listed as supporting FOCUS (version unconfirmed publicly) |
| **Export Method** | Export to Cloud Object Storage (COS) bucket |
| **Notable** | Second major Chinese cloud provider to adopt FOCUS |

Tencent Cloud stores FOCUS-formatted bill data in Cloud Object Storage (COS) buckets on a regular basis. Their adoption, alongside Alibaba Cloud and Huawei, signals that FOCUS is gaining traction in the Chinese cloud market — critical for multinational organizations operating across US, European, and Chinese cloud infrastructure.

---

## SaaS, Data, and Platform Providers

### Databricks

| Detail | Value |
|---|---|
| **FOCUS Version** | v1.2 (announced; documentation pending) |
| **Export Method** | System tables / usage tables (follow FinOps FOCUS standard) |
| **Notable** | First major data platform to adopt FOCUS; DBUs modeled as virtual currency |

Databricks announced FOCUS support at FinOps X 2025. Their usage tables follow the FOCUS standard, and Databricks Units (DBUs) are represented as a **virtual currency** in FOCUS 1.2 — making Databricks one of the first providers to leverage the v1.2 virtual currency columns in practice. Full public documentation with export instructions is still forthcoming; users are directed to their Databricks account team for access details.

Databricks' adoption is architecturally significant because it demonstrates FOCUS working for a **data platform** that bills in consumption units (DBUs) rather than traditional cloud resource-hours.

### Grafana Labs (Grafana Cloud)

| Detail | Value |
|---|---|
| **FOCUS Version** | v1.2 (Private Preview, June 2025) |
| **Export Method** | Billing data download from Grafana Cloud |
| **Notable** | First observability platform to adopt FOCUS |

Grafana Labs announced FOCUS integration in June 2025, making Grafana Cloud the **first observability platform** to produce FOCUS-formatted billing data. Users can download billing data in FOCUS 1.2 format through a private preview, with access available through a FOCUS interest form or account representative contact.

Grafana Cloud's Cost Management and Billing app provides centralized visibility into usage and spend. The FOCUS integration means organizations can fold their observability costs into the same schema as their cloud infrastructure costs — critical for FinOps teams who need to see the complete picture.

---

## Third-Party Conversion (Non-Native Generators)

### Vantage — focus.vantage.sh

Vantage offers a **free, web-based FOCUS converter** at [focus.vantage.sh](https://focus.vantage.sh/) that converts cost CSVs or PDF invoices from select providers into FOCUS 1.1 format. This bridges the gap for providers that don't yet have native FOCUS exports.

**Currently supported for conversion**:
- Cloudflare
- ClickHouse
- Temporal

**Planned support** (providers Vantage already integrates with):
- Confluent, Coralogix, Datadog, Fastly, GitHub, Linode, MongoDB, New Relic, PlanetScale, Snowflake, Twilio

Vantage also provides instructions for downloading native FOCUS data from providers that already support it (AWS, Azure, Databricks, GCP, Grafana, Oracle) and supports **FOCUS 1.3 imports and exports** in their platform.

### FOCUS Converter (Open Source)

The open-source [[focus-converter]] CLI tool converts billing data from AWS, Azure, GCP, and OCI into FOCUS format. Useful primarily for historical data conversion — see the dedicated article for details.

---

## Generator Adoption Summary

| Provider | Type | FOCUS Version | Status |
|---|---|---|---|
| **AWS** | Cloud (IaaS) | v1.2 | GA (Nov 2025) |
| **Microsoft Azure** | Cloud (IaaS) | v1.2 | Public Preview |
| **Google Cloud** | Cloud (IaaS) | v1.0 | GA |
| **Oracle Cloud** | Cloud (IaaS) | v1.0 | GA |
| **Alibaba Cloud** | Cloud (IaaS) | v1.0 | Invitational Preview |
| **Huawei Cloud** | Cloud (IaaS) | Supported | Details pending |
| **OVHcloud** | Cloud (IaaS) | v1.0 | GA |
| **Tencent Cloud** | Cloud (IaaS) | Supported | GA (COS export) |
| **Databricks** | Data Platform | v1.2 | Announced; docs pending |
| **Grafana Labs** | Observability | v1.2 | Private Preview (June 2025) |

## The SaaS Gap

While cloud infrastructure providers have broadly adopted FOCUS, **SaaS providers remain the largest gap**. Most SaaS vendors (Salesforce, ServiceNow, Workday, Datadog, Snowflake, MongoDB, etc.) still present billing data in proprietary, vendor-specific formats. The v1.2 spec laid the groundwork for SaaS billing support (virtual currencies, non-monetary pricing units), and v1.3's contract commitment dataset addresses SaaS subscription complexity, but native SaaS adoption at scale is still on the horizon.

The FinOps Foundation is actively working to close this gap — they're collecting redacted invoices and usage reports from SaaS providers to build FOCUS mapping guides. Vantage's focus.vantage.sh converter is filling the immediate gap for a growing list of SaaS providers.

Providers where FOCUS support is **anticipated or in discussion** include Snowflake (FinOps Foundation member), Datadog, MongoDB, Confluent, and others in the SaaS virtual currency landscape.

## Key Points

- 10+ data generators now support or are implementing FOCUS — up from 4 at v1.0 GA
- Cloud IaaS adoption is strong; SaaS/PaaS adoption is the frontier
- Version support ranges from v1.0 to v1.2 — no provider has announced v1.3 native support yet
- Chinese cloud providers (Alibaba, Huawei, Tencent) are adopting FOCUS, extending the standard's global reach
- Databricks and Grafana represent the first wave of non-cloud generators — data platforms and observability
- Vantage's free converter (focus.vantage.sh) and the open-source FOCUS Converter bridge gaps for providers without native support

## Connections

- Related to: [[cloud-provider-support]] — original article on the big four cloud providers
- Related to: [[finops-vendor-adoption]] — the tool vendors consuming FOCUS data from generators
- Related to: [[focus-converter]] — open-source converter for non-native conversion
- Related to: [[focus-1-2-saas-and-invoicing]] — the spec features enabling SaaS adoption
- Related to: [[pricing-and-quantities]] — virtual currency support for non-cloud billing
- Related to: [[roadmap-and-future]] — where generator adoption is heading
- See also: [[sample-data-and-sandbox]], [[finops-framework-relationship]]

## Sources

- [FOCUS Adoption — Who Uses FOCUS?](https://focus.finops.org/adoption/) — official adoption page
- [FOCUS Vendor Adoption (April 2025 PDF)](https://focus.finops.org/wp-content/uploads/2025/04/FOCUS-Vendor-Adoption-updated-April-2025.pdf) — vendor adoption tracker
- [Getting Started with FOCUS Datasets](https://focus.finops.org/get-started/) — per-provider setup guides
- [AWS Data Exports for FOCUS 1.2 GA](https://aws.amazon.com/blogs/aws-cloud-financial-management/data-exports-for-focus-1-2-is-now-generally-available/) — AWS v1.2 details
- [Alibaba Cloud FOCUS 1.0 Preview](https://www.alibabacloud.com/help/en/user-center/exporting-alibaba-cloud-focus1-0-preview) — Alibaba export guide
- [Grafana Labs FOCUS Integration](https://grafana.com/blog/2025/06/02/simple-cloud-cost-management-grafana-labs-integrates-open-standard-focus-specification-for-cloud-billing-data/) — Grafana announcement
- [OVHcloud FinOps FOCUS](https://labs.ovhcloud.com/en/finops-focus/) — OVHcloud implementation
- [Tencent Cloud FOCUS Getting Started](https://focus.finops.org/get-started/tencent-cloud/) — Tencent setup guide
- [Vantage focus.vantage.sh](https://focus.vantage.sh/) — free FOCUS converter tool
- [Vantage FOCUS 1.3 Support](https://www.vantage.sh/blog/focus-1-3-support) — Vantage v1.3 imports/exports
- [Databricks FOCUS Guide (FinOps X)](https://x.finops.org/agenda/transforming-databricks-cost-management-data-into-the-focus-format-a-practical-guide/) — Databricks session
- [Linux Foundation FOCUS 1.3 Press Release](https://www.linuxfoundation.org/press/finops-foundation-launches-focus-1.3-to-deepen-cloud-and-saas-billing-transparency-announces-expanded-vendor-support-for-focus-1.2) — expanded vendor support
- [FinOps for SaaS: Adopting FOCUS](https://www.finops.org/wg/finops-for-saas-best-practices-and-adopting-focus/) — SaaS adoption working group
