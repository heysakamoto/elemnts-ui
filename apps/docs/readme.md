# 🌐 @moto-ui/docs

**@moto-ui/docs** is the official documentation website and portal for Moto UI. Built on top of **React 19**, **Vite**, **TanStack Start**, and **Fumadocs**, it provides a high-performance, responsive layout detailing the installation, customization, and usage of all Moto UI component primitives.

---

## ✨ Features

- **🌐 TanStack Start & React 19** — Features modern server-side rendering (SSR), high performance hydration, and type-safe file-based routing.
- **⚡ Fumadocs MDX Engine** — Blazing fast MDX renderer supporting interactive components, live styling examples, search indexing, and a custom sidebar structure.
- **🛠️ Embedded Playgrounds** — Interactive components directly embedded inside MDX files, enabling developers to test and play with props, sizes, and variations in real time.
- **🌓 Adaptive Themeing** — Supports native dark/light modes using OKLCH colors dynamically mapped via Panda CSS.
- **🧩 Monorepo Sync** — Directly consumes workspace presets and react packages (`@moto-ui/react` and `@moto-ui/preset-base`) for real-time development previews.

---

## 🚀 Running the Docs Locally

Ensure you have run `pnpm install` at the monorepo root. Then start the docs dev server:

```bash
# From the root workspace directory
pnpm --filter @moto-ui/docs dev
```

The documentation portal will start locally at: **`http://localhost:3000`** (or the next available port).

---

## 📦 Building for Production

Compile a production-ready, optimized static build:

```bash
# Run build command
pnpm --filter @moto-ui/docs build
```

Preview the production build locally:

```bash
pnpm --filter @moto-ui/docs preview
```

---

## 📂 Project Structure

- **`src/routes/`** — File-based route definitions using TanStack Router.
- **`src/demos/`** — Custom component visual demo files imported and rendered within markdown guides.
- **`content/`** — Component and framework documentation in MDX format.
- **`source.config.ts`** — Fumadocs MDX collection structure configurations.
- **`vite.config.ts`** — Vite development plugins (TanStack Router plugin, SVGR plugin, and React compiler plugin).

---

## 🛠️ Scripts

The following commands are configured for the documentation portal:

- **`pnpm run dev`** — Starts the local dev server.
- **`pnpm run build`** — Compiles the docs website for deployment.
- **`pnpm run preview`** — Previews the production-ready build.
- **`pnpm run test`** — Executes unit and integration test suites using Vitest.
- **`pnpm run lint`** — Validates quality rules using Biome.
- **`pnpm run check`** — Performs formatting, linting, and quality checkups.

---

## 📄 License

Part of the Moto UI workspace. Distributed under the MIT License. See root `LICENSE` for details.
