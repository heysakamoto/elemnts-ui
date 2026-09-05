# 🏎️ @elemnts-ui/react

**@elemnts-ui/react** is the core component library of the Elemnts UI design system. It combines headless interactive accessibility powered by **Ark UI** with styling capabilities provided by **Panda CSS** build-time CSS-in-JS.

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

To use Elemnts UI components, install the library, preset-base, and styled-system dependencies:

### Install Dependencies

```bash
pnpm add @elemnts-ui/react @elemnts-ui/preset-base @elemnts-ui/styled-system && 
pnpm add -D @pandacss/dev
# or
yarn add @elemnts-ui/react @elemnts-ui/preset-base @elemnts-ui/styled-system && 
yarn add -D @pandacss/dev
# or
npm install @elemnts-ui/react @elemnts-ui/preset-base @elemnts-ui/styled-system && 
npm install -D @pandacss/dev
# or
bun add @elemnts-ui/react @elemnts-ui/preset-base @elemnts-ui/styled-system && 
bun add -D @pandacss/dev
```

### Setup Panda CSS

```bash
pnpm panda init --postcss
# or
yarn panda init --postcss
# or
npx panda init --postcss
# or
bun panda init --postcss
```

Add this to your `panda.config.ts` file:

```ts
import { defineConfig } from '@pandacss/dev';
import { basePreset } from '@elemnts-ui/preset-base';

export default defineConfig({
  eject: true,
  outExtension: "js",
  jsxFramework: "react",
  presets: [basePreset],

   // Path to your source files
  include: [
    "./src/**/*.{ts,tsx}", 
    "node_modules/@elemnts-ui/react/dist/buildinfo.json",
  ],
});
```
### Add css file

Create a `src/css` directory and add a `global.css` file:

```css
/* src/css/global.css */
@@layer reset, base, tokens, recipes, utilities;
```

### Add prepare scripts

Add the following scripts to your `package.json` file:

```json
"scripts": {
  "prepare": "panda codegen"
}
```

---

## 💻 Usage

### 1. Basic Component

Import and render components with built-in styling recipes:

```tsx
import { Button } from '@elemnts-ui/react';

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
import { Accordion } from '@elemnts-ui/react';

function App() {
  return (
    <Accordion defaultValue={['features']}>
      <Accordion.Item value="features">
        <Accordion.ItemTrigger>
          What makes Elemnts UI fast?
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          Elemnts UI extracts styling definitions into static CSS during compilation,
          ensuring zero runtime JS execution overhead for CSS styles.
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion>
  );
}
```

---

## 📄 License

Part of the Elemnts UI workspace. Distributed under the MIT License. See repository `LICENSE` for details.
