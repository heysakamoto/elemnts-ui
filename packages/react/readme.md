# @elemnts-ui/react

**@elemnts-ui/react** is a powerful React component library designed for the Elemnts UI design system. It integrates headless, interactive accessibility features powered by **Ark UI**, ensuring compliance with WAI-ARIA standards for keyboard navigation, screen reader support, and focus management. Additionally, it leverages **Panda CSS**, a build-time CSS-in-JS solution, to deliver optimized styling without runtime overhead.

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

### 🛠️ Get Started with Elemnts UI

To begin using Elemnts UI components, follow these straightforward steps:

1. **Set Up Panda CSS**: Ensure your project uses Panda CSS. If not already configured, refer to the official [PandaCSS setup guide](https://panda-css.com/docs/overview/getting-started) to configure your environment.

2. **Install Dependencies**: Install the required packages using your preferred package manager:

   ```bash
   # Using pnpm
   pnpm add @elemnts-ui/react @elemnts-ui/core && pnpm add -D @pandacss/dev

   # Using yarn
   yarn add @elemnts-ui/react @elemnts-ui/core && yarn add -D @pandacss/dev

   # Using npm
   npm install @elemnts-ui/react @elemnts-ui/core && npm install -D @pandacss/dev 

   # Using bun
   bun add @elemnts-ui/react @elemnts-ui/core && bun add -D @pandacss/dev
   ```

### Configure Panda CSS

Run the following command to initialize Panda CSS:

```bash
pnpm panda init --postcss
# or
yarn panda init --postcss
# or
npx panda init --postcss
# or
bun panda init --postcss
```

Edit your `panda.config.ts` file to include the Elemnts UI preset:

```ts
import { defineConfig } from '@pandacss/dev';
import { basePreset } from '@elemnts-ui/core/presets';

export default defineConfig({
  presets: [basePreset],
  jsxFramework: "react",
  include: [
    "src/**/*.{ts,tsx}",
    "node_modules/@elemnts-ui/react/dist/buildinfo.json",
  ],
});
```

### Add Global CSS

Create a `src/global.css` file:

```css
/* src/global.css */
@@layer reset, base, tokens, recipes, utilities;
```

### Set Up Build Scripts

Add the following script to your `package.json` to generate Panda CSS:

```json
"scripts": {
  "prepare": "panda codegen"
}
```

---

## 💻 Usage

### Set Up Global CSS

To ensure your app uses the styling recipes from Elemnts UI, import the global CSS file in your app's root component. This step ensures consistent styling across your application.

```tsx
import './global.css';

export function App() {
  return (
    <div>Your app content here...</div>
  );
}
```

This step is crucial for leveraging the built-in styling provided by Elemnts UI.


### Basic Component

Import and render components with built-in styling recipes:

```tsx
import { Button } from '@elemnts-ui/react';

export default function Component() {
  return (
    <Button variant="primary" size="md" onClick={() => console.log('Accelerating!')}>
      Get Started
    </Button>
  );
}
```

### Compound Components

For complex structures, use compound component children to structure the layout to your exact specification:

```tsx
import { Accordion } from '@elemnts-ui/react';

export default function Component() {
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
