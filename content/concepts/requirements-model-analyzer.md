---
title: "Requirements Model Analyzer"
---

# Requirements Model Analyzer

> Tooling for extracting, modeling, and visualizing the normative requirements embedded in the FOCUS specification text.

## Overview

The FOCUS specification contains hundreds of normative requirements — statements using RFC 2119 language (MUST, SHOULD, MAY) that define exactly what a compliant billing dataset must look like. The **requirements model analyzer** and **extraction test** repositories provide tooling to work with these requirements programmatically.

## Repositories

### focus_requirements_model_analyzer

The [focus_requirements_model_analyzer](https://github.com/FinOps-Open-Cost-and-Usage-Spec/focus_requirements_model_analyzer) repository models and displays FOCUS normative requirements in HTML format. It provides visualization of how requirements relate to each other — which requirements depend on others, which columns are constrained by which rules, and where the most complex normative logic exists.

This is useful for:
- Understanding the **dependency graph** of FOCUS requirements
- Identifying which areas of the spec have the most complex normative logic
- Supporting the [[focus-validator]] development by providing a clear picture of what needs to be validated
- Reviewing spec changes to understand their impact on related requirements

### focus_extraction_test

The [focus_extraction_test](https://github.com/FinOps-Open-Cost-and-Usage-Spec/focus_extraction_test) repository supports automated extraction of normative requirements from the specification text. This is part of the pipeline that ensures the specification's prose accurately maps to testable, implementable requirements.

## How Requirements Are Structured

FOCUS uses BCP 14 (RFC 2119) normative language to define requirements at different strictness levels:

- **MUST** / **MUST NOT** — absolute requirements or prohibitions
- **SHOULD** / **SHOULD NOT** — strong recommendations with valid exceptions
- **MAY** — truly optional behavior

Each column definition in the spec contains normative statements about:
- Whether the column must be present (existence)
- What data type it must use
- Whether it can be null (and under what conditions)
- What values are allowed (enumerations)
- Relationships to other columns (e.g., "MUST be null when CommitmentDiscountId is null")

## Feature Level Mapping

The feature level of each column is derived from its normative requirements:

| Requirement Pattern | Feature Level |
|---|---|
| MUST with no conditions | Mandatory |
| MUST with conditions | Conditional |
| SHOULD | Recommended |
| MAY | Optional |

## Key Points

- These tools exist to **maintain internal consistency** of the specification
- The requirements extraction pipeline helps catch situations where prose changes inadvertently alter normative requirements
- The model analyzer provides a visual tool for understanding complex cross-column constraints
- Both repositories support the validator's rule generation — the validator's rules should match the extracted requirements

## Connections

- Related to: [[focus-validator]] — consumes requirements to generate validation rules
- Related to: [[columns-dimensions-metrics]] — the columns whose requirements are being modeled
- Related to: [[design-principles]] — the normative language conventions
- See also: [[github-organization]], [[contribution-process]]

## Sources

- [focus_requirements_model_analyzer Repository](https://github.com/FinOps-Open-Cost-and-Usage-Spec/focus_requirements_model_analyzer)
- [focus_extraction_test Repository](https://github.com/FinOps-Open-Cost-and-Usage-Spec/focus_extraction_test)
- [FOCUS Specification Overview (GitHub)](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/specification/overview.md) — feature level definitions
