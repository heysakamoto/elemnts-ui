---
name: sync
description: Sync Storybook CSF Next stories with demos and MDX documentation for a component. Use this when demos, docs, or stories are out of sync.
---

# Sync

Read `agents.md` (project root) and follow it strictly.

## Purpose

Sync Storybook CSF Next stories with demos and MDX documentation for a component. Ensures demo parity, valid component props, accurate MDX-derived descriptions, and consistent Storybook structure.

---

## Input

```sh
sync <component-name>
```

---

## Sources

| Source | Path |
|--------|------|
| Runtime demos | `apps/docs/src/demos/<component-name>` |
| Component source | `packages/react/src/components/<component-name>` |
| MDX docs | `apps/docs/content/docs/**/<component-name>.mdx` |
| Stories output | `packages/storybook/src/stories/<component-name>` |

---

## Structure

Stories are created under:

```txt
packages/storybook/src/stories/<component-name>/
├── stories.tsx
├── basic.tsx
├── controlled.tsx
└── ...
```

---

## Constraints

- Use CSF Next (Storybook 10+) only
- No legacy Storybook APIs
- Maintain 1:1 parity with demo variants
- Validate all story args against TypeScript props
- Use MDX as the only source of descriptions
- Fail on missing or inconsistent documentation

---

## Workflow

### 1. Read MDX Docs

Open `apps/docs/content/docs/**/<component-name>.mdx` and extract:
- Overview
- Usage examples
- Feature sections
- Accessibility notes
- API and prop descriptions

### 2. Read Demo Files

Open `apps/docs/src/demos/<component-name>/` and catalog every `.tsx` file:
- Demo name
- Props used
- Variants shown

### 3. Read Component Source

Open `packages/react/src/components/<component-name>/` and inspect:
- Public API surface
- TypeScript prop types
- Subcomponents
- Compound structure

### 4. Validate Props

Cross-reference demo args against exported component types. Flag mismatches — do not silently correct.

### 5. Generate Stories

Write stories under `packages/storybook/src/stories/<component-name>/`:
- `stories.tsx` — Meta config and story definitions using CSF Next
- One file per distinct demo variant (e.g., `basic.tsx`, `controlled.tsx`)

Requirements:
- Use `import type { Meta, StoryObj } from "@storybook/react"`
- Use `const meta = { ... } satisfies Meta<typeof Component>`
- Use `export const StoryName: StoryObj<typeof meta> = { ... }`
- Each story must include a `parameters.docs.source.code` or render function matching the demo
- Descriptions must come from MDX content only
- All props must match the component's TypeScript types

---

## Validation

Verify:
- Stories render without type errors
- All demo variants have a corresponding story
- Props match TypeScript types exactly
- Descriptions match MDX content
- Files are formatted per project conventions

---

## Conclusion

The task is done when:
- Stories mirror all demo variants
- No type errors in generated stories
- All story args are valid component props
- MDX is the sole source of descriptions
- Storybook structure is consistent with project conventions
