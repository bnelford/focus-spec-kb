---
title: "The FOCUS Requirements Model"
---

# The FOCUS Requirements Model

> A machine-readable framework that translates the specification's verbose normative requirements into structured JSON rules that can be programmatically validated, visualized as dependency graphs, and used to generate documentation.

## What It Is

The FOCUS Requirements Model (RM) is one of the most architecturally significant components of the specification infrastructure — and one that most practitioners never see. While the human-readable spec lives in markdown files that define columns, their data types, and their normative requirements in prose, the Requirements Model takes all of that normative text and encodes it as **structured, testable JSON rules**.

Every MUST, SHOULD, and MAY statement in the specification has a corresponding rule in the model. Each rule has a unique identifier, typed validation logic, applicability conditions, dependencies on other rules, and versioning metadata. The result is a machine-readable representation of the entire specification that can be:

- **Programmatically validated** against real billing datasets
- **Visualized as dependency graphs** (DAGs) showing how rules relate
- **Used to generate documentation** — normative text can be extracted from the model, not the other way around
- **Tested for internal consistency** — a suite of 40+ tests catches broken dependencies, orphan rules, duplicate IDs, and formatting errors

The model lives in the FOCUS_Spec repository at `specification/requirements_model/` and has published releases for **v1.2** and **v1.3** of the specification.

## Who Built It

The Requirements Model is primarily the work of **Mike Fuller**, CTO of the FinOps Foundation, who serves as a FOCUS Maintainer and Steering Committee member. Fuller — co-author of the O'Reilly *Cloud FinOps* book — has been central to FOCUS development since its inception, including building the FOCUS Sandbox and leading the specification's technical evolution. The model represents his vision for making the spec not just a document but a testable, computable artifact.

The development process is described as three stages: ~40% effort extracting atomic and composite normative requirements from the spec into JSON (currently AI-assisted with ~85% validity requiring member review), ~35% refining and validating the JSON against a shared schema, and ~25% modeling dependencies between rules using logical operators.

## How It Works

### Rule Structure

Every normative requirement in the FOCUS spec becomes a **ModelRule** in JSON. A rule looks like this:

```json
{
  "CAU-BilledCost-C-001-M": {
    "Function": "Validation",
    "Reference": "BilledCost",
    "EntityType": "Column",
    "ModelVersionIntroduced": "1.2",
    "Status": "Active",
    "ApplicabilityCriteria": [],
    "Type": "Static",
    "ValidationCriteria": {
      "MustSatisfy": "MUST be present in a Cost and Usage FOCUS dataset",
      "Keyword": "MUST",
      "Requirement": {
        "CheckFunction": "CheckPresence",
        "ColumnName": "BilledCost"
      },
      "Condition": {},
      "Dependencies": []
    }
  }
}
```

### Rule Identifier Format

Every rule has a unique ID following a strict pattern:

```
<DatasetPrefix>-<ArtifactName>-<ArtifactType>-<NumericId>-<Status>
```

| Segment | Meaning | Examples |
|---|---|---|
| DatasetPrefix | Which dataset (e.g., CAU = Cost and Usage) | `CAU`, `CC` (Contract Commitment) |
| ArtifactName | The column or attribute name | `BilledCost`, `ListUnitPrice`, `DateTimeFormat` |
| ArtifactType | **C** (Column), **A** (Attribute), **D** (Dataset) | `C`, `A`, `D` |
| NumericId | Sequence number (000 = composite rule) | `001`, `002`, `000` |
| Status | **M** (Mandatory), **O** (Optional), **C** (Conditional) | `M`, `O`, `C` |

Example: `CAU-ListUnitPrice-C-001-C` = Cost and Usage dataset, ListUnitPrice column, Column-level rule #001, Conditional.

Rules numbered `-000-` are **composite rules** — they group related sub-rules and express that an artifact "adheres to the following requirements."

### Feature Type Groupings

Rules are grouped into higher-level feature categories:

| Code | Name | Meaning |
|---|---|---|
| **MCF** | Mandatory Column Features | All MUST requirements for columns |
| **OCF** | Optional Column Features | All MAY requirements for columns |
| **MAF** | Mandatory Attribute Features | All MUST requirements for attributes |
| **OAF** | Optional Attribute Features | All MAY requirements for attributes |

These enable queries like "give me all mandatory column features for ListUnitPrice" (`ListUnitPrice:MCF`) or "all mandatory columns across the entire spec" (`FOCUS:MCF`).

### Input Files

The model for each version (e.g., `releases/1.3/`) contains:

