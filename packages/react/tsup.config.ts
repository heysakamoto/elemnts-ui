import { defineConfig } from "tsup";

import pkg from "./package.json";

const external = [
  ...Object.keys(pkg.dependencies ?? {}),
  ...Object.keys(pkg.peerDependencies ?? {}),
];

const entry = ["!src/extract.ts", "src/**/*.{ts,tsx}"];

export default defineConfig([
  {
    entry,
    format: ["cjs"],
    dts: false,
    bundle: false,
    sourcemap: true,
    splitting: false,
    outDir: "dist/cjs",
    external,
  },
  {
    entry,
    format: ["esm"],
    dts: false,
    bundle: false,
    sourcemap: true,
    splitting: false,
    outDir: "dist/esm",
    external,
  },
]);
