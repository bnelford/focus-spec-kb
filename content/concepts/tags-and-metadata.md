---
title: "Tags and Metadata"
---

# Tags and Metadata

> FOCUS standardizes how resource tags and custom provider-specific data are represented, using tag schemes, finalized tags, and the x_ prefix convention for extensibility.

## Tags in FOCUS

Tags are **metadata labels assigned to resources** for categorization and management. In cloud environments, tags are the primary mechanism for cost allocation — teams tag resources with department, project, environment, or application identifiers, and then use those tags to slice billing data.

FOCUS standardizes tag handling across providers, which is significant because AWS, Azure, and GCP all handle tags differently in their native billing exports.

### Tag Scheme

A **tag scheme** is a distinct framework for assigning metadata to various assets. Different tag schemes may exist for different purposes — a provider might have resource-level tags, project-level labels, and organization-level tags, each operating as a separate scheme.

### Tag Source

**Tag sources** are the constructs used for grouping resources and assigning tags. These represent the origin of a tag — whether it comes from the resource itself, an inherited organizational structure, a policy engine, or a manual assignment.

### Finalized Tag

A **finalized tag** is a tag value selected from among possibilities through defined rules. When a resource could inherit tags from multiple sources (e.g., a resource tag and an inherited project tag), the finalized tag represents the winner after conflict resolution rules are applied.

This concept is important because tag inheritance and precedence rules vary by provider. FOCUS's finalized tag concept provides a single, authoritative tag value that practitioners can rely on without understanding each provider's tag resolution logic.

## Custom Columns (x_ Prefix)

FOCUS balances standardization with extensibility through the **x_ prefix convention**. Any column whose name starts with `x_` is a **custom column** — provider-specific data that falls outside the FOCUS schema but is included for completeness.

Examples:
- `x_AwsInstanceType` — AWS-specific instance type
- `x_AzureResourceGroup` — Azure resource group
- `x_GcpProjectNumber` — GCP project number
- `x_OciCompartmentId` — Oracle Cloud compartment ID

Custom columns provide two critical benefits:

1. **No information loss**: Providers can include all their native billing data alongside FOCUS-standardized columns. Practitioners who need provider-specific details can still access them.
2. **Namespace isolation**: Custom columns can never conflict with FOCUS column names, since FOCUS columns never use the x_ prefix. This means the spec can add new columns in future versions without breaking provider-specific extensions.

## Metadata Improvements in v1.3

Version 1.3 introduced important metadata columns around **data recency and completeness**:

- **Data recency**: Providers must now timestamp datasets with last-updated metadata, telling practitioners exactly when the data was last refreshed
- **Completeness status**: Datasets must indicate whether they're complete or still being updated (open vs. closed billing periods)

These metadata improvements address a persistent trust problem in billing data — practitioners often don't know whether they're looking at final numbers or preliminary estimates.

## Key Points

- Tags are the primary mechanism for cost allocation in cloud billing — FOCUS standardizes their representation
- The finalized tag concept resolves cross-provider differences in tag inheritance and precedence
- Custom columns (x_ prefix) let providers include native data without polluting the standard namespace
- v1.3 added data freshness and completeness metadata, solving a major trust gap
- Tag columns are typically Conditional — they must be present when the provider supports tagging

## Connections

- Related to: [[columns-dimensions-metrics]] — where tags and custom columns fit in the schema
- Related to: [[design-principles]] — the extensibility principle that motivates x_ columns
- Related to: [[focus-1-3-contracts-and-allocation]] — data recency/completeness metadata
- See also: [[finops-framework-relationship]], [[cloud-provider-support]]

## Sources

- [FOCUS Glossary (GitHub)](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/specification/glossary.md) — definitions for Tag, Tag Scheme, Tag Source, Finalized Tag, Custom Column
- [FOCUS Column Library](https://focus.finops.org/focus-columns/) — tag-related column specifications
