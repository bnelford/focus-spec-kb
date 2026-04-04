---
title: "FOCUS Validator"
---

# FOCUS Validator

> A Python-based validation engine that checks billing datasets against the FOCUS specification using a sophisticated rule system backed by DuckDB SQL generation and graph-based dependency resolution.

## What It Does

The FOCUS Validator takes a billing dataset (in CSV or Parquet format) and checks whether it conforms to the FOCUS specification. It reports which columns are present, which are missing, which have valid values, and which violate normative requirements. The output is a comprehensive compliance report.

This is the **reference implementation** for FOCUS validation, maintained by the FinOps Foundation. While third-party validators may also be built, this one is authoritative.

## Architecture

The validator is a sophisticated piece of engineering with several notable architectural choices:

### Validation Pipeline

```
Input Dataset (CSV/Parquet)
       ↓
  Rule Loading (FOCUS version-specific)
       ↓
  Applicability Assessment
       ↓
  Dependency Resolution (topological sort)
       ↓
  SQL Generation (DuckDB)
       ↓
  Validation Execution
       ↓
  Compliance Report
```

### Core Components

**Validation Orchestrator (`validator.py`)** — coordinates data loading, rule loading, and validation execution. Manages FOCUS specification versions (supports both local and remote specs) and processes applicability criteria filtering.

**Rule Definitions (`config_objects/`)** — Pydantic models defining FOCUS rules, validation criteria, and composite checks. Each rule has metadata about its applicability, dependencies, and expected behavior.

**DuckDB Schema Converter** — the most sophisticated component. Uses a registry-based generator system with 20+ specialized generators to produce SQL validation queries. This approach leverages DuckDB's analytical SQL capabilities for efficient large-dataset validation.

### Generator Framework

The system uses a **factory pattern** with a registry mapping rule function names to SQL generators:

- `ColumnPresent` — validates that a column exists in the dataset
- `TypeString` — checks string type constraints
- `FormatDateTime` — validates datetime format compliance
- `CheckModelRule` — processes model-level validations
- `AND` / `OR` — handles composite rule logic

Each generator implements `REQUIRED_KEYS` for parameter validation, `DEFAULTS` for optional parameters, and uses immutable parameter handling via `MappingProxyType`.

### Dependency Resolution

The `RuleDependencyResolver` uses advanced graph algorithms to determine the correct order for rule execution:

- **Kahn's Algorithm** — produces topological ordering with cycle detection
- **Tarjan's SCC Algorithm** — identifies strongly connected components (catches circular dependencies)
- **BFS-based Transitive Closure** — discovers all nested dependencies
- **Bidirectional Graph Structures** — enables O(1) dependency lookups

This matters because validation rules have dependencies — you can't check if a column's values are valid until you've confirmed the column exists, and you can't check cross-column relationships until both columns are validated.

## Performance Features

The validator is designed for enterprise-scale datasets:

- **Connection pooling** for DuckDB reuse
- **Query plan caching** to avoid regenerating SQL for repeated checks
- **Thread-safe generators** for concurrent validation
- **Lazy evaluation** of SQL queries
- **Batch processing** and result streaming
- **Early termination** for AND/OR composite rules (short-circuit evaluation)
- **Upstream dependency failure short-circuiting** — if a prerequisite check fails, dependent checks are skipped to prevent cascading errors

## Error Handling

The validator includes sophisticated error recovery:

- Column name extraction from DuckDB error messages using regex patterns
- Classification of SQL errors (syntax, schema mismatches, validation failures)
- Detailed error reporting with root cause analysis
- Visual validation dependency graphs via Graphviz (optional)

## Usage

```bash
pip install focus_validator

# Validate a FOCUS dataset
focus-validator validate \
  --data-path /path/to/dataset.parquet \
  --focus-version 1.2
```

## Key Points

- Built on DuckDB — leveraging analytical SQL for efficient validation of large datasets
- 20+ specialized SQL generators cover the full range of FOCUS normative requirements
- Graph-based dependency resolution ensures rules execute in the correct order
- Supports multiple FOCUS versions — can validate against 1.0, 1.1, 1.2, or 1.3
- MIT licensed, Python-based, supports CSV and Parquet input formats
- Can generate Graphviz visualizations of validation rule dependencies

## Connections

- Related to: [[focus-converter]] — validate converter output for compliance
- Related to: [[columns-dimensions-metrics]] — the schema the validator checks against
- Related to: [[requirements-model-analyzer]] — visualizing normative requirements
- Related to: [[github-organization]] — hosted under the finopsfoundation org
- See also: [[sample-data-and-sandbox]], [[contribution-process]]

## Sources

- [focus_validator Repository](https://github.com/finopsfoundation/focus_validator) — source code and documentation
- [FOCUS Specification Overview](https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/specification/overview.md) — mentions the validator as reference implementation
