---
title: "GitHub Organization"
---

# GitHub Organization

> The FinOps-Open-Cost-and-Usage-Spec GitHub organization hosts 10 repositories covering the specification, governance documents, tooling, sample data, and supporting infrastructure.

## Organization Overview

**GitHub org**: [FinOps-Open-Cost-and-Usage-Spec](https://github.com/FinOps-Open-Cost-and-Usage-Spec)

All FOCUS development happens in the open on GitHub. Issues, pull requests, and discussions are publicly visible, and the working draft branch serves as the canonical source of truth for the specification's current state.

## Repositories

### Core Specification

**[FOCUS_Spec](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec)** — The main specification repository. Contains the spec itself (in `specification/`), supporting content, development guidelines, custom linter rules, and IDE integrations for both Cursor and Claude. As of early 2026: 284 stars, 60 forks, 607+ commits on the `working_draft` branch, 232 open issues, 6 releases (v0.5 through v1.3). The spec is written in markdown and follows Semantic Versioning 2.0.

### Governance and Legal

**[foundation](https://github.com/FinOps-Open-Cost-and-Usage-Spec/foundation)** — Project charter, operating procedures, Steering Committee documentation, Focus Group definitions, guiding principles, and scope documents. This is the authoritative source for FOCUS governance. 19 stars, 12 forks.

### Data and Testing

**[FOCUS-Sample-Data](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS-Sample-Data)** — Repository for sharing FOCUS dataset examples. Contains anonymized real-world billing data from multiple providers, useful for testing tools and learning the spec. 25 stars, 14 forks.

**[focus_extraction_test](https://github.com/FinOps-Open-Cost-and-Usage-Spec/focus_extraction_test)** — Testing repository for extracting normative requirements from the specification text. Supports the automated requirement extraction pipeline.

**[test](https://github.com/FinOps-Open-Cost-and-Usage-Spec/test)** — General testing-only repository (JavaScript). 1 star, 1 fork.

### Tooling and Infrastructure

**[focus_requirements_model_analyzer](https://github.com/FinOps-Open-Cost-and-Usage-Spec/focus_requirements_model_analyzer)** — Models and displays FOCUS normative requirements (HTML). Provides visualization of requirement dependencies and relationships.

**[EasyCLA](https://github.com/FinOps-Open-Cost-and-Usage-Spec/EasyCLA)** — Manages specification membership signatures. Contributors must sign the FOCUS Membership Agreement via EasyCLA before their pull requests can be merged. 16 stars, 303 forks.

**[vercel](https://github.com/FinOps-Open-Cost-and-Usage-Spec/vercel)** — Webhook deployment service (JavaScript) for the spec website.

**[.github](https://github.com/FinOps-Open-Cost-and-Usage-Spec/.github)** — Provides the FOCUS organization-level overview displayed on the GitHub org page.

### Archived

**[Usage_Unit](https://github.com/FinOps-Open-Cost-and-Usage-Spec/Usage_Unit)** — Archived repository (Python, forked from FOCUS_Spec). 4 stars. Previously used for usage unit standardization work, now folded into the main spec.

## Related Repositories (FinOps Foundation Org)

The **FinOps Foundation** GitHub organization (`finopsfoundation`) hosts the complementary tooling:

- **[focus_converters](https://github.com/finopsfoundation/focus_converters)** — Parent repository for FOCUS data converters (see [[focus-converter]])
- **[focus_validator](https://github.com/finopsfoundation/focus_validator)** — Dataset validator against the FOCUS spec (see [[focus-validator]])

## Key Points

- The `working_draft` branch on FOCUS_Spec is where active development happens between releases
- 232 open issues indicate active community engagement and a healthy backlog
- The repo includes `.claude/commands` and `.cursor/commands` directories — showing that AI-assisted contribution workflows are first-class concerns
- The separation between the FOCUS org (spec) and finopsfoundation org (tooling) reflects the governance separation between the specification project and the FinOps Foundation

## Connections

- Related to: [[focus-converter]] — the data conversion tool hosted under finopsfoundation
- Related to: [[focus-validator]] — the validation tool hosted under finopsfoundation
- Related to: [[contribution-process]] — how to contribute via GitHub
- Related to: [[governance-and-charter]] — the foundation repo's role
- See also: [[sample-data-and-sandbox]]

## Sources

- [FinOps-Open-Cost-and-Usage-Spec GitHub Organization](https://github.com/FinOps-Open-Cost-and-Usage-Spec) — org page with all repos
- [FOCUS_Spec Repository](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec) — main spec repo
