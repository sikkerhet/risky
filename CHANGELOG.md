# Changelog

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
