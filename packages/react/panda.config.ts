import { basePreset } from "@moto-ui/core/presets";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	outExtension: "js",
	presets: [basePreset],
	jsxFramework: "react",
	outdir: "src/styled-system",
	include: ["src/**/*.{ts,tsx}", ".storybook/preview.tsx"],
});