| File | Purpose |
|---|---|
| `model_details.json` | Version metadata and model-level information |
| `applicability_criteria.json` | Feature flags controlling when rules apply (e.g., "provider supports commitment discounts") |
| `check_functions.json` | Logical validation functions and their arguments (CheckPresence, CheckNotValue, CheckType, etc.) |
| `model_datasets.json` | Maps datasets (CostAndUsage, ContractCommitment) to their rule sets |
| `model_schema.json` | JSON Schema (Draft 7) for validating the model itself |
| `model_rules/` | Directory of JSON files defining individual ModelRules, organized by dataset and artifact type |

For v1.3, the `model_rules/` directory is organized into:
- `model_rules/datasets/cost_and_usage/` — rules for the core Cost and Usage dataset
- `model_rules/datasets/contract_commitment/` — rules for the supplemental Contract Commitment dataset
- `model_rules/attributes/` — attribute-level rules

### BCP-14 Keyword Mapping

The model formalizes how RFC 2119 keywords map to feature classifications:

| Keyword | Classification | Feature Group |
|---|---|---|
| **MUST** / **SHALL** | Mandatory (M) | MCF or MAF |
| **SHOULD** / **RECOMMENDED** | Optional (O) | OCF or OAF |
| **MAY** / **OPTIONAL** | Optional (O) | OCF or OAF |

Note: RECOMMENDED was deprecated in December 2025 per the [[contributing-to-focus|editorial guidelines]], replaced by SHOULD.

## The Build Toolchain

The Requirements Model includes a sophisticated build and validation pipeline:

### `build_json.py` — Model Assembly

Merges all component files for a given version into a single consolidated JSON file (`build/model-{version}.json`). Can target a specific version or build all discovered versions. Runs tests automatically unless `--build-only` is specified.

```bash
cd specification/requirements_model/
python build_json.py                    # Build all versions + run tests
python build_json.py --version 1.3      # Build specific version
python build_json.py --build-only       # Skip tests
```

### `build_dag.py` — Dependency Graph Visualization

Generates **directed acyclic graphs** (DAGs) from the model, rendering rule dependencies as GraphViz DOT and PNG files. This is invaluable for understanding how rules relate — which rules depend on others, where the most complex normative chains exist, and whether circular dependencies have accidentally been introduced.

Configuration options allow filtering by dataset, including/excluding check functions and attributes, and targeting specific start points for focused graph generation.

### `build_tables.py` — Requirements Table Generation

Generates markdown tables documenting all model validation rules for a specified dataset. The output (`model_tables.md`) contains 11 columns: ModelRuleId, Function, Reference, ApplicabilityCriteria, MustSatisfy, Keyword, Requirement, Condition, Type, ModelVersionIntroduced, and Status. Uses breadth-first traversal to resolve rule dependencies for proper ordering.

### `output_normative_text_from_model.py` — Normative Text Extraction

The most powerful output tool — generates human-readable normative requirement lists from the compiled model. This inverts the typical workflow: instead of writing prose and then encoding it as rules, you can **generate documentation from the rules**.

```bash
python output_normative_text_from_model.py                              # All requirements
python output_normative_text_from_model.py --reference "BilledCost"    # Single column
python output_normative_text_from_model.py --exclude-rmids              # Clean text only
python output_normative_text_from_model.py --filename output.md         # Save to file
```

Output organizes rules hierarchically: composite rules (`-000-`) first, then dataset rules, then other rules — each ordered by numeric ID and Order field. Example output:

```markdown
# BilledCost

CAU-BilledCost-D-000-M – BilledCost adheres to the following requirements:
  CAU-BilledCost-D-001-M – MUST be present in a Cost and Usage FOCUS dataset
CAU-BilledCost-C-000-M – BilledCost adheres to the following requirements:
  CAU-BilledCost-C-001-M – MUST be present in a Cost and Usage FOCUS dataset
  CAU-BilledCost-C-002-M – MUST be of type Decimal
```

## The Test Suite

The model includes **40+ pytest tests** that enforce internal consistency. These run automatically during builds and catch issues before they reach PR review. Key categories:

**Structural Integrity**: `test_schema.py` (JSON schema compliance), `test_unique_ids.py` (no duplicate rule IDs), `test_json_indentation.py` (formatting), `test_entityid_format.py` (ID pattern compliance)

**Dependency Correctness**: `test_dependencies.py`, `test_dependencies_exist.py` (all referenced deps are defined), `test_dependencies_not_removed.py` (prevents accidental removal), `test_dependencies_order.py` (correct ordering)

**Rule Quality**: `test_orphan_rules.py` (no unused rules), `test_orphan_attributes.py` (no unused attributes), `test_unused_checkfunctions.py` (no dead check functions), `test_no_duplicate_dependencies.py`, `test_no_spurious_composite.py`

**Normative Language**: `test_keyword_in_mustsatisfy.py` (keywords present in requirement text), `test_mustsatisfy_punctuation.py` (consistent punctuation), `test_mustsatisfy_no_markdown_links.py` (no markdown in requirement text)

