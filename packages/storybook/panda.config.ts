import { basePreset } from "@moto-ui/preset-base";
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
	],
	globalVars: {
		"--font-sans-default": "Geist",
		"--font-mono-default": "JetBrains Mono",
	},
});
