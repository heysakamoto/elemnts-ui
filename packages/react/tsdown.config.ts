import { cpSync } from "node:fs";
import { defineConfig } from "tsdown";

export default defineConfig({
  dts: false,
  clean: true,
  unbundle: true,
  outDir: "dist",
  sourcemap: false,
  format: ["cjs", "esm"],
  entry: [
    "src/**/*.{ts,tsx}",
    "!src/styled-system/**",
    "!src/**/*.stories.{ts,tsx,js,jsx,mjs}",
    "!src/**/*.test.{ts,tsx,js,jsx,mjs}",
    "!src/**/*.spec.{ts,tsx,js,jsx,mjs}",
    "!src/**/__tests__/**",
    "!src/**/__mocks__/**",
    "!src/extract.ts",
    "!src/components/**/examples/**",
    "!src/components/**/stories.tsx",
  ],
  outExtensions: ({ format }) => ({
    js: format === "cjs" ? ".cjs" : ".js",
  }),
  deps: {
    neverBundle: ["react", "react-dom", "@ark-ui/react"],
  },
  onSuccess: () => {
    cpSync("src/styled-system", "dist/styled-system", {
      force: true,
      recursive: true,
    });
  },
});
