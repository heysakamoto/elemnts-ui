# @moto-ui/react

## 0.0.8

### Patch Changes

- - Add Table component with variants, sizes, pinned headers, alternating rows, interactive rows, column dividers, captions, and footers
  - Add EmptyState component with customizable indicator, title, description, and action
  - Add invalid state styles (destructive outline) to Input, Textarea, and InputGroup
  - Remove global invalid state styles
  - Refactor font-size tokens in Input, Textarea, and InputGroup to direct design token references
  - Improve InputGroup layout with flex grow/shrink properties
  - Migrate agent prompt files to .agents/skills directory
  - Update documentation meta files and changelog
  - @moto-ui/styled-system@0.0.8

## 0.0.7

### Patch Changes

- - Add `Frame` component for rendering content inside an isolated iframe with full style and DOM isolation
  - Fix `measureElement` callback type in `VirtualList` to remove `undefined` from its parameter type
  - @moto-ui/styled-system@0.0.7

## 0.0.6

### Patch Changes

- Refactor the border system across preset-base components to use a consistent
  border style
- Fix avatar recipe with invalid property name `objectPosiion`
- Remove redundant splitter recipe colorPalette
- Clean up extract.ts recipe variant combinations.

  - @moto-ui/styled-system@0.0.6

## 0.0.5

### Patch Changes

- refactor: remove onHidden variant and rework focus
  - Remove the `onHidden` visual variant (hide/disable) from the button
    recipe and clean up corresponding extract entries
  - Replace `shadow`-based focus indicators with `outline` for better
    accessibility and consistency
  - Add `xs` breakpoint (386px) to the preset theme
  - Clean up docs config by removing custom page schema
  - Fix sidebar node key collision by appending the array index
  - @moto-ui/styled-system@0.0.5

## 0.0.4

### Patch Changes

- Add 5+ new components List, Show, e.t.c
  - @moto-ui/styled-system@0.0.4

## 0.0.3

### Patch Changes

- b15327c: Add Stat, For, DataList and VirtualList components
  - @moto-ui/styled-system@0.0.3

## 0.0.2

### Patch Changes

- ae40709: Update setup instructions in @moto-ui/react package README with complete step-by-step Panda CSS
- Updated dependencies [ae40709]
  - @moto-ui/styled-system@0.0.2

## 0.0.1

### Patch Changes

- 3c86717: Initial release of moto-ui component library
- Updated dependencies [3c86717]
  - @moto-ui/styled-system@0.0.1
