# ⚙️ @moto-ui/preset-base

**@moto-ui/preset-base** is the foundational design token and style preset configuration for Moto UI, built specifically for the **Panda CSS** build-time CSS-in-JS engine.

It defines the core typography, layout sizes, transitions, animations, and color mappings utilized by Moto UI components to construct a premium, unified user experience.

---

## ✨ Features

- **🎨 Token Aggregation** — Seamlessly integrates `@moto-ui/colors` (OKLCH color scales) into Panda CSS theme tokens.
- **⚡ Performance Recipes** — Pre-configured Panda CSS component recipes (e.g., Button, Dialog, Select) designed to extract static styles during build time.
- **✨ Premium Keyframes** — Native support for micro-animations, slide-ins, fade-ins, popovers, and spinners.
- **🔧 Custom Utilities** — Extra developer shorthand utilities mapped directly to Panda configuration for styling convenience.
- **📏 Design System Sync** — Includes unified layout breakpoints, spacing constants, durations, and font configurations.

---

## 📦 Installation

Install the package alongside Panda CSS in your target project:

```bash
pnpm add @moto-ui/preset-base
pnpm add -D @pandacss/dev
```

---

## 💻 Usage

In your project's `panda.config.ts` configuration, import and apply `basePreset`:

```typescript
import { basePreset } from "@moto-ui/preset-base";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Enables full preset customization
  eject: true,
  outExtension: "js",
  jsxFramework: "react",
  
  // Extend and apply the Moto UI base preset
  presets: [basePreset],

  // Include all source files for compilation
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
});
```

## 📄 License

Part of the Moto UI workspace. Distributed under the MIT License. See repository `LICENSE` for details.
