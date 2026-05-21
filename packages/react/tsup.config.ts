import { defineConfig } from "tsup";

const entry = ["src/**/*.{ts,tsx}"];

export default defineConfig([
	{
		entry,
		format: ["cjs"],
		outDir: "dist/cjs",
		dts: false,
		clean: false,
		bundle: false,
		sourcemap: true,
		splitting: false,
	},
	{
		entry,
		format: ["esm"],
		outDir: "dist/esm",
		dts: false,
		clean: false,
		bundle: false,
		sourcemap: true,
		splitting: false,
	},
]);