**Validation Logic**: `test_check_functions.py`, `test_column_name_validation.py`, `test_nullability_function.py`, `test_type_function.py`, `test_format_function.py`, `test_composite_when_and_or.py` (AND/OR logic)

## What It Can Be Used For

### 1. Automated Conformance Testing

The primary use case. The [[focus-validator]] consumes the Requirements Model to generate validation queries (via DuckDB SQL). When you run the validator against a billing dataset, the rules from the model define what "FOCUS-compliant" means — which columns must be present, what types they must have, what values are allowed, and how columns relate to each other.

### 2. Specification Documentation Generation

The normative text extractor can generate documentation directly from the model. This means the model can serve as the **single source of truth** — write the rules in JSON, generate the prose from them. This reduces drift between what the spec says and what the validator checks.

### 3. Dependency Analysis

The DAG generator reveals the structure of the specification in ways that reading prose never could. You can see which columns have the most complex requirement chains, which rules are foundational (depended on by many others), and where the spec's normative logic is deepest. This is invaluable for contributors assessing the impact of a proposed change.

### 4. Version Comparison

Because rules carry `ModelVersionIntroduced` metadata and the model supports versioning (`1.2`, `1.3`, `1.3-Bugfix1`), you can diff models between versions to see exactly which requirements were added, changed, or removed. This makes release notes precise rather than approximate.

### 5. Provider Implementation Guidance

Data generators implementing FOCUS can use the model programmatically to understand exactly what's required of them. Instead of reading through pages of prose, a provider's engineering team can query the model: "What are all Mandatory Column Features I must implement?" → `FOCUS:MCF`.

### 6. AI-Assisted Spec Development

The model's structured format is ideal for AI-assisted contribution workflows. The `.ai/commands/feature.md` workflow in the repo references the requirements model when implementing new Feature Requests — AI agents can read the JSON to understand existing rules, check for conflicts, and generate new rules that fit the established patterns.

## Versioning

The model follows a version scheme aligned with spec releases:

```
version = spec-version ["-Bugfix" bugfix-num]
```

Examples: `1.2`, `1.3`, `1.3-Bugfix1`, `1.3-Bugfix2`

This allows the model to receive corrections independently of full spec releases, maintaining traceability.

## Current State

As of early 2026:

- **Published releases**: v1.2 and v1.3
- **`latest` symlink** points to v1.3
- **Datasets covered**: Cost and Usage (primary) and Contract Commitment (supplemental, introduced v1.3)
- **AI-assistance in Stage 1**: ~85% validity from AI extraction, requiring member review — this is an active area where the model is still being refined
- **Active development**: Branches like `1467-fr-add-14-specification-revisions-to-requirements-model-recreate` and `2044-ai-update-editorial-guidelines-for-the-requirements-model-specifications` show ongoing work to expand and improve the model

## Key Points

- The Requirements Model turns prose into testable logic — it's the bridge between the specification document and the [[focus-validator]]
- Every normative MUST, SHOULD, MAY in the spec has a corresponding JSON rule with a unique ID
- 40+ automated tests enforce model consistency on every build
- The toolchain can generate DAGs, markdown tables, and normative text from the model
- Mike Fuller (FinOps Foundation CTO, FOCUS Maintainer) is the primary architect
- The model currently covers v1.2 and v1.3, with both the Cost and Usage and Contract Commitment datasets
- AI-assisted extraction handles ~85% of the initial rule encoding, with human review for the remainder

## Connections

- Related to: [[focus-validator]] — the primary consumer of the Requirements Model for conformance checking
- Related to: [[requirements-model-analyzer]] — the separate repo that visualizes requirements (distinct from the in-repo DAG generator)
- Related to: [[columns-dimensions-metrics]] — the columns and their feature levels that the model encodes
- Related to: [[design-principles]] — the BCP-14 normative language conventions the model formalizes
- Related to: [[contributing-to-focus]] — how AI tools use the model in the feature development workflow
- Related to: [[github-organization]] — where the model lives within the FOCUS_Spec repo
- See also: [[commitment-discounts]], [[charge-types-and-categories]], [[tags-and-metadata]]

## Sources

- [Requirements Model README](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/specification/requirements_model/README.md) — authoritative documentation
- [Requirements Model Directory](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/tree/working_draft/specification/requirements_model) — source code and build tools
- [Requirements Model v1.3 Release](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/tree/working_draft/specification/requirements_model/releases/1.3) — latest published model
- [AGENTS.md](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/AGENTS.md) — AI agent context referencing the build process
- [Mike Fuller — FinOps Foundation Staff](https://www.finops.org/about/staff/) — Mike Fuller's role
- [Cloud FinOps (O'Reilly)](https://www.amazon.com/Cloud-FinOps-Collaborative-Real-Time-Decision/dp/1492098353) — Mike Fuller's co-authored book
