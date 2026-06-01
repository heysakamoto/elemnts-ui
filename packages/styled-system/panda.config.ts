import { basePreset } from "@moto-ui/preset-base";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	outdir: "dist",
	outExtension: "js",
	jsxFramework: "react",
	presets: [basePreset],
});
