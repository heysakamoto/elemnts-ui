# 🎨 @moto-ui/colors

**@moto-ui/colors** is a high-performance, comprehensive color system designed for modern web applications. Inspired by Tailwind CSS v4, it provides color scales defined using the CSS **OKLCH** color space for superior perceptual uniformity, color accuracy, and beautiful gradients.

---

## ✨ Features

- **🌈 OKLCH Color Space** — Leverages modern native CSS color coordinates, ensuring consistent brightness and saturation scales across all hues.
- **📏 Comprehensive 50–950 Scales** — Each hue is crafted with 11 granular stops (50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950).
- **💧 Inherent Alpha Variants** — Built-in translucent variations (`[color]Alpha`) for matching background transparency requirements.
- **🌙 Dark Mode Optimization** — Pre-inverted dark theme scales (`[color]Dark` and `[color]DarkAlpha`) for seamless, accessible dark-mode UI designs.
- **⚡ Zero Runtime Overhead** — Static string mappings compiled directly into build-time design tokens.

---

## 📦 Installation

Install the package via your preferred package manager:

```bash
pnpm add @moto-ui/colors
# or
npm install @moto-ui/colors
# or
yarn add @moto-ui/colors
```

---

## 💻 Usage

Import color scales and variants directly into your theme definition or script files:

```typescript
import { amber, amberAlpha, amberDark, amberDarkAlpha } from "@moto-ui/colors";

// Access standard color stop
console.log(amber[500]); // Outputs: "oklch(76.9% 0.188 70.08)"

// Access translucent color stop
console.log(amberAlpha[500]); // Outputs: "oklch(76.9% 0.188 70.08 / 0.5)"

// Access dark-theme variant stop
console.log(amberDark[500]); // Inverted amber stop optimized for dark mode
```

### Subpath Imports

For smaller bundle footprints, you can import specific colors individually:

```typescript
import { blue, blueAlpha } from "@moto-ui/colors/blue";
import { red } from "@moto-ui/colors/red";
```

---

## 🎨 Supported Colors

The library exports the following color palettes:

- **Neutral/Gray Scales**: `gray`, `mauve`, `neutral`, `olive`, `slate`, `stone`, `zinc`
- **Vibrant Hues**: `amber`, `blue`, `cyan`, `emerald`, `fuchsia`, `green`, `indigo`, `lime`, `orange`, `pink`, `purple`, `red`, `rose`, `sky`, `teal`, `violet`, `yellow`
- **Specials**: `black`, `white`, `mist`, `taupe`

---

## 🛠️ Development & Scripts

Inside the `packages/colors` directory, you can run the following development commands:

- **Build**: `pnpm run build` — Compiles the TypeScript source into CommonJS and ESM targets (outputs to `dist/`) via `tsup`.
- **Compile**: `pnpm run compile` — Typechecks the codebase using the TypeScript compiler.
- **Lint**: `pnpm run lint` — Performs formatting and code quality checks using Biome.

---

## 📄 License

Part of the Moto UI workspace. Distributed under the MIT License. See root `LICENSE` for details.
