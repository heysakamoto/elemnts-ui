# Contributing to Moto UI

First off, thank you for taking the time to contribute to Moto UI! 🎉

Moto UI is a high-performance, accessible React component library built on the foundation of [Ark UI](https://ark-ui.com/) and powered by [Panda CSS](https://panda-css.com/). We appreciate your interest in making it even better.

This document provides a set of guidelines and standards for contributing to this repository. Following these instructions helps us review and merge your code faster.

---

## 📂 Repository Architecture

Moto UI is structured as a monorepo using **pnpm workspaces**:

- **[packages/react](packages/react)**: Core React components, built using Ark UI primitives.
- **[packages/preset-base](packages/preset-base)**: The Panda CSS base preset containing design tokens, recipes, and slot recipes.
- **[packages/styled-system](packages/styled-system)**: Generated Panda CSS styling system.
- **[packages/colors](packages/colors)**: Tailored OKLCH colors, mapped from Tailwind CSS v4 color scales.
- **[packages/storybook](packages/storybook)**: Storybook for component isolation, testing, and demos.
- **[apps/docs](apps/docs)**: Documentation website built with TanStack Start, TanStack Router, and Fumadocs.

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have the following installed on your machine:
- **Node.js** (LTS version recommended)
- **pnpm** (Package Manager: `pnpm@10.33.0` is recommended, configured via `packageManager` in `package.json`)

### 2. Setup
Clone the repository and install the dependencies:
```bash
git clone https://github.com/your-username/moto-ui.git
cd moto-ui
pnpm install
```

### 3. Development Scripts
Run these commands from the repository root to start development servers:

| Command | Action |
|---|---|
| `pnpm --filter @moto-ui/react dev` | Starts compilation of the React package with watch mode |
| `pnpm --filter @moto-ui/storybook dev` | Starts Storybook local server (usually at `http://localhost:6006`) |
| `pnpm run --filter @moto-ui/docs dev` | Starts the docs website development server |
| `pnpm run biome:check` | Run linter and formatter checks using Biome |
| `pnpm run biome:fix` | Automatically apply linter and formatter fixes |

---

## 🛠️ Component Development Workflow

When implementing or modifying components, please adhere strictly to this 7-step workflow:

### Step 1: Component Selection & Analysis
- Identify or choose an **Ark UI** primitive for the target component.
- Inspect its upstream type definitions and styling requirements.

### Step 2: Panda CSS Styling
- Define the component's styling structure in [packages/preset-base/src/theme/slot-recipes/](packages/preset-base/src/theme/slot-recipes) (e.g. `<component-name>.ts`) using Panda CSS's `defineSlotRecipe`.
- Register the new recipe inside [packages/preset-base/src/theme/slot-recipes/index.ts](packages/preset-base/src/theme/slot-recipes/index.ts).

### Step 3: React Implementation
- Implement the React component under [packages/react/src/components/](packages/react/src/components) (e.g. `<component-name>`) using Ark UI primitives.
- Style the components using `createStyleContext(recipe)` with `withProvider` and `withContext` to cleanly propagate styles.
- Adhere to the **Compound Component** pattern (e.g., `Accordion.Root`, `Accordion.Item`, `Accordion.ItemTrigger`).

### Step 4: Alphabetical Registration
- Export the newly created component from [packages/react/src/components/index.ts](packages/react/src/components/index.ts) and [packages/react/src/index.ts](packages/react/src/index.ts).
- **CRITICAL**: Maintain strict alphabetical sorting for all imports and exports in these files.

### Step 5: Interactive Demos
- Create visual demo templates under [apps/docs/src/demos/](apps/docs/src/demos) (including a required `basic.tsx` template under `<component-name>`).
- Register these demos in [apps/docs/src/demos/index.ts](apps/docs/src/demos/index.ts) maintaining strict alphabetical sorting.

### Step 6: MDX Documentation
- Write user-facing documentation in [apps/docs/content/docs/components/](apps/docs/content/docs/components) (e.g. `<category>/<component-name>.mdx`).
- Detail the component structure, code previews, and interactive API tables.

### Step 7: Storybook Sync
- Sync the generated component with its corresponding Storybook CSF Next stories inside [packages/storybook/src/stories/](packages/storybook/src/stories) (e.g. `<component-name>`) using the `components-sync` skill.

---

## 🎨 Coding Standards

### 1. TypeScript & Type Safety
- **Strict type safety** is enforced. Never use the `any` type under any circumstances.
- Combine native HTML, Panda CSS, and component variant properties using the Ark UI `Assign` helper:
  ```typescript
  type ComponentProps = Assign<HTMLArkProps<"div">, HTMLStyledProps<"div"> & ComponentRecipeVariantProps>;
  ```
- Export clean type definitions for all individual sub-components (e.g., `export type AccordionItemProps = ComponentProps<typeof AccordionItem>;`).

### 2. React Components
- **Compound Pattern**: Group subcomponents on the root namespace using `Object.assign` to expose declarative compound APIs.
- **Ref Forwarding**: Wrap every sub-component using `forwardRef` to ensure that standard React refs work cleanly down to the underlying DOM elements.
- **Display Name**: Every component must define a clear `displayName` property corresponding to its exported name.
- **Import Ordering**: Keep imports clean and sorted: standard React imports, third-party libraries (e.g., Ark UI), local styled-system layers, and local components/hooks/utils.

### 3. Zero-Runtime Styling
- All styling must be defined as build-time slot recipes (`defineSlotRecipe`) or recipes (`defineRecipe`) using Panda CSS. Do not use ad-hoc inline styling utilities.
- Use Panda CSS tokens (e.g., `{colors.bg.secondary}`, `{spacing.4}`, `{radii.4}`) in recipes instead of hardcoded hex values or pixel values.
- Leverage `createStyleContext(recipe)` to bind multi-slot styling cleanly across compound component structures.

### 4. State Management
- Use React Context (`createContext` and `useContext`) to share state/variant properties between parent layout providers and nested subcomponents.
- Use `recipe.splitVariantProps(props)` to isolate layout/styling variants from target DOM properties before compiling elements.
- Ensure that both controlled and uncontrolled states are supported and behave correctly.

---

## ⚠️ Repository Constraints & Guidelines

> [!WARNING]
> Please adhere to the following repository constraints. Pull requests that violate these guidelines will be rejected.

- **No `any` Type**: The use of `any` is strictly prohibited.
- **Code Formatting**: Maintain tabs for code indentation and double quotes for string values in all JavaScript, TypeScript, and JSX/TSX files. This is enforced by Biome configuration.
- **No Placeholders**: Do not check in `TODO` comments or empty code placeholders in source code.
- **Alphabetical Ordering**: Always maintain alphabetical order in exports, imports, and registry listings.
- **No Unauthorized Dependencies**: Do not introduce any new external styling, layout, or utility libraries unless explicitly authorized.

---

## 📦 Submitting Changes

### 1. Creating a Branch
Create a branch with a descriptive name, prefixing it with the type of work (e.g., `feature/`, `bugfix/`, `docs/`):
```bash
git checkout -b feature/amazing-new-component
```

### 2. Formatting & Linting
Ensure Biome checks pass before committing:
```bash
pnpm run biome:check
pnpm run biome:fix
```

### 3. Versioning & Changesets
If you are changing packages (e.g., `@moto-ui/react` or `@moto-ui/preset-base`) in a way that requires a version bump, you **must** generate a changeset:
```bash
pnpm changeset
```
Follow the interactive prompt to:
1. Select the packages to bump.
2. Select the version bump type (major, minor, or patch).
3. Provide a brief explanation of the change.

Commit the generated `.changeset/*.md` file along with your codebase changes.

### 4. Submitting a Pull Request
- Push your branch to your fork or the repository.
- Open a Pull Request against the main branch.
- Complete the PR description, detailing what changes were made, why, and the process.

---

## ✅ Definition of Done
A contribution is considered complete when:
- [ ] TypeScript compiles cleanly with zero type errors.
- [ ] No runtime errors are observed.
- [ ] Biome checks (`pnpm run biome:check`) pass successfully with no warnings or errors.
- [ ] Storybook stories are added or updated to demonstrate the changes.
- [ ] Documentation page or demos are created/updated to document new features.
