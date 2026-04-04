---
title: "Roadmap and Future"
---

# Roadmap and Future

> FOCUS v1.4 is under active development, with future versions expected to expand into data center and AI billing while pursuing international standardization.

## Current State (Early 2026)

As of early 2026, FOCUS has shipped six releases in approximately 2.5 years, establishing a cadence of roughly one major release every 4–5 months. The specification has grown from a cloud-only billing schema to one that covers SaaS, contract commitments, and cost allocation methodology. All four major cloud providers support native FOCUS exports, and the major FinOps platforms are adopting the standard.

## v1.4: Under Development

FOCUS 1.4 is actively under development. The backlog includes accumulated member feedback and requests from the v1.3 cycle. While specific feature commitments haven't been publicly announced, the development direction is informed by:

- Community issues on GitHub (232 open issues on the FOCUS_Spec repo)
- Focus Group discussions
- Feedback from providers implementing v1.2 and v1.3

## Future Expansion Scopes

The FOCUS team has signaled several areas of expansion for future versions:

### Data Center Billing

As organizations increasingly track costs across cloud, colocation, and on-premises data center infrastructure, FOCUS could provide a common schema for **data center billing data** — rack space, power, cooling, network cross-connects, and physical infrastructure costs. This would extend FOCUS's value from pure cloud/SaaS into hybrid and on-premises cost management.

### AI Billing

AI service billing is becoming increasingly complex with diverse pricing models:
- Token-based pricing (LLM APIs)
- GPU-hour pricing (training workloads)
- Inference unit pricing
- Fine-tuning costs
- Model hosting costs

FOCUS v1.2 laid groundwork with virtual currency support (tokens, credits), but future versions will need to handle the full spectrum of AI billing models. This is an area of active discussion given the rapid growth of AI spend across enterprises.

### Deeper SaaS Coverage

While v1.2 added foundational SaaS support, most SaaS providers still don't generate FOCUS data natively. Future versions will need to address:
- License-based billing (per-user, per-seat models)
- True-up and true-down mechanics
- Subscription lifecycle events
- SaaS-specific discount models

### Exchange Rate Modeling

As organizations operate globally with multi-currency billing, future FOCUS versions may address exchange rate standardization — how to handle cost reporting when the billing currency differs from the reporting currency.

### Sustainability and Carbon Attribution

Some FinOps teams are beginning to track the **carbon cost** of cloud consumption alongside financial cost. FOCUS could potentially standardize sustainability metrics (carbon emissions per workload, region-specific carbon intensity) as a parallel data track.

## International Standardization

The JDF (Joint Development Foundation) governance structure was chosen specifically because it positions FOCUS to pursue **international standardization** — potentially through ISO/IEC or similar bodies. This would elevate FOCUS from an industry specification to a formal standard, which could:

- Increase adoption among regulated industries
- Provide procurement teams with a standard to reference in vendor contracts
- Enable compliance and audit frameworks to reference FOCUS by standard number

The timeline for this is unclear, but the governance infrastructure is in place.

## Upcoming Events

**FinOps X 2026** — San Diego, June 8–11, 2026. Will feature a dedicated **FOCUS Lab** where practitioners can:
- Get hands-on with the specification
- Hear from subject matter experts and practitioners using FOCUS
- Provide feedback directly to the FOCUS team
- Participate in working sessions on future spec direction

## Key Points

- v1.4 is actively in development with a healthy backlog from community feedback
- Data center and AI billing are the most likely near-term expansion scopes
- SaaS native adoption remains a significant gap to close
- The JDF structure enables a path to ISO/IEC international standardization
- The spec's rapid cadence (4–5 months between releases) suggests v1.4 could land in mid-2026
- FinOps X 2026 is the next major in-person opportunity for FOCUS engagement

## Connections

- Related to: [[version-history]] — the release trajectory leading here
- Related to: [[focus-1-3-contracts-and-allocation]] — the most recent release
- Related to: [[governance-and-charter]] — the JDF structure enabling standardization
- Related to: [[finops-vendor-adoption]] — adoption driving spec evolution
- Related to: [[pricing-and-quantities]] — virtual currency groundwork for AI billing
- See also: [[focus-overview]], [[design-principles]]

## Sources

- [Linux Foundation FOCUS 1.3 Press Release](https://www.linuxfoundation.org/press/finops-foundation-launches-focus-1.3-to-deepen-cloud-and-saas-billing-transparency-announces-expanded-vendor-support-for-focus-1.2) — future direction signals
- [FOCUS Specification page](https://focus.finops.org/focus-specification/) — links to all versions
- [FOCUS_Spec GitHub Issues](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/issues) — community backlog
