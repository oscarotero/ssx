# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/)
and this project adheres to [Semantic Versioning](https://semver.org/).

## [0.1.4] - 2025-01-25
### Added
- CSS types.
- Benchmark to compare with React and Preact.

### Changed
- Make `ssxElement` property not enumerable.

## [0.1.3] - 2025-01-06
### Added
- Export `renderComponent` function.
- Publish on NPM.
- Symbol to check if an object is a SSX element.

### Fixed
- Void elements.
- Support for non `precompile` context
- `children` attribute for custom components
- Fragment rendering.

## [0.1.2] - 2024-12-05
### Fixed
- Allow types `string | number` for numeric attributes (like `tabindex`), instead of only `string`.

## [0.1.1] - 2024-07-23
### Added
- Support for `dangerouslySetInnerHTML` for compatibility with other JSX libraries.

### Fixed
- Bug rendering inner components and some async properties.

## [0.1.0] - 2024-07-20
First version

[0.1.4]: https://github.com/oscarotero/ssx/compare/v0.1.3...v0.1.4
[0.1.3]: https://github.com/oscarotero/ssx/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/oscarotero/ssx/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/oscarotero/ssx/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/oscarotero/ssx/releases/tag/v0.1.0
