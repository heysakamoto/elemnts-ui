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
		external: ["@moto-ui/styled-system"],
	},
	{
		entry,
		format: ["esm"],
		dts: false,
		clean: false,
		bundle: false,
		sourcemap: true,
		splitting: false,
		outDir: "dist/esm",
		external: ["@moto-ui/styled-system"],
	},
]);
