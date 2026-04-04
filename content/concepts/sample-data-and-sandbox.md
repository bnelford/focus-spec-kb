---
title: "Sample Data and Sandbox"
---

# Sample Data and Sandbox

> The FOCUS Sandbox provides anonymized real-world billing datasets from major cloud providers, giving practitioners and tool developers a safe environment to learn the spec and test implementations.

## The FOCUS Sandbox

The FinOps Foundation gathered real FinOps billing data from major cloud service providers, anonymized it, and packaged it as the **FOCUS Sandbox**. This is the go-to resource for anyone who wants to work with FOCUS data without needing their own cloud accounts or billing exports.

### Included Datasets

The sandbox contains anonymized billing data from:

- **AWS** — real CUR data converted to FOCUS format
- **GCP** — real BigQuery billing export data in FOCUS format
- **Oracle Cloud (OCI)** — real OCI cost report data in FOCUS format
- **Microsoft Azure** — sample data obtained from Microsoft's FinOps toolkit, merged with real data

These datasets cover realistic scenarios including multiple services, regions, commitment discounts, and varied charge types — making them suitable for testing analytical queries, building dashboards, and validating tooling.

## FOCUS-Sample-Data Repository

The [FOCUS-Sample-Data](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS-Sample-Data) repository (25 stars, 14 forks) is the GitHub home for sample FOCUS datasets. It's designed for storing and sharing examples that the community can use for testing and learning.

## How to Get Your Own FOCUS Data

Beyond the sandbox, each major cloud provider offers native FOCUS data exports:

### AWS
Navigate to the **Billing and Cost Management console** → **Data Exports** → create a FOCUS-formatted export. Available via the console, CLI, or SDKs. AWS supports FOCUS 1.0 in general availability as of 2024.

### Azure
Microsoft Azure offers a **FOCUS data export** from Azure Cost Management. Azure has been actively developing FOCUS support, with FOCUS 1.2 billing exports in Public Preview as of late 2025.

### Google Cloud
GCP provides a **FOCUS BigQuery view** and **Looker Template** to export and visualize FOCUS-formatted cost and usage data directly from your BigQuery billing dataset.

### Oracle Cloud
OCI provides FOCUS-formatted cost reports accessible through their cost management tools.

## Use Cases for Sample Data

1. **Learning the spec** — explore the column structure, understand how dimensions and metrics relate, see real examples of commitment discounts and charge categories
2. **Testing tools** — validate that your FinOps tooling correctly ingests and processes FOCUS data
3. **Testing the validator** — run the [[focus-validator]] against sample datasets to understand its output
4. **Building demos** — create dashboards and reports using realistic but non-sensitive data
5. **Contribution testing** — when proposing spec changes, use sample data to demonstrate how the change would work in practice

## Training and Certification

The FinOps Foundation offers structured learning paths for FOCUS:

- **Introduction to FOCUS** — a free course covering the specification overview, benefits, and implementation process
- **FOCUS Analyst Certification** — a deeper dive into data schemas, transformation workflows, and practical use cases

## Key Points

- The sandbox uses **real, anonymized** billing data — not synthetic data — for maximum realism
- Sample data covers all four major cloud providers
- Each provider now supports native FOCUS exports, reducing the need for the [[focus-converter]]
- The FOCUS-Sample-Data repo is community-accessible and welcomes contributions of additional datasets
- FinOps X 2026 (San Diego, June 8–11) will feature a dedicated FOCUS Lab for hands-on work

## Connections

- Related to: [[focus-converter]] — convert native data to FOCUS format
- Related to: [[focus-validator]] — validate datasets against the spec
- Related to: [[cloud-provider-support]] — how each provider generates FOCUS data
- Related to: [[github-organization]] — where the sample data repo lives
- See also: [[columns-dimensions-metrics]]

## Sources

- [FOCUS Sandbox and Sample Data](https://www.finops.org/insights/focus-sandbox/) — sandbox announcement and access
- [FOCUS-Sample-Data Repository](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS-Sample-Data) — GitHub repository
- [Getting Started with FOCUS Datasets](https://focus.finops.org/get-started/) — official getting started guide
