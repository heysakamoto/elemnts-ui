import { defineConfig } from "tsup";

export default defineConfig([
	{
		entry: ["./src/**/*.ts"],
		format: ["cjs"],
		outDir: "dist/cjs",
		dts: false,
		clean: false,
		bundle: false,
		sourcemap: true,
		splitting: false,
	},
	{
		entry: ["./src/**/*.ts"],
		format: ["esm"],
		outDir: "dist/esm",
		dts: false,
		clean: false,
		bundle: false,
		sourcemap: true,
		splitting: false,
	},
]);
