import { basePreset } from "@moto-ui/preset-base";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	exclude: [],
	outdir: "dist",
	outExtension: "js",
	jsxFramework: "react",
	presets: [basePreset],
	include: ["src/**/*.{js,jsx,ts,tsx}"],
});
