# Elemnts UI

## Overview

Elemnts-ui is a monorepo-based UI component library built around:

* React
* Ark UI
* Panda CSS
* TypeScript
* Storybook
* Fumadocs

The system is designed around:

* Accessibility-first primitives
* Zero-runtime styling
* Strict type-safety
* Compound component APIs
* Design-token-driven theming
* Scalable package boundaries
* SSR-compatible rendering

---

## Monorepo Structure

### Applications

#### `/apps/docs`

Documentation website powered by Fumadocs.

Responsibilities:

* Component documentation
* Interactive demos
* Usage examples
* API documentation
* Design references

---

### Packages

#### `/packages/react`

React component implementations built on Ark UI primitives.

Responsibilities:

* Compound component APIs
* Context composition
* Accessibility preservation
* Variant handling
* Component exports
* Public library entrypoints

This package must remain framework-focused and should not contain design-token source definitions.

---

#### `/packages/core`

The core package provides the design system foundation consumed by other packages.

Responsibilities:

* Design tokens
* Semantic tokens
* Recipes
* Slot recipes
* Conditions
* Themes
* Colors
* Utility definitions
* Token mappings
* Panda configuration

This package defines the design system foundation consumed by other packages.

---


## Package Dependency Rules

### Allowed Dependencies

#### `react`

May depend on:

* `core`

Must not depend on:

* React
* Panda CSS
* Ark UI

---

### Dependency Constraints

* Circular dependencies are prohibited
* Cross-package internal imports are prohibited
* Packages must only consume public exports
* Relative imports across package boundaries are prohibited

---

## Design System Architecture

### Token Hierarchy

The design system follows a layered token architecture.

#### 1. Primitive Tokens

Raw foundational values.

Examples:

* Raw colors
* Raw spacing values
* Font sizes
* Radii
* Shadows

---

#### 2. Semantic Tokens

Contextual aliases derived from primitives.

Examples:

* `surface.1`
* `fg.primary`
* `stroke.primary`
* `accent.primary`

Semantic tokens must never directly expose implementation-specific color values.

---

#### 3. Component Tokens

Component-scoped token abstractions.

Examples:

* Button background
* Card shadow
* Dialog border

---

#### 4. Recipes & Slot Recipes

Recipes consume semantic and component tokens.

Flow:

```txt
colors → primitive tokens → semantic tokens → recipes → components
```

---

## Component Architecture

### Core Principles

Every component must:

* Preserve Ark UI accessibility guarantees
* Use zero-runtime styling
* Support controlled and uncontrolled state
* Be fully typed
* Be tree-shakeable
* Support SSR
* Avoid unnecessary runtime abstractions

---

### Component Anatomy

Multi-slot components must define:

* Anatomy
* Slot recipe
* Style context
* Context provider
* Root namespace export
* Typed subcomponents

---

### Compound Component Pattern

Components must expose declarative APIs using namespace composition.

Example:

```tsx
<Accordion>
	<Accordion.Item>
		<Accordion.ItemTrigger />
	</Accordion.Item>
</Accordion>
```

Use `Object.assign` to attach subcomponents to the root namespace.

---

### Ref Forwarding

All public components must support React ref forwarding.

Requirements:

* Use `forwardRef`
* Forward refs to the underlying DOM node
* Preserve generic typing
* Avoid ref type widening

---

### Display Names

Every component must define a `displayName`.

Example:

```ts
Button.displayName = "Button"
```

---

## Styling Architecture

### Zero Runtime CSS

All styling must be generated at build time.

Allowed:

* `defineRecipe`
* `defineSlotRecipe`
* Panda token references
* Panda conditions

Disallowed:

* Inline style objects
* Runtime CSS-in-JS libraries
* Arbitrary runtime style computation

---

### Token Usage

Always prefer token references.

Preferred:

```ts
bgColor: "bg.primary"
```

Disallowed:

```ts
bgColor: "#ffffff"
```

---

### Recipes

Recipes must be defined under:

```txt
/packages/core/src/registry/recipes
```

Registration must occur in:

```txt
/packages/core/src/registry/recipes/index.ts
```

---

---

### Slot Recipes

Slot recipes must be defined under:

```txt
/packages/core/src/registry/slot-recipes
```

Registration must occur in:

```txt
/packages/core/src/registry/slot-recipes/index.ts
```

---

### Variant Naming Conventions

Preferred variant names:

* `size`
* `variant`
* `orientation`

Avoid ambiguous variant names.

---

### Style Context

Multi-slot components must use:

```ts
createStyleContext(recipe)
```

Use:

* `withProvider`
* `withContext`

To bind slot styles across compound structures.

---

## TypeScript Standards

### Strict Type Safety

Requirements:

* Strict mode enabled
* No implicit any
* No unsafe casts
* No untyped object access

Disallowed:

* `any`
* `as unknown as`
* Non-null assertions unless justified

---

### Component Props

Use Ark UI's `Assign` helper.

Example:

```ts
export type ButtonProps = Assign<
	HTMLArkProps<"button">,
	HTMLStyledProps<"button"> & ButtonVariantProps
>
```

---

### Exported Types

All public subcomponents must export their prop types.

Example:

```ts
export type DialogContentProps = ComponentProps<typeof DialogContent>
```

---

## React Standards

### Controlled & Uncontrolled State

Components must correctly support both controlled and uncontrolled usage.

Requirements:

* Controlled props must have matching callbacks
* Controlled props must support default values
* APIs should follow Ark UI naming conventions

Examples:

* `open`
* `defaultOpen`
* `onOpenChange`

---

### Context Usage

Use react context only when necessary.

Requirements:

