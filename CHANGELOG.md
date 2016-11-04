# Change Log
All notable changes to this project will be documented in this file.
This project adheres (well, maybe not quite) to [Semantic Versioning](http://semver.org/).

## [unreleased]

### Added
- Added examples with requirejs implementation

### Changed
- Changed the module loading to UMD

### Fixed
- Fixed an issue with duplicate scipt props in packege.json preventing building
- Fixed an issue where few slices offsets labels in the worng direction


## [0.1.0] - 2016-05-30
### Added
- Added README with initial API definition
- Added submodule 'base' with base graph
- Added initial 'pie-chart' code for testing
- Added build script
- Added aliasify and shimming of base-chart
- Added proper creation of a pie chart from data

### Changed
- Updated README
- Simplify building by removing dependencies in build.sh
- Remove dependencies and inline all graph menthods

### Removed
- Removed submodule 'base' with base graph


[//]: ##############################################
<!---
[//]: # (Legend)
[Added]:        <> (for new features.)
[Changed]:      <> (for changes in existing functionality.)
[Deprecated]:   <> (for once-stable features removed in upcoming releases.)
[Removed]:      <> (for deprecated features removed in this release.)
[Fixed]:        <> (for any bug fixes.)
[Security]:     <> (to invite users to upgrade in case of vulnerabilities.)
--->