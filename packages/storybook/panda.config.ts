import { basePreset } from "@moto-ui/core/presets";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	eject: true,
	preflight: true,
	outExtension: "js",
	jsxFramework: "react",
	presets: [basePreset],
	include: [
		"./src/stories/**/*.{js,jsx,ts,tsx}",
		"./.storybook/**/*.{js,jsx,ts,tsx}",
		"node_modules/@moto-ui/react/dist/buildinfo.json",
	],
	globalVars: {
		"--font-sans-default": "Geist",
		"--font-mono-default": "JetBrains Mono",
	},
});
