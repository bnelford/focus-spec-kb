---
title: "FOCUS Overview"
---

# FOCUS Overview

> FOCUS is an open specification that defines a common schema for technology billing data, enabling consistent cost analysis across cloud, SaaS, and infrastructure providers.

## The Problem FOCUS Solves

Every major cloud provider — AWS, Azure, GCP, Oracle — structures its billing data differently. Column names differ, cost concepts are defined inconsistently, and even basic things like how commitment discounts are represented vary wildly. When an organization uses multiple clouds (and over 90% of enterprises now do), comparing or aggregating costs requires building and maintaining custom normalization pipelines. This is expensive, error-prone, and fragile — every time a provider changes their billing export format, the pipeline breaks.

FOCUS eliminates this problem by defining a single, vendor-neutral schema that providers can export natively. Instead of every FinOps team and every FinOps tool building their own normalization layer, the providers themselves output data in a common format. The result: one schema, one vocabulary, one set of column definitions that works everywhere.

## What FOCUS Actually Is

FOCUS is a **specification**, not software. It defines:

- A set of **columns** (dimensions and metrics) that billing datasets must or should contain
- **Normative requirements** for each column — data types, allowed values, nullability rules, and relationships between columns
- A **glossary** of billing terms with precise definitions
- **Feature levels** (Mandatory, Conditional, Recommended, Optional) that classify how strictly each column must be implemented
- **Attributes** — specification-wide requirements that apply across all columns

The specification is written in markdown, lives in a [GitHub repository](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec), and follows Semantic Versioning 2.0.

## Who FOCUS Serves

The spec targets three audiences:

1. **Billing data generators** — CSPs, SaaS platforms, MSPs, and internal platform teams who produce billing data. They implement FOCUS by structuring their billing exports to match the schema.
2. **FinOps tool providers** — Companies building cost management platforms (CloudHealth, Cloudability, etc.) who consume billing data. FOCUS means they can build one ingestion pipeline instead of N provider-specific ones.
3. **FinOps practitioners** — The people actually analyzing costs, building chargeback models, and optimizing spend. FOCUS gives them a consistent mental model regardless of which cloud they're looking at.

## Key Points

- FOCUS is a **Joint Development Foundation (JDF) Specification Project** under the Linux Foundation, with the FinOps Foundation providing operational support
- It is **not owned or controlled** by the FinOps Foundation — the governance is deliberately independent to maintain neutrality
- As of v1.3, the spec defines columns covering cloud and SaaS billing, with data center and AI billing on the roadmap
- The four largest cloud providers (AWS, Azure, GCP, Oracle) all support native FOCUS exports
- FOCUS follows RFC 2119/BCP 14 language conventions (MUST, SHOULD, MAY) for normative requirements

## Connections

- Related to: [[governance-and-charter]] — the legal and organizational framework behind FOCUS
- Related to: [[design-principles]] — the philosophy guiding spec development
- Related to: [[columns-dimensions-metrics]] — the core data model
- See also: [[finops-framework-relationship]], [[version-history]]

## Sources

- [FOCUS GitHub — FOCUS_Spec Repository](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec) — primary source for the specification
- [What is FOCUS?](https://focus.finops.org/what-is-focus/) — official overview page
- [About FOCUS](https://focus.finops.org/about-focus/) — governance and organizational context
- [FOCUS Specification Overview (GitHub)](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/specification/overview.md) — design rationale and structural foundation
