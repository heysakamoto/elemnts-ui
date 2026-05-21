# 🧩 @moto-ui/styled-system

**@moto-ui/styled-system** is the compiled styling engine and static CSS package for Moto UI. It serves as the bridge between design token definitions in `@moto-ui/preset-base` and the components in `@moto-ui/react`.

It utilizes **Panda CSS** to parse preset configurations and output optimized React factory wrappers (`styled.div`, `styled.button`), utility classes, and TypeScript type declarations.

---

## ✨ Features

- **⚡ Zero Runtime Styling** — Generates class names, media queries, and component styles compiled down to static CSS at build-time.
- **🏷️ Fully Type-Safe Styling** — Generates fully-typed props allowing developers to access properties (like `color`, `px`, `shadow`) directly in JSX with full autocompletion.
- **🎨 Static Compilation** — Combines keyframes, custom utility styles, and recipe variants into a single static file: `dist/styles.css`.
- **🛠️ Flexible Exports** — Exposes subpaths targeting specific modules, including:
  - `@moto-ui/styled-system/css` — Shorthand class compiler helpers.
  - `@moto-ui/styled-system/tokens` — Programmatic theme token access.
  - `@moto-ui/styled-system/types` — TypeScript configuration types.
  - `@moto-ui/styled-system/recipes` — Component style recipe hooks.
  - `@moto-ui/styled-system/jsx` — Styled components wrappers.

---

## 📦 Role in the Monorepo

```mermaid
graph TD
    A[@moto-ui/colors] -->|Imports| B[@moto-ui/preset-base]
    B -->|Presets Configuration| C[@moto-ui/styled-system]
    C -->|Styles & Types| D[@moto-ui/react]
    D -->|Components| E[apps/docs & Apps]
```

1. **Preset Input**: Imports design configurations from `@moto-ui/preset-base`.
2. **styled-system compilation**: Compiles tokens, keyframes, and recipes into `dist/`.
3. **React consumption**: `@moto-ui/react` consumes `@moto-ui/styled-system/jsx` and recipes to build styled components.

---

## 🚀 Compilation & Regeneration

Whenever presets, token values, or recipes inside `@moto-ui/preset-base` are modified, you must regenerate the styling system package:

```bash
# Build the styled system from the root workspace
pnpm --filter @moto-ui/styled-system build
```

This will trigger `panda` to generate files inside `dist/`.

---

## 🛠️ Development & Scripts

Inside the `packages/styled-system` directory:

- **Build**: `pnpm run build` — Compiles styled tokens, CSS files, and TS definitions into the `dist/` directory.
- **Develop**: `pnpm run dev` — Runs `panda --watch` to monitor and compile styled declarations automatically.
- **Clean**: `pnpm run clean` — Removes built files.

---

## 📄 License

Part of the Moto UI workspace. Distributed under the MIT License. See root `LICENSE` for details.
