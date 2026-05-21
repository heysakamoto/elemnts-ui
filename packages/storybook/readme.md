# 📖 @moto-ui/storybook

**@moto-ui/storybook** is the dedicated Storybook development and component verification workspace for Moto UI. It provides an isolated, interactive sandbox to document, audit, and visually verify the look and feel of all design system components.

---

## ✨ Features

- **🧩 Isolated Playground** — Interactive canvas with full controls (props, knobs, slots) to preview and test components.
- **♿ Accessibility Auditing** — Fully integrated `@storybook/addon-a11y` plugin to run real-time automated WCAG checks.
- **⚡ Vite-Powered Dev Server** — Blazing fast hot module replacement (HMR) powered by Vite and Panda CSS static styling updates.
- **🧪 Component Testing** — Integration with Vitest and Playwright to run testing suites directly on Storybook stories.
- **📝 Automatic MDX Generation** — Component documentation blocks, API property tables, and live source code previews.

---

## 🚀 Running Storybook

Before running Storybook, make sure the dependencies inside the monorepo are installed:

```bash
# From the monorepo root directory
pnpm install
```

### Dev Mode

Start the local Storybook development server:

```bash
pnpm --filter @moto-ui/storybook dev
```

Storybook will compile and open automatically at: **`http://localhost:6006`**

### Production Build

To compile a static, shareable version of the Storybook website:

```bash
pnpm --filter @moto-ui/storybook build
```

The output will be generated inside the `storybook-static/` directory and is ready for static hosting deployment (e.g. Vercel, Netlify, or GitHub Pages).

---

## 📂 Project Structure

- **`.storybook/`** — Storybook configuration files (`main.ts`, `preview.tsx`) registering addons, themes, and styles.
- **`src/stories/`** — Next-generation Storybook CSF (Component Story Format) stories grouped by component.
- **`vitest.config.ts`** — Vitest configuration utilizing browser Playwright runners for story visual testing.

---

## 🛠️ Scripts

The following package-level commands are configured:

- **`pnpm run dev`** — Starts Storybook in development mode on port `6006`.
- **`pnpm run build`** — Compiles Storybook into a static web application.

---

## 📄 License

Part of the Moto UI workspace. Distributed under the MIT License. See root `LICENSE` for details.
