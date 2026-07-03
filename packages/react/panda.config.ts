import { basePreset } from "@moto-ui/preset-base";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	outExtension: "js",
	presets: [basePreset],
	jsxFramework: "react",
	outdir: "styled-system",
	include: ["./src/**/*.{ts,tsx}"],
	importMap: "@moto-ui/styled-system",
});
