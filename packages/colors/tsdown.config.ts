import { defineConfig } from "tsdown";

export default defineConfig({
	dts: false,
	clean: false,
	unbundle: true,
	sourcemap: false,
	entry: ["src/**/*.ts"],
	format: ["cjs", "esm"],
	outExtensions: ({ format }) => ({
		js: format === "cjs" ? ".cjs" : ".js",
	}),
});
