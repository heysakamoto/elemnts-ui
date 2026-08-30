import { defineConfig } from "tsdown";

export default defineConfig({
	dts: false,
	clean: false,
	unbundle: true,
	sourcemap: false,
	format: ["cjs", "esm"],
	entry: ["src/**/*.ts"],
	outExtensions: ({ format }) => ({
		js: format === "cjs" ? ".cjs" : ".js",
	}),
});
