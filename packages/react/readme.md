# 🏎️ @moto-ui/react

**@moto-ui/react** is the core component library of the Moto UI design system. It combines headless interactive accessibility powered by **Ark UI** with styling capabilities provided by **Panda CSS** build-time CSS-in-JS.

Designed for speed, scalability, and flexibility, it features 90+ primitives crafted to help you construct custom web applications with complete control.

---

## ✨ Features

- **♿ Accessibility First** — Headless component logic adhering to strict WAI-ARIA guidelines, handling keyboard navigation, screen reader support, and focus management automatically.
- **⚡ Zero Runtime Style Overhead** — Native Panda CSS integration compiles styles to static CSS files at build time, eliminating runtime JS injection and layout shifts.
- **🧩 Compound Architecture** — Uses the "Compound Component" pattern, giving developers maximum flexibility over nested layout structures.
- **🛠️ Strongly Typed** — Built with TypeScript to deliver predictable type checking, autocompletion, and variant discovery.
- **📱 Fluid & Responsive** — Out-of-the-box support for responsive variants, dark-mode adaptations, and custom scaling options.

---

## 📦 Installation

To use Moto UI React components, install the library, preset-base, and styled-system dependencies:

```bash
pnpm add @moto-ui/react @moto-ui/preset-base
pnpm add @moto-ui/styled-system
```

Make sure your **Panda CSS** config matches the setup described in the root [README](file:///home/sakamoto/Desktop/projects/moto/ui/readme.md) of this project.

---

## 💻 Usage

### 1. Basic Component

Import and render components with built-in styling recipes:

```tsx
import { Button } from '@moto-ui/react';

function App() {
  return (
    <Button variant="primary" size="md" onClick={() => console.log('Accelerating!')}>
      Get Started
    </Button>
  );
}
```

### 2. Compound Components

For complex structures, use compound component children to structure the layout to your exact specification:

```tsx
import { Accordion } from '@moto-ui/react';

function AccordionDemo() {
  return (
    <Accordion.Root defaultValue={['features']}>
      <Accordion.Item value="features">
        <Accordion.ItemTrigger>
          What makes Moto UI fast?
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          Moto UI extracts styling definitions into static CSS during compilation,
          ensuring zero runtime JS execution overhead for CSS styles.
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  );
}
```

---

## 📂 Project Structure

- **`src/components/`** — Subdirectories containing component logic, context providers, exports, and React rendering.
- **`src/hooks/`** — Custom React hooks for keyboard navigation, media query tracking, and state synchronization.
- **`src/index.ts`** — Primary entry point exporting components and hooks.

---

## 🛠️ Development & Scripts

Commands inside the `packages/react` package directory:

- **Build**: `pnpm run build` — Bundles component sources into ES Modules and CommonJS packages inside the `dist/` folder using `tsup`.
- **Develop**: `pnpm run dev` — Watches component directories and rebuilds dynamically as files are updated.
- **Clean**: `pnpm run clean` — Removes built files.

---

## 📄 License

Part of the Moto UI workspace. Distributed under the MIT License. See root `LICENSE` for details.
