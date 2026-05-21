# agents.md

## Project Overview
This is a ui component library monorepo built with:
- ark ui(accessible unstyled components)
- pandacss(css engine with zero runtime)
- react
- storybook
- fumadocs

## Structure

- **/packages/storybook**: Storybook
- **/apps/docs**: Documentation website
- **/packages/react**: React components
- **/packages/styled-system**: Pandacss styled system
- **/packages/colors**: Mapped OKLCH Colors based on tailwindcss v4 colors
- **/packages/preset-base**: Base preset for the ui library based on pandacss

## Workflow

1. **Component Selection & Analysis**: Identify or choose an Ark UI primitive for the target component. Inspect its upstream type definitions and styling requirements.
2. **Panda CSS Styling**: Define the component's styling structure in `packages/preset-base/src/theme/slot-recipes/<component-name>.ts` using Panda CSS's `defineSlotRecipe`. Register it inside `packages/preset-base/src/theme/slot-recipes/index.ts`.
3. **React Implementation**: Implement the React component under `packages/react/src/components/<component-name>` using Ark UI primitives and styled via `createStyleContext`. Wrap components using the Compound Component pattern.
4. **Alphabetical Registration**: Export the newly created component from `packages/react/src/components/index.ts` and `packages/react/src/index.ts`, keeping all exports strictly alphabetically sorted.
5. **Interactive Demos**: Create visual demo templates under `apps/docs/src/demos/<component-name>/` (including a required `basic.tsx` template). Register these demos in `apps/docs/src/demos/index.ts` maintaining strict alphabetical sorting.
6. **MDX Documentation**: Write user-facing documentation in `apps/docs/content/docs/components/<category>/<component-name>.mdx`, detailing the component structure, previews, and interactive API tables.
7. **Storybook Sync**: Sync the generated component with its corresponding Storybook CSF Next stories inside `packages/storybook/src/stories/<component-name>/` using the `components-sync` skill.

## Coding Standards

### Typescript
- Enforce strict type-safety across all configurations and components. Never use the `any` type under any circumstances.
- Utilize Ark UI's `Assign` helper to combine native HTML, Panda CSS, and component variant properties:
  ```typescript
  type ComponentProps = Assign<HTMLArkProps<"div">, HTMLStyledProps<"div"> & ComponentRecipeVariantProps>;
  ```
- Export clean type definitions for all individual sub-components (e.g., `export type AccordionItemProps = ComponentProps<typeof AccordionItem>;`).

### React
- **Compound Pattern**: Group subcomponents on the root namespace using `Object.assign` to provide developers with declarative control (e.g. `Accordion.Root`, `Accordion.Item`, `Accordion.ItemTrigger`).
- **Ref Forwarding**: Wrap components using `forwardRef` to ensure that standard React ref forwarding works cleanly down to the underlying DOM elements.
- Display Name requirement: Every component must define a clear `displayName` property corresponding to its exported name.
- Maintain a clean and sorted import order: standard React core imports, third-party libraries (e.g. Ark UI), local styled-system layers, and lastly local components/hooks/utils.

### Styling
- **Zero Runtime CSS**: All component styling must be defined as build-time slot recipes (`defineSlotRecipe`) or recipes (`defineRecipe`) using Panda CSS. Do not use ad-hoc inline styling utilities.
- **Panda CSS Tokens**: Prefer token reference values (e.g., `{colors.bg.secondary}`, `{spacing.4}`, `{radii.4}`) in recipes instead of static/hardcoded pixel or color codes.
- **Style Context**: Leverage `createStyleContext(recipe)` to bind multi-slot styling cleanly across compound component structures via `withProvider` and `withContext`.

### State
- **Context Hook Pattern**: Use React context (`createContext` and `useContext`) to share state/variant properties between parent layout providers and nested subcomponents (e.g., `useButtonGroupContext`).
- **Variant Props Splitting**: Utilize `recipe.splitVariantProps(props)` to isolate layout/styling variants from target DOM properties before compiling elements.
- Implement both controlled and uncontrolled states correctly, honoring standard UI expectations.

## Contraints
- Never use any
- Code Formatting: Maintain tabs for code indentation and double quotes for string values in all JavaScript, TypeScript, and JSX/TSX files.
- No `TODO` comments or empty placeholders allowed within source code.
- Alphabetical Order: Maintain alphabetical ordering in exports, imports, and registry listings.
- No new external styling or layout libraries unless authorized.

## Operating rules
Before making any changes:
- Read neighboring and related files
- Match existing patterns and conventions
- Prefer minimal diffs

When uncertain:
- Do not hesitate to ask for clarification
- Search existing codebase for similar patterns

Never: 
- Make changes without consulting the codebase first
- Introduce new dependencies without authorization

## Conclusion or Defination of Done

A task is considered done when:
- No type errors
- No runtime errors
- No linting errors
- All code has been formatted
