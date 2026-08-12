# Changelog

All notable changes to this project will be documented in this file.

The project adheres to [Semantic Versioning](https://semver.org).

## [Unreleased]

### Added
- Native support for importing and displaying GIS PDF (GeoPDF) documents.
- MP export functionality for easy sharing and exporting of map data.
- S Pen support for high-precision drawing, tapping, and map interaction.
- Multiple new tools and methods for creating and editing polygons and lines (e.g., point-by-point, freehand, and streaming).
- Cloud backup integration for user projects.
- Dark mode support for all map editing screens.

### Changed
- Upgraded the offline caching engine for faster tile loading.
### Fixed
- Fixed r8.b.M Crash issue 
## [v1.3.0] - 2026-08-01

### Added
- CAD-like magnetic snapping engine for precise point and polygon alignment.
- Calibration tool for paper GeoPDF blueprints to use offline.
- Support for mandatory photo capture in custom forms.

### Changed
- Optimized vector rendering to improve map loading speeds by 40%.

### Fixed
- Resolved app crash caused by rendering excessively large MBTiles.
- Corrected alignment issues when cutting holes in polygons.

## [v1.2.0] - 2026-05-14

### Added
- Advanced Polygon Creation: Ability to draw complex boundaries and cut holes.
- Custom forms support with dynamic attributes and dropdown lists.

### Changed
- Improved GPS polling frequency for smoother location tracking.

### Fixed
- Patched memory leak occurring during large batch photo uploads.
- Fixed typo in the project setup validation error message.

## [v1.1.0] - 2026-03-20

### Added
- Support for downloading and viewing MBTiles entirely offline.
- Ability to export captured point and polygon data to GeoJSON.

### Fixed
- Fixed an issue where pins would not drop accurately at high zoom levels.
- Resolved UI glitch in the main project dashboard.

## [v1.0.0] - 2026-01-10

### Added
- Initial public release of MapCraft GIS application.
- Project creation and basic map UI.
- Core feature: Dropping pins and recording basic coordinates.