* Prevent unnecessary re-renders
* Memoize expensive context values
* Keep provider nesting minimal

---

### Import Ordering

Imports must remain consistently ordered.

Order:

1. React imports
2. Third-party libraries
3. Styled-system imports
4. Internal utilities
5. Local components
6. Relative imports

All imports must remain alphabetically sorted within groups.

---

## Accessibility Standards

Accessibility is mandatory.

Requirements:

* Preserve Ark UI accessibility behavior
* Preserve keyboard navigation
* Preserve ARIA attributes
* Support focus-visible states
* Meet WCAG AA contrast minimums
* Ensure screen reader compatibility

Every interactive component must:

* Support keyboard interaction
* Expose correct semantics
* Maintain focus management

---

## Performance Standards

Components must prioritize runtime efficiency.

Requirements:

* Avoid unnecessary renders
* Avoid expensive runtime computations
* Avoid module-scope side effects
* Preserve tree-shakeability
* Avoid oversized dependency chains

---

## SSR & RSC Compatibility

Components must remain SSR-safe.

Requirements:

* Avoid browser-only APIs during render
* Guard browser globals when required
* Minimize client-only boundaries
* Remain compatible with React Server Components where possible

---

## Testing Standards

Every component must include:

* Rendering tests
* Accessibility tests
* Keyboard interaction tests
* Variant coverage tests
* Controlled/uncontrolled state tests

Recommended tooling:

* Vitest
* Testing Library
* Playwright
* Storybook interaction testing

---

## Documentation Standards

### Demo Requirements

Every component must include:

* Basic demo
* Variant demo
* Controlled example
* Accessibility example where applicable

Demos must exist under:

```txt
/apps/docs/src/demos/<component-name>
```

Required:

```txt
basic.tsx
```

---

### Documentation Requirements

Component documentation must include:

* Overview
* Anatomy
* Installation
* Usage examples
* Variants
* Accessibility notes
* API tables

Documentation location:

```txt
/apps/docs/content/docs/components/<category>/<component-name>.mdx
```

#### Heading Hierarchy Rules

All MDX documentation must follow strict heading hierarchy rules:

1. **No H1 in content** — The page title is the only H1 (from frontmatter `title`). No literal `# ` headings.
2. **No skipped levels** — Don't skip heading levels (e.g., `##` → `####` without `###` in between).
3. **Top-level sections are `##`** — Section headings directly under the H1 must be `##`, not `###`.
4. **Subsections are `###`** — Subsections within a `##` section use `###`.
5. **Preserve code blocks** — Never modify content inside code blocks or inline code when adjusting heading levels.

If you encounter an existing file that violates these rules (e.g., uses `###` for top-level sections), promote headings to fix the hierarchy: `###` → `##` and `####` → `###` (outside of code blocks and frontmatter).

---

## Storybook Standards

Stories must:

* Mirror public APIs
* Remain synchronized with documentation
* Cover variants and states
* Avoid duplicated demo logic

Stories must exist under:

```txt
/packages/storybook/src/stories/<component-name>
```

---

## Workflow

### 1. Component Analysis

* Select the Ark UI primitive
* Inspect upstream types
* Inspect accessibility behavior
* Inspect composition requirements

---

### 2. Define Recipes

Create:

```txt
/packages/preset-base/src/theme/slot-recipes/<component>.ts
```

Register inside:

```txt
/packages/preset-base/src/theme/slot-recipes/index.ts
```

---

### 3. Implement React Components

Create component implementation under:

```txt
/packages/react/src/components/<component>
```

Requirements:

* Compound API
* Typed exports
* Ref forwarding
* Style context integration
* Variant splitting

---

### 4. Register Exports

Update:

```txt
/packages/react/src/components/index.ts
/packages/react/src/index.ts
```

Requirements:

* Alphabetical ordering
* Public exports only

---

### 5. Create Demos

Create demos under:

```txt
/apps/docs/src/demos/<component>
```

Register in:

```txt
/apps/docs/src/demos/index.ts
```

Maintain alphabetical ordering.

---

### 6. Write Documentation

Create MDX documentation under:

```txt
/apps/docs/content/docs/components/<category>/<component>.mdx
```

---

### 7. Create Storybook Stories

Add stories under:

```txt
/packages/storybook/src/stories/<component>
```

---

### 8. Validation

Before completion:

* Run typecheck
* Run lint
* Run tests
* Run Storybook verification
* Ensure formatting consistency
* Verify accessibility behavior

---

## Constraints

### General Constraints

Disallowed:

* `any`
* Placeholder implementations
* `TODO` comments
* Dead exports
* Circular dependencies
* Unused code
* Runtime styling systems

---

### Formatting Constraints

Requirements:

* Tabs for indentation (actual tab characters, not spaces; tab width is **2** — no 4-space indentation)
* Double quotes for strings
* Consistent import ordering
* Alphabetical export ordering

---

### Dependency Constraints

Do not:

* Introduce new dependencies without approval
* Introduce overlapping styling systems
* Duplicate utilities already existing in the monorepo

---

## Operating Rules

Before making changes:

* Read neighboring files
* Inspect existing patterns
* Preserve architecture consistency
* Prefer minimal diffs

When uncertain:

* Search the codebase for similar implementations
* Ask for clarification before introducing new patterns

Never:

* Introduce architectural drift
* Ignore existing conventions
* Bypass type safety
* Modify generated files manually

---

## Definition of Done

A task is considered complete when:

* No type errors
* No runtime errors
* No linting errors
* Formatting passes
* Accessibility requirements pass
* Tests pass
* Stories render correctly
* Documentation is updated
* Public exports are registered
* No dead code remains
