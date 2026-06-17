---
name: document
description: Generate Moto UI demos, MDX documentation, and registry updates for a component. Use this when documenting a new component or adding examples to an existing one.
---

# Document

Read `agents.md` (project root) and follow it strictly.

## Purpose

Generate Moto UI demos, MDX documentation, and registry updates from a single component input.

---

## Input

```sh
document <component-name>
```

- `<component-name>` — The component to document.

---

## Constraints

- No explanatory output — only produce the files
- Use tabs for indentation (actual tab characters, not spaces; tab width is **2**)
- Use double quotes only
- Never emit TODOs or placeholders
- Preserve alphabetical ordering in registries
- Follow existing project conventions

---

## Workflow

### 1. Analyze Component

Inspect `packages/react/src/components/<component-name>` and determine:
- Category
- Public API
- Props and types
- Subcomponents
- Panda CSS recipes

If Ark UI primitives are used, run `mcp_ark-ui_get_component_props` and `mcp_ark-ui_styling_guide`.

### 2. Generate Demos

Create demos under `apps/docs/src/demos/<component-name>/`:
- Always include `basic.tsx`
- Cover variants, sizes, states, accessibility, controlled/uncontrolled patterns, and compound composition
- Create an `index.ts` that exports all demos

### 3. Sync Registry

Update `apps/docs/src/demos/index.ts`:
- Add imports for the new demos
- Register the component namespace
- Preserve alphabetical ordering
- Prevent duplicates

### 4. Generate MDX Documentation

Create `apps/docs/content/docs/components/<category>/<component-name>.mdx` with:
- Frontmatter
- Overview
- Usage
- `<ComponentPreview />` references
- Feature sections
- Props API tables
- Accessibility notes
- Correct heading hierarchy

---

## Validation

Verify:
- Imports resolve correctly
- Exports are mapped correctly
- Formatting matches Biome rules
- Component is exported from `packages/react/src/index.ts`

---

## Conclusion

The task is done when:
- No type or linting errors
- Registry is updated
- MDX docs are created
- All demos are generated
- All files are formatted
- Component is exported from `packages/react/src/index.ts`
