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

## 📄 License

Part of the Moto UI workspace. Distributed under the MIT License. See repository `LICENSE` for details.
