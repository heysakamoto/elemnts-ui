import { cp } from "node:fs";
import { defineConfig } from "tsdown";

export default defineConfig({
	entry: [
		"src/**/*.{ts,tsx}",
		"!src/**/*.stories.{ts,tsx,js,jsx,mjs}",
		"!src/**/*.test.{ts,tsx,js,jsx,mjs}",
		"!src/**/*.spec.{ts,tsx,js,jsx,mjs}",
		"!src/**/__tests__/**",
		"!src/**/__mocks__/**",
		"!src/extract.ts",
		"!src/styled-system",
		"!src/components/**/examples/**",
		"!src/components/**/stories.tsx",
	],
	dts: false,
	unbundle: true,
	outDir: "dist",
	sourcemap: false,
	format: ["cjs", "esm"],
	outExtensions: ({ format }) => ({
		js: format === "cjs" ? ".cjs" : ".js",
	}),
	deps: {
		neverBundle: [
			"react",
			"react-dom",
			"@ark-ui/react",
			"@moto-ui/styled-system",
		],
	},
	onSuccess: () => {
		cp(
			"src/styled-system",
			"dist/styled-system",
			{
				force: true,
				recursive: true,
			},
			(err) => {
				if (err) {
					console.error(err);
				}
			},
		);
	},
});
