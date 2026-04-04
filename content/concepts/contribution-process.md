---
title: "Contribution Process"
---

# Contribution Process

> Contributing to FOCUS requires signing the Membership Agreement via EasyCLA, then working through GitHub issues, pull requests, and Focus Groups using a hybrid contribution model.

## Prerequisites

Before contributing to FOCUS, you must:

1. **Sign the FOCUS Membership Agreement** — this is managed through **EasyCLA** (Electronic Contributor License Agreement). To initiate the signing process, open a PR against the [EasyCLA repository](https://github.com/FinOps-Open-Cost-and-Usage-Spec/EasyCLA). The EasyCLA bot will block merges if your membership agreement hasn't been signed.

2. **Understand the governance** — read the [[governance-and-charter|foundation repository]] documents, including the charter, operating procedures, and guiding principles.

## The Hybrid Contribution Model

FOCUS uses what it calls a **hybrid contribution model**, which combines two input channels:

### GitHub-First Contributions

The official record of the specification lives in GitHub. Direct contributions include:
- **Issues** — report bugs, propose new columns, suggest improvements, ask questions
- **Pull requests** — propose spec text changes, fix errors, add supporting content
- **Discussions** — longer-form conversations about design decisions

The `working_draft` branch on the [FOCUS_Spec repository](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec) is where active development happens between releases.

### Focus Groups

**Focus Groups** are specialized working teams that tackle specific areas of the specification. Members participate in regular meetings, discussions, and reviews. Input from Focus Groups is ultimately entered into GitHub — GitHub remains the authoritative record.

Focus Groups provide a venue for:
- In-depth discussion of complex topics (e.g., SaaS billing models, commitment discount edge cases)
- Building consensus among practitioners and providers
- Reviewing proposed changes before they become PRs

## Contribution Workflow

```
1. Sign EasyCLA (one-time)
       ↓
2. Identify contribution (via issues, Focus Groups, or personal observation)
       ↓
3. Fork the FOCUS_Spec repository
       ↓
4. Create a branch and make changes
       ↓
5. Open a Pull Request against working_draft
       ↓
6. EasyCLA bot verifies membership
       ↓
7. Community and maintainer review
       ↓
8. Revisions based on feedback
       ↓
9. Merge by maintainers
       ↓
10. Changes ship in next release after Steering Committee ratification
```

## Roles

### Contributing Members

Any member organization that has signed the CLA may contribute issues, content, or pull requests. This is the broadest participation level.

### Maintainers

Maintainers are a subset of Contributing Members who advance the **day-to-day evolution** of the specification. Their specific responsibilities:
- Ensure documents accurately reflect group decisions
- Verify adherence to formatting and content guidelines
- Review and merge pull requests
- Manage the working draft branch

### Steering Committee

The ultimate decision-making body. They ratify releases and provide strategic direction. See [[governance-and-charter]] for details.

### FinOps Foundation Staff

The FinOps Foundation (working for the Linux Foundation) provides **operational support**: coordinating contributor workflows, facilitating Focus Groups, managing communications, and handling publishing.

## IDE Integration

The FOCUS_Spec repository includes:
- `.claude/commands` — Claude AI assistant integration for contribution workflows
- `.cursor/commands` — Cursor IDE integration

These indicate that AI-assisted contribution workflows are recognized as part of the development process.

## Key Points

- Membership agreement (via EasyCLA) is mandatory before any contributions
- GitHub is the authoritative record, but Focus Groups are a valid input channel
- The working draft branch has 607+ commits and 232 open issues — the project is actively developed
- Contributions follow standard open-source patterns (fork → branch → PR → review → merge)
- FinOps Foundation staff handles operational logistics, not specification decisions

## Connections

- Related to: [[governance-and-charter]] — the governance framework for contributions
- Related to: [[github-organization]] — the repos where contributions happen
- Related to: [[design-principles]] — the principles that guide what contributions are accepted
- See also: [[version-history]], [[requirements-model-analyzer]]

## Sources

- [FOCUS EasyCLA Repository](https://github.com/FinOps-Open-Cost-and-Usage-Spec/EasyCLA) — membership signing process
- [FOCUS Foundation Repository](https://github.com/FinOps-Open-Cost-and-Usage-Spec/foundation) — contribution governance docs
- [FOCUS FAQs](https://focus.finops.org/faqs/) — contribution questions answered
- [FOCUS_Spec Repository](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec) — contribution target
