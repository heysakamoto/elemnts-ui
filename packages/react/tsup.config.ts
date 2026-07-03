import { defineConfig } from "tsup";

const entry = ["src/**/*.{ts,tsx}"];

export default defineConfig([
	{
		entry,
		format: ["cjs"],
		dts: false,
		bundle: false,
		sourcemap: true,
		splitting: false,
		outDir: "dist/cjs",
		external: ["@moto-ui/styled-system"],
	},
	{
		entry,
		format: ["esm"],
		dts: false,
		bundle: false,
		sourcemap: true,
		splitting: false,
		outDir: "dist/esm",
		external: ["@moto-ui/styled-system"],
	},
]);
