import { defineConfig } from "tsdown";

export default defineConfig({
	dts: false,
	clean: false,
	unbundle: true,
	sourcemap: false,
	entry: ["src/**/*.ts"],
	format: ["cjs", "esm"],
	deps: {
		onlyBundle: ["node_modules/"],
		neverBundle: ["@pandacss/dev"],
	},
	outExtensions: ({ format }) => ({
		js: format === "cjs" ? ".cjs" : ".js",
	}),
});
