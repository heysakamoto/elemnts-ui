# @elemnts-ui/core

Official core package for elemnts-ui, providing tailored styling solutions with PandaCSS presets and a set of Tailwind CSS V4 color schemes for seamless integration.


## Features
- Built-in colors for seamless integration with elemnts-ui.
- Component styles tailored for design systems.
- Easy integration with PandaCSS.

## Installation

Install the package using npm or yarn:

```bash
npm install @elemnts-ui/core
# or
yarn add @elemnts-ui/core
# or
pnpm add @elemnts-ui/core
# or
bun add @elemnts-ui/core
```

## Usage

To use the `@elemnts-ui/core` preset with PandaCSS, add it to your `pandacss.config.ts` or similar configuration file:

```ts
import { defineConfig } from 'pandacss'
import { basePreset } from '@elemnts-ui/core/presets'

export default defineConfig({
  presets: [basePreset],
  include: ["src/**/*.{ts,tsx}"],
})
```

## Dependencies

This package depends on:
- `@pandacss/dev` (for development tools and utilities)

## License

This project is licensed under the MIT License.
