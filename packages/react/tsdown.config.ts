import { defineConfig } from "tsdown";

const entry = [
	"!src/**/*.stories.{ts,tsx,js,jsx,mjs}",
	"!src/**/*.test.{ts,tsx,js,jsx,mjs}",
	"!src/**/*.spec.{ts,tsx,js,jsx,mjs}",
	"!src/**/__tests__/**",
	"!src/**/__mocks__/**",
	"!src/extract.ts",
	"!src/components/**/examples/**",
	"!src/components/**/stories.tsx",
	"src/**/*.{ts,tsx}",
];

export default defineConfig({
	entry,
	dts: false,
	unbundle: true,
	outDir: "dist",
	sourcemap: false,
	format: ["cjs", "esm"],
	outExtensions: ({ format }) => ({
		js: format === "cjs" ? ".cjs" : ".js",
	}),
});
