---
title: "FOCUS Converter"
---

# FOCUS Converter

> A command-line tool that transforms billing data from AWS, Azure, GCP, and Oracle Cloud into FOCUS-formatted datasets using YAML-defined conversion rules.

## What It Does

The FOCUS Converter bridges the gap between native provider billing exports and the standardized FOCUS schema. While major cloud providers are adopting native FOCUS exports, many organizations still have historical billing data in proprietary formats, or work with providers that haven't yet implemented native FOCUS support. The converter handles the transformation.

## Supported Providers

- **Amazon Web Services (AWS)** — converts CUR (Cost and Usage Report) data
- **Microsoft Azure** — converts Azure Cost Management exports
- **Google Cloud Platform (GCP)** — converts BigQuery billing exports
- **Oracle Cloud Infrastructure (OCI)** — converts OCI cost reports

Each provider has its own conversion configuration that maps native columns to FOCUS columns, handles data type transformations, and applies provider-specific logic.

## How It Works

### Conversion Rules

The system uses **YAML configuration files** containing sequential conversion rules. Each file defines how native provider columns map to FOCUS columns, what transformations are needed, and how to handle edge cases. The rules are also exported in both Markdown and CSV formats (in the `conversion_rules_export/` directory) for reference and auditing.

### Architecture

```
Native Billing Data (Parquet, CSV)
       ↓
  YAML Conversion Rules
       ↓
  FOCUS Converter Engine
       ↓
  FOCUS-formatted Output (Parquet)
```

The converter is built in Python and uses a modular architecture:
- `focus_converter_base/` — core converter implementation
- `conversion_rules_export/` — exported provider rules in human-readable formats
- `progress/` — completion charts showing implementation status for each provider

### Design Priorities

1. **Scale handling** — process large billing files typical of enterprise cloud accounts
2. **Transparency** — conversion logic is comprehensible and specification-aligned
3. **Best-effort approach** — convert available data even when some FOCUS-compatible fields can't be mapped from the source
4. **Extensibility** — support additional providers through the modular YAML rule system

## Installation and Usage

Requirements: Python 3.9+

```bash
pip install focus_converter

# Convert AWS billing data
focus-converter convert \
  --provider aws \
  --data-path /path/to/aws/parquet/cur/ \
  --data-format parquet \
  --parquet-data-format dataset \
  --export-path /tmp/output/

# Convert Azure data
focus-converter convert \
  --provider azure \
  --data-path /path/to/azure/export/ \
  --data-format parquet \
  --export-path /tmp/output/
```

## Relationship to Native Provider Exports

As of 2025–2026, all four major cloud providers support **native FOCUS exports** — meaning you can get FOCUS-formatted data directly from the provider without using the converter. The converter remains useful for:

- Converting **historical** billing data predating native FOCUS support
- Working with providers or billing sources that don't yet support native FOCUS
- **Validating** native FOCUS exports by comparing them against converter output
- Understanding the **mapping logic** between native and FOCUS schemas (the YAML rules serve as documentation)

## Key Points

- MIT licensed, actively maintained, welcomes contributions
- Development setup requires Poetry and libmagic
- Conversion rules are auditable — you can inspect exactly how each native column maps to FOCUS
- The best-effort approach means output may have null FOCUS columns when the source data doesn't contain equivalent information
- The progress charts in the repo show which FOCUS columns are fully mapped for each provider

## Connections

- Related to: [[focus-validator]] — validate converter output for FOCUS compliance
- Related to: [[cloud-provider-support]] — native FOCUS exports that complement/replace the converter
- Related to: [[sample-data-and-sandbox]] — sample data for testing conversions
- Related to: [[columns-dimensions-metrics]] — the target schema the converter maps to
- See also: [[github-organization]]

## Sources

- [focus_converters Repository](https://github.com/finopsfoundation/focus_converters) — source code and documentation
- [FinOps FOCUS Converters for AWS, GCP, Azure & Oracle](https://blog.economize.cloud/finops-focus-converters/) — third-party walkthrough
- [FOCUS 1.0 GA Announcement](https://www.finops.org/insights/focus-1-0-available/) — converter launch context
