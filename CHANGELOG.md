# Changelog

## [2.5.0] - 2026-07-17

### Added

- Added baseline templates for suppliers and third parties, OT/ICS, and critical services.
- Added analysis duplication with fresh analysis, risk and comment IDs.
- Added import previews showing source descriptions and sample risks.

### Changed

- Improved the analysis import flow with search, filters, source badges, clearer Add/Replace choices and localized baseline names and descriptions.
- Added visible save states for saving, saved and failed saves.
- Improved modal accessibility with Escape and overlay closing, focus handling and accessible close buttons.
- Updated the help and README documentation for the expanded baseline library.

### Validation

- Validated 15 baseline files and 123 risks, including unique IDs and scoring.
- JavaScript and inline HTML scripts pass syntax checks.
- `git diff --check` passes.

## [2.4.1] - 2026-07-17

### Changed

- Refined Excel exports to resemble the PDF report more closely.
- Added report headers and metadata to the risks and comments sheets.
- Added consistent print settings, margins, hidden gridlines and frozen report headers across worksheets.
- Improved row striping, borders, text wrapping and automatic row heights for long risk descriptions.

### Validation

- Added a workbook-layout smoke test covering sheet structure, formulas and report headers.

## [2.4.0] - 2026-07-17

### Added

- Improved Excel exports with styled worksheets, filters, frozen headers, wrapped text and automatic row heights.
- Added recalculating Excel formulas for consequence, risk level and risk category.
- Added globally unique risk-bank IDs with `legacyId` compatibility metadata.

### Changed

- Reused the same Excel workbook builder for editor exports and overview ZIP exports.
- Updated risk-bank translations and retained established English security and technology terms where appropriate.
- Updated embedded risk-bank data and documentation to match the source banks.

### Fixed

- Fixed the overview ZIP export failure caused by an undefined date variable.
- Fixed missing comment timestamps in exported documents.
- Improved resilience when saved browser data or custom risk-bank data is malformed.

### Validation

- JavaScript and inline HTML scripts pass syntax checks.
- Risk-bank JSON files pass parsing and global-ID validation.
- Existing analysis risk IDs remain unchanged during import normalization.
