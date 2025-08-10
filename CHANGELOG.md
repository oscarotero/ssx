# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/)
and this project adheres to [Semantic Versioning](https://semver.org/).

## [0.1.12] - 2025-08-10
### Fixed
- Better errors on invalid attributes or component type.

## [0.1.11] - 2025-07-19
### Added
- Expose `JSX.Component`.

### Fixed
- Updated types for HTML and CSS.
- Changed the `renderComponent` signature to use the `unknown` type as first argument [#2].

## [0.1.10] - 2025-05-14
### Added
- New `await <Component />.toString()` method to render the component.
- Example for Node.js/Bun

### Fixed
- Import the types with `import type`.

## [0.1.9] - 2025-05-01
### Fixed
- Error rendering invalid components.
- Updated HTML & CSS types.

## [0.1.8] - 2025-03-27
### Added
- Types for SVG elements

### Fixed
- Performance: removed unnecessary regular expressions.
- Updated HTML & CSS types

## [0.1.7] - 2025-03-21
### Fixed
- Render errors when the content is `false`.
- Improved types.

## [0.1.6] - 2025-03-06
### Fixed
- Alias `className` and `htmlFor` to `class` and `for` attributes.

## [0.1.5] - 2025-01-29
### Fixed
- Fragment rendering.

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

[#2]: https://github.com/oscarotero/ssx/issues/2

[0.1.12]: https://github.com/oscarotero/ssx/compare/v0.1.11...v0.1.12
[0.1.11]: https://github.com/oscarotero/ssx/compare/v0.1.10...v0.1.11
[0.1.10]: https://github.com/oscarotero/ssx/compare/v0.1.9...v0.1.10
[0.1.9]: https://github.com/oscarotero/ssx/compare/v0.1.8...v0.1.9
[0.1.8]: https://github.com/oscarotero/ssx/compare/v0.1.7...v0.1.8
[0.1.7]: https://github.com/oscarotero/ssx/compare/v0.1.6...v0.1.7
[0.1.6]: https://github.com/oscarotero/ssx/compare/v0.1.5...v0.1.6
[0.1.5]: https://github.com/oscarotero/ssx/compare/v0.1.4...v0.1.5
[0.1.4]: https://github.com/oscarotero/ssx/compare/v0.1.3...v0.1.4
[0.1.3]: https://github.com/oscarotero/ssx/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/oscarotero/ssx/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/oscarotero/ssx/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/oscarotero/ssx/releases/tag/v0.1.0
