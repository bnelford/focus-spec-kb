---
title: "Contributing to the FOCUS Specification"
---

# Contributing to the FOCUS Specification

> A practical, end-to-end guide for contributing to the FOCUS spec — from signing the membership agreement through using AI agents to submit, review, and ship specification changes.

This guide is compiled directly from the FOCUS_Spec repository's `CONTRIBUTING.md`, `guidelines/` directory, `AGENTS.md`, `.ai/` configuration, and the foundation's `operating_procedures.md`.

---

## Step 0: Become a Member

You cannot contribute to FOCUS without a signed membership agreement. There is no "just open a PR" path — FOCUS is a formal specification project under the Joint Development Foundation, and IP governance requires membership.

### Company Enrollment

Your company enrolls through the [FOCUS Enrollment Portal](https://enrollment.lfx.linuxfoundation.org/?project=finopsopenbillingspec) on the Linux Foundation's LFX platform. This signs the FOCUS Series Membership Agreement, which covers IP commitments and licensing terms. Membership is between the Project and your employer — individual contributors are covered under their company's membership.

### Individual CLA (EasyCLA)

After your company is enrolled, individual contributors complete the EasyCLA process:

1. Fork the [EasyCLA repository](https://github.com/FinOps-Open-Cost-and-Usage-Spec/EasyCLA)
2. Open a PR against it
3. The EasyCLA bot will prompt you to sign if you're not covered
4. Select "click here to be authorized" and complete the signing flow
5. Once signed, the bot marks your PR as authorized

The EasyCLA bot will **block merges** on any PR where the contributor hasn't signed. This is automatic and non-negotiable.

### Membership Tiers

| Tier | SC Participation | WG Chair Eligible | Maintainer Eligible | Voting Rights |
|---|---|---|---|---|
| Steering Committee | Yes | Yes (SC discretion) | Yes (WG Chair approval) | Yes |
| General Member | N/A | N/A | N/A | N/A |
| Contributor Member | No | Yes (SC discretion) | Yes (WG Chair approval) | Consensus only |

Contributor Members participate in consensus-based discussions but do not vote on supermajority issues (like ratification). Only Steering Committee members vote on publications, group formation, and governance.

---

## Step 1: Get Oriented

Before touching any code, familiarize yourself with the project:

### Required Reading

- **[Specification Overview](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/specification/overview.md)** — design principles, audience, structural foundation
- **[Operating Procedures](https://github.com/FinOps-Open-Cost-and-Usage-Spec/foundation/blob/main/operating_procedures.md)** — roles, approval processes, governance
- **[Editorial Guidelines](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/guidelines/contributors/editorial-guidelines.md)** — formatting and style rules
- **[Development Processes](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/guidelines/contributors/development-processes.md)** — issue workflow, PR lifecycle, review stages

### Join the Communication Channels

The FOCUS Working Group operates primarily through Slack. Key channels:

- **#announcements** — project-wide updates
- **#working-group** — general coordination
- **#task-force-#** — specific task force discussions (numbered)
- **#tf-** — abbreviated task force channels
- **#maintainers** — maintainer coordination

### Understand the Repository Structure

```
FOCUS_Spec/
├── specification/          # Core spec: overview.md, glossary.md, column definitions
│   ├── columns/            # Individual column definition files
│   ├── attributes/         # Specification-wide attributes
│   └── requirements_model/ # Machine-readable JSON validation rules
├── supporting_content/     # Provider mapping examples (AWS, GCP, Azure, OCI)
├── guidelines/             # Contributor, editorial, and data generator guidelines
│   ├── contributors/       # Human and AI contribution guidance
│   └── data-generators/    # Guidance for providers implementing FOCUS
├── custom_linter_rules/    # Project-specific markdown linting rules
├── .ai/                    # Shared AI agent configuration
│   ├── commands/           # Reusable AI workflows (feature.md, pr-update.md)
│   └── memory/             # Persistent cross-session learnings
├── .claude/commands/       # Claude Code-specific command wrappers
├── .cursor/commands/       # Cursor IDE-specific command wrappers
├── AGENTS.md               # Centralized AI agent project context
├── CONTRIBUTING.md          # Contribution prerequisites and workflow
└── CHANGELOG.md            # Version change history
```

---

## Step 2: Choose Your Contribution Type

### Feedback Issues

Minor corrections — typos, broken links, formatting problems, terminology inconsistencies. Use the "General Feedback" template. These don't require a solution proposal from external contributors.

If the correction qualifies as an **erratum** (non-material fix to a published spec), it follows a streamlined path: Maintainer review → "errata" label → PR against `working_draft` → update `ERRATA.md` → merge.

### Feature Requests (FR)

Substantive improvements — new columns, new attributes, changed normative requirements, new datasets. Title with `[FR]` prefix and follow these conventions:

- Start with standard verbs: **Add**, **Clarify**, **Standardize**, **Remove**, **Update**
- Use correct sentence structure and outcome-focused language
- One concept per issue
- Keep titles ≤ 75 characters (aim for ~60)

Feature Requests flow through a defined triage pipeline: Submitted → Needs More Info → Under Consideration → Provisional Scope → Accepted in Scope → Ready for Dev.

### Action Items (AI)

Concrete development steps derived from Feature Requests. Titled `[AI]`, these are granular tasks with simple definitions of done. Each Feature Request has one Action Item marked "Critical Path" for release advancement.

### Maintenance Tasks

Repository infrastructure work that doesn't affect specification content — workflow updates, GitHub configuration, tooling changes.

**If you're unsure what type your contribution is**, open a Blank Issue first and ask.

---

## Step 3: Follow the Editorial Standards

FOCUS has specific formatting rules. Get these wrong and your PR will be sent back.

### Normative Language (BCP-14)

The spec uses RFC 2119 / BCP 14 keywords, **always in uppercase**:

- **MUST** / **MUST NOT** — absolute requirements
- **SHOULD** / **SHOULD NOT** — strong recommendations with valid exceptions
- **MAY** — truly optional

> [!important]
> The term **RECOMMENDED** as normative language was **deprecated in December 2025**. Use **SHOULD** instead. Older terms like SHALL, REQUIRED, and OPTIONAL are also deprecated in favor of MUST, SHOULD, MAY.

Present normative requirements as **bullet lists**, not prose.

### Naming Conventions

- **Display names** use spaces: "Pricing Quantity", "Billing Account Id"
- **Column IDs** use PascalCase: `PricingQuantity`, `BillingAccountId`
- Use display names in non-normative (explanatory) sections
- Use Column IDs in normative sections and schema definitions
- Link the **first occurrence** of a column/term only — don't over-link

### Value Formatting

Enclose column values in **double quotation marks**: `"Usage"`, `"Standard"`, `"Committed"`. No bold or italics on values.

### Glossary Terms

Format as italicized, linked references on first mention: `*[resource](#glossary:resource)*`

### Markdown Rules

- All unordered lists use **asterisks** (`*`), not dashes or plus signs
- Simple tables use Markdown; complex tables (merged cells) use HTML
- Important notes use blockquotes (`>`)
- Code and JSON use fenced code blocks with syntax highlighting
- Each section uses `.mdpp` templates that assemble individual `.md` files — all markdown files must be included in their corresponding template

---

## Step 4: Write Your Contribution

### The Branch-PR Workflow

```
1. Create branch from working_draft
     Naming: personal-name/description OR issue-number-description
     Examples: flanakin/skuterm, 636-clarify-guidance
     ⚠️ Non-compliant branch names may be deleted without notice

2. Make changes in your branch

3. Commit with merge commits (not squash)
     Squash merges are avoided for traceability

4. Push and open a Draft PR
     Title: "FR #[number]: [description]" or "AI #[number]: [description]"
     Use action verbs: Reorganize, Correct, Clarify, Add

5. Link to parent Issue via GitHub's Development section

6. PR Description must include:
     - Assumed knowledge / education for reviewers
     - Example data demonstrating outcomes
     - Recurring decision context (naming choices, value lists)
```

### Draft PR Protocol

When your PR is in Draft status:

- You're signaling "actively working — early feedback welcome but don't expect fast responses"
- You may comment on sections that are ready vs. not ready for feedback
- Assigning specific reviewers signals invitation for feedback on those areas
- Task Force members may collaborate with your communication

Once you move out of Draft, you're expected to respond to feedback in a timely manner.

### Example Authoring

If your contribution includes examples (data samples, SQL queries, etc.), follow this strict process:

1. Submit **one or two representative examples** to your Task Force first
2. Get preliminary review for alignment on formatting, terminology, and technical accuracy
3. Only then develop the complete example set
4. **You must independently calculate and manually verify** all examples — no direct commit of unvalidated AI-generated examples
5. Maintainers will return PRs to Draft status if they detect unreviewed or hallucinated examples

---

## Step 5: The Review Gauntlet

Every PR goes through a three-stage review. Normative changes require all three stages; editorial changes may have a shorter path.

### Stage 1: Maintainer Review

Maintainers check for quality, formatting compliance, and alignment with [[design-principles]]. They verify:

- Correct normative language usage
- Editorial guideline compliance
- Proper linking to issues
- Consistency with existing spec content

### Stage 2: Task Force Review

The relevant Task Force conducts technical review — does the change accurately represent the intended behavior? Is it consistent with the rest of the specification? Does it handle edge cases?

### Stage 3: Members Working Group Review

The Working Group performs final approval. **Minimum three (3) Working Group members must submit an "Approve" review** for the PR to merge.

### Review Response Types

| Type | Effect | When to Use |
|---|---|---|
| **Comment** | Non-blocking | General feedback, questions, suggestions |
| **Approve** | Formal approval | Change is correct and ready to merge |
| **Request Changes** | Blocking | Significant revisions required — prevents merge |

All comments MUST be reviewed and considered. Comments MAY be dismissed if non-impactful, resolved, or out-of-scope — but you must explain why.

### Review Etiquette

The spec's development processes doc is explicit about tone:

- Describe the specific item and suggest solutions or considerations
- Maintain positive tone — avoid confrontational language
- Be constructive: "This looks good because..." or "Consider whether..."
- Be specific: reference exact lines and explain your reasoning

---

## Step 6: Using AI Tools

FOCUS explicitly permits and supports AI-assisted contributions. The project has first-class AI tooling integrated into the repo.

### The Policy

From the [AI Usage Guidelines](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/guidelines/contributors/ai-usage-guidelines.md):

> AI tools (such as GitHub Copilot, Claude Code, Cursor, and similar coding assistants) may be used to assist with FOCUS contributions.

This aligns with the Linux Foundation's Generative AI Policy. AI-generated content follows **identical** IP, licensing, and review standards as human-authored content.

### Two Modes of AI Use

**Interactive Mode**: You work with an AI assistant in real-time — asking it to draft text, review normative language, check formatting, etc. You review, edit, and submit the contribution yourself. Your existing CLA covers this; no separate agreement needed.

**Autonomous Mode**: You request an AI agent to work independently — researching issues, drafting PRs, etc. The AI creates pull requests or suggestions assigned to you for review. The PR itself serves as the checkpoint. AI agents creating direct PRs must undergo Linux Foundation CLA onboarding (submitted as a Maintenance Task issue).

### Your Responsibilities (Both Modes)

As the CLA-covered human, you must:

1. Review all AI output for correctness and quality
2. Ensure FOCUS normative requirement compliance
3. Verify no third-party IP conflicts exist
4. Confirm your AI tool's terms don't conflict with FOCUS's Creative Commons By 4.0 license
5. Independently verify all examples — no committing unvalidated AI examples

### AI Attribution

Attribution of AI assistance in PR descriptions is **optional**. FOCUS mandates no specific attribution format. However, when applying suggestions via AI, you must manually record co-authorship using `Co-authored-by:` trailers.

### The AI Infrastructure in the Repo

FOCUS has built a structured AI agent configuration directly into the repository:

**`AGENTS.md`** — Centralized project context for any AI tool. Contains the build process, content standards, normative language conventions, naming rules, file organization, and artifact management instructions.

**`.ai/commands/`** — Reusable AI workflows shared across all tools:

- **`feature.md`** — A 5-phase workflow for implementing Feature Requests: Setup → Research → Plan → Execute → PR. Accepts a GitHub issue number and orchestrates the full development cycle with three human checkpoints (after research, after planning, before execution).

- **`pr-update.md`** — A 6-phase workflow for processing PR review feedback: Setup → Research → Analyze → Consult User → Execute → Commit. Categorizes feedback into simple changes, spec changes, supporting content changes, and contentious feedback. Posts discussion/question responses autonomously but requires explicit approval for implementation changes. Uses `🤖 [AI][{platform}]` prefix on all AI-generated comments.

**`.ai/memory/`** — Persistent learnings that carry across AI sessions:

- **`development-process.md`** — Accumulated knowledge about FOCUS development patterns

**`.ai/work/`** — Active issue working directories (deleted before merge):

- Pattern: `.ai/work/<issue-number>-<kebab-case-name>/`
- Contains: `research.md`, `plan.md`, `tasks.md`
- Valuable research migrates to `supporting_content/` during PR review
- **Critical**: Don't delete working files until final approval

**Tool-specific wrappers** reference the centralized `.ai/` configuration without duplicating content:

- `.claude/commands/` — Claude Code wrappers (YAML frontmatter with `allowed-tools`)
- `.cursor/commands/` — Cursor IDE wrappers
- `.github/prompts/` — GitHub Copilot wrappers

### Creating Shared AI Commands

If you build a new reusable AI workflow:

1. Create the main workflow in `.ai/commands/<name>.md`
2. Create tool-specific wrappers:
   - Claude Code: `.claude/commands/<name>.md`
   - Cursor: `.cursor/commands/<name>.md`
   - GitHub Copilot: `.github/prompts/<name>.prompt.md`

---

## Step 7: Build and Validate Locally

Before submitting a PR, build and lint locally:

### Build the Specification

```bash
cd specification/
make                    # Builds Markdown, HTML, and PDF
make clean              # Removes generated files
```

Style variants: `working_draft` (default), `main`, `candidate_release`.

### Build the Requirements Model

```bash
cd specification/requirements_model/
./build_json.py          # Generate and validate
./build_json.py --build-only  # Generate without tests
```

### Run Tests

```bash
pytest tests/            # Requirements model validation
```

### Lint Markdown

```bash
pymarkdownlnt --config specification/markdownlnt.cfg scan <file.md>
```

### Dependencies

- Python packages: pymarkdownlnt, pytest, jsonschema, panflute, watchdog
- System tools: Pandoc, wkhtmltopdf, GNU Make

---

## The Publication Pipeline

After your PR is approved and merged, your change enters the release pipeline:

```
working_draft (development collection point)
       ↓  (Consistency & IPR Reviews: 2-week consistency + 30-day IPR period)
candidate_recommendation
       ↓  (Final WG Approval + SC Ratification)
main (published releases)
```

The 30-day IPR (Intellectual Property Review) period allows members to submit exclusion notices for patented content — this is a standard part of JDF specification governance. After IPR clears, the Steering Committee ratifies and the release is published.

---

## Quick Reference: What Gets Reviewed How

| Change Type | Maintainer Review | Task Force Review | WG Member Review (3 approvals) |
|---|---|---|---|
| Typo / editorial fix | ✅ | ❌ | ❌ |
| Erratum (published spec) | ✅ (1 maintainer min) | ❌ | ❌ |
| Non-normative content | ✅ | ✅ | May vary |
| Normative change | ✅ | ✅ | ✅ (required) |
| New column / dataset | ✅ | ✅ | ✅ (required) |

---

## Key Points

- **Membership is mandatory** — sign the CLA via EasyCLA before any contribution
- **Branch names must comply** — `personal-name/description` or `issue-number-description`, or they get deleted
- **Normative language is strict** — MUST, SHOULD, MAY only. RECOMMENDED is deprecated.
- **AI is first-class** — FOCUS has built-in AI agent infrastructure with two reusable workflows
- **Human accountability is non-negotiable** — AI can draft, but a CLA-covered human reviews and takes responsibility
- **Three-stage review for normative changes** — Maintainer → Task Force → Working Group (3 approvals)
- **Examples must be manually verified** — this is the most common reason AI-assisted PRs get bounced
- **Merge commits, not squash** — for traceability
- **All work tracked via GitHub Issues** — no drive-by PRs

## Connections

- Related to: [[contribution-process]] — the summary version of this guide
- Related to: [[governance-and-charter]] — the governance framework behind these processes
- Related to: [[design-principles]] — what guides acceptance of contributions
- Related to: [[github-organization]] — the repos where contributions happen
- Related to: [[requirements-model-analyzer]] — the validation tooling for normative requirements
- See also: [[version-history]], [[columns-dimensions-metrics]]

## Sources

- [CONTRIBUTING.md](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/CONTRIBUTING.md) — contribution prerequisites and workflow
- [AI Usage Guidelines](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/guidelines/contributors/ai-usage-guidelines.md) — complete AI contribution policy
- [GitHub Guidelines](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/guidelines/contributors/github-guidelines.md) — repository workflow and PR process
- [Editorial Guidelines](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/guidelines/contributors/editorial-guidelines.md) — formatting and style rules
- [Development Processes](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/guidelines/contributors/development-processes.md) — issue lifecycle and review stages
- [Errata Guidelines](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/guidelines/errata-guidelines.md) — post-publication correction process
- [AGENTS.md](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/AGENTS.md) — AI agent project context
- [Operating Procedures](https://github.com/FinOps-Open-Cost-and-Usage-Spec/foundation/blob/main/operating_procedures.md) — roles, approvals, governance
- [FOCUS Enrollment Portal](https://enrollment.lfx.linuxfoundation.org/?project=finopsopenbillingspec) — company membership
- [EasyCLA Repository](https://github.com/FinOps-Open-Cost-and-Usage-Spec/EasyCLA) — individual CLA signing
