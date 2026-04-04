---
title: "Key Organizations and Projects"
---

# Key Organizations and Projects

> The organizations, platforms, and projects that shape the FOCUS ecosystem — from governance bodies to cloud providers to tooling vendors.

## Governance and Standards Bodies

| Organization | Role in FOCUS |
|---|---|
| **Linux Foundation** | Parent organization providing the JDF legal/IP framework |
| **Joint Development Foundation (JDF)** | The governance model FOCUS operates under — enables path to international standardization |
| **FinOps Foundation** | Provides financial support, program management, and staff support; does NOT own or control FOCUS |
| **FOCUS Steering Committee** | Primary decision-making body that ratifies spec releases |

## Cloud Service Providers (Generators)

| Provider | FOCUS Support | Notes |
|---|---|---|
| **Amazon Web Services (AWS)** | FOCUS 1.0 GA | Data Exports in Billing & Cost Management console; CUR-based |
| **Microsoft Azure** | FOCUS 1.2 Preview | Azure Cost Management exports; most active in spec development; extensive "Learning FOCUS" blog series |
| **Google Cloud Platform (GCP)** | FOCUS 1.0 | BigQuery view + Looker Template approach |
| **Oracle Cloud Infrastructure (OCI)** | FOCUS support | Cost report-based exports |

## FinOps Platform Vendors (Consumers)

| Vendor | FOCUS Status | Notes |
|---|---|---|
| **Broadcom Tanzu CloudHealth** | FOCUS FlexReport template (March 2024) | One of the largest FinOps platforms by customer count |
| **IBM Cloudability** (formerly Apptio) | In progress | Market leader by scope; ITFM heritage |
| **ServiceNow Cloud Cost Management** | Aligning with FOCUS | Massive enterprise footprint; bridges FinOps ↔ ITSM/ITAM |
| **Vantage** | FOCUS-compatible data exports | Cloud cost optimization platform |
| **Archera** | FOCUS 1.2 for Azure | Commitment management platform |

## Open-Source Tooling

| Project | Repository | Purpose |
|---|---|---|
| **FOCUS Converter** | [finopsfoundation/focus_converters](https://github.com/finopsfoundation/focus_converters) | CLI tool converting provider billing data to FOCUS format |
| **FOCUS Validator** | [finopsfoundation/focus_validator](https://github.com/finopsfoundation/focus_validator) | Dataset validation against FOCUS spec |
| **FOCUS Sample Data** | [FOCUS-Sample-Data](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS-Sample-Data) | Anonymized real-world billing datasets |
| **Requirements Model Analyzer** | [focus_requirements_model_analyzer](https://github.com/FinOps-Open-Cost-and-Usage-Spec/focus_requirements_model_analyzer) | Normative requirements visualization |

## Related Standards and Frameworks

| Standard/Framework | Relationship to FOCUS |
|---|---|
| **FinOps Framework** | Defines the capabilities FOCUS data enables |
| **ISO 8601** | Date/time format used in FOCUS columns |
| **ISO 4217** | Currency code standard used for BillingCurrency |
| **RFC 2119 / BCP 14** | Normative language conventions (MUST, SHOULD, MAY) |
| **Semantic Versioning 2.0** | Versioning scheme for FOCUS releases |

## Connections

- Related to: [[governance-and-charter]] — how governance bodies interact
- Related to: [[cloud-provider-support]] — provider implementation details
- Related to: [[finops-vendor-adoption]] — vendor adoption details
- See also: [[github-organization]], [[focus-overview]]

## Sources

- [FOCUS GitHub Organization](https://github.com/FinOps-Open-Cost-and-Usage-Spec) — all repos
- [FinOps Foundation](https://www.finops.org/) — parent organization
- [FOCUS Vendor Adoption](https://focus.finops.org/adoption/finops-vendors/) — vendor tracker
