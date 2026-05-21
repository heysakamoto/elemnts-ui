# Storybook CSF Sync

## Purpose
Sync Storybook CSF Next stories with demos and MDX documentation for a component.

Ensure:
- demo parity
- valid component props
- accurate MDX-derived descriptions
- consistent Storybook structure

---

## Scope
Target component: `$1`

---

## Sources
- Runtime demos: `apps/docs/src/demos/$1`
- Component source: `packages/react/src/components/$1`
- MDX docs: `apps/docs/content/docs/**/$1.mdx`
- Output: `packages/storybook/src/stories/$1`

---

## Constraints
- Use CSF Next (Storybook 10+) only
- No legacy Storybook APIs
- Maintain 1:1 parity with demo variants
- Validate all story args against TypeScript props
- Use MDX as the only source of descriptions
- Fail on missing or inconsistent documentation

---

## Structure
```txt
packages/storybook/src/stories/$1/
├── stories.tsx
├── basic.tsx
├── controlled.tsx
└── ...
