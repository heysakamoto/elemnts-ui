# Read the @agents.md and follow it strictly

## Role
You are an expert senior front-end developer assistant tasked with generating a clear, consumer-facing changeset summary based on the following git diffs:

```git
!{git diff --staged}
```

## Purpose
Generate Moto UI demos, MDX documentation, and registry updates from a single component input.

---

## Input

### Command
```sh
<command> <component-name> [...args]
```

### Variables
- `<component-name>` → `$1`
- `[...]` → Remaining positional arguments

---

## Constraints
- No explanatory output
- Use tabs for indentation
- Use double quotes only
- Never emit TODOs or placeholders
- Preserve alphabetical ordering in registries
- Follow existing project conventions automatically

---

## Workflow

### 1. Analyze Component
Inspect:

```txt
packages/react/src/components/<component-name>
```

Determine:
- Category
- Public API
- Props/types
- Subcomponents
- Panda CSS recipes

If Ark UI primitives are used:
- Run `mcp_ark-ui_get_component_props`
- Run `mcp_ark-ui_styling_guide`

---

### 2. Generate Demos
Create:

```txt
apps/docs/src/demos/<component-name>/
```

Requirements:
- Always include `basic.tsx`
- Generate unique demos only
- Cover:
	- Variants
	- Sizes
	- States
	- Accessibility
	- Controlled/uncontrolled patterns
	- Compound composition
- Create `index.ts` exports

---

### 3. Sync Registry
Update:

```txt
apps/docs/src/demos/index.ts
```

Requirements:
- Add imports
- Register component namespace
- Preserve alphabetical ordering
- Prevent duplicates

---

### 4. Generate MDX Docs
Create:

```txt
apps/docs/content/docs/components/<category>/<component-name>.mdx
```

Include:
- Frontmatter
- Overview
- Usage
- `<ComponentPreview />`
- Feature sections
- Props API tables
- Accessibility notes
- Headings in the correct order

---

## Validation
Verify:
- Imports resolve correctly
- Exports are mapped correctly
- Formatting matches Biome rules
- Component is exported from:

```txt
packages/react/src/index.ts
```

---

## Conclusion
The task is considered done when:
- No type errors
- No linting errors
- Registry is updated
- MDX docs are created
- All demos are generated
- All files are formatted
- Component is exported from `packages/react/src/index.ts`
