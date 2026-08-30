# 🏎️ Moto UI

**Moto UI** is a high-performance, accessible component library engineered for speed and scalability. Built on the foundation of [Ark UI](https://ark-ui.com/) and powered by [Panda CSS](https://panda-css.com/), it provides a robust toolkit for building modern, themeable design systems.

---

## ✨ Features

* **♿ Accessible by Design** – Built with Ark UI’s headless logic, ensuring full WAI-ARIA compliance out of the box.
* **🎨 Style with Velocity** – Utilizes Panda CSS for build-time CSS-in-JS, offering type-safe styles without the runtime overhead.
* **🧩 Compound Architecture** – Flexible component composition using the "Compound Component" pattern for maximum developer control.
* **🛠️ Fully Typed** – First-class TypeScript support for a predictable and error-free developer experience.
* **📱 Responsive & Themeable** – Easily customize tokens and recipes to match your brand identity.

---

````markdown
## 🚀 Getting Started

Moto UI relies on **Panda CSS** for its high-performance styling engine. Follow these steps to integrate the library and its design tokens into your project.

---

### 1. Installation

Install the Moto UI core components and the Panda CSS development dependencies:

```bash
pnpm add @moto-ui/react @moto-ui/core &&
pnpm add -D @pandacss/dev
# OR
npm install @moto-ui/react @moto-ui/core &&
npm install -D @pandacss/dev
# OR
yarn add @moto-ui/react @moto-ui/core &&
yarn add -D @pandacss/dev
# OR
bun add @moto-ui/react @moto-ui/core &&
bun add -D @pandacss/dev
````

---

### 2. Initialize Panda CSS

Run the initialization command to set up your PostCSS and Panda configuration:

```bash
pnpm panda init --postcss
# OR
npm panda init --postcss
# OR
yarn panda init --postcss
# OR
bun panda init --postcss
```

---

### 3. Configure Scripts

Add a `prepare` script to your `package.json`. This ensures that the Panda CSS engine generates the necessary styling code whenever you install dependencies:

```json
{
  "scripts": {
    "prepare": "panda codegen"
  }
}
```

---

### 4. Setup Panda Configuration

Create a `panda.config.ts` file in your project root. This configuration imports the **Moto UI base preset** to ensure all component styles are correctly mapped:

```ts
import { basePreset } from "@moto-ui/core/presets";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Allows full customization of the preset styles
  eject: true,
  outExtension: "js",
  jsxFramework: "react",
  presets: [basePreset],

  // Path to your source files
  include: [
    "./src/**/*.{ts,tsx}", 
    "node_modules/@moto-ui/react/dist/buildinfo.json",
  ],
});
```

---

### 5. Add Global Styles

Create a global CSS file (e.g., `src/index.css` or `global.css`) and include the Panda CSS layers. Import this file at the root of your application:

```css
@layer reset, base, tokens, recipes, utilities;
```

---

> [!TIP]
> For advanced configuration and framework-specific guides (Next.js, Vite, etc.), visit the official [Panda CSS Getting Started](https://panda-css.com/docs/overview/getting-started) documentation.

---


### Prerequisites

* **Node.js**: 
* **Package Manager**: pnpm, npm, or yarn

### Installation

```bash
npm install @moto-ui/react
# or
yarn add @moto-ui/react
# or
pnpm add @moto-ui/react

```

---

## 💻 Usage

Install @moto-ui/react and start using the available components:

```tsx
import { Button } from '@moto-ui/react';

function App() {
  return (
    <Button variant="primary" size="lg" onClick={() => console.log('Accelerating!')}>
        Get Started
    </Button>
  );
}

```

---

## 📦 Component Overview

Moto UI includes a comprehensive suite of primitives:

* **Layout**: Box, Stack, Grid, Flex
* **Forms**: Input, Checkbox, Select, Radio Group, Slider
* **Data Display**: Accordion, Tabs, Tags, Tables
* **Feedback**: Alert, Toast, Progress, Spinner
* **Overlay**: Dialog, Popover, Tooltip, HoverCard

---

## 🎨 Theming

Moto UI leverages Panda CSS **recipes** and **tokens**. You can extend the default theme in your `panda.config.ts`:

```typescript
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Extend Moto UI tokens here
  theme: {
    extend: {
      tokens: {
        colors: {
          brand: { value: '#FF5733' }
        }
      }
    }
  }
})

```

## Project Structure

The Moto UI project is organized into the following packages:

- **`packages/core`**: Provides the core presets, colors and design tokens.
- **`packages/react`**: Provides React components and hooks for building styled UI with Moto UI.
- **`packages/storybook`**: Provides Storybook configuration for Moto UI components.

---

## 📦 Role in the Monorepo

1. **Preset Input**: Imports design configurations from `@moto-ui/core/presets`.
2. **styled-system compilation**: Compiles tokens, keyframes, and recipes into `dist/`.
3. **React consumption**: `@moto-ui/react` consumes `styled-system` and recipes to build styled components.

---

## 🤝 Contributing

We welcome contributions to make Moto UI even faster! Please check our [Contributing Guide](./contributing.md) to get started.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

**Built with ❤️ for the React ecosystem.**
