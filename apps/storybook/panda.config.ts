import { basePreset } from "@moto-ui/core";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	// Whether to use css reset
	preflight: true,
	jsxFramework: "react",
	presets: [basePreset],
	outdir: "styled-system",
	include: [
		"src/**/*.{ts,tsx}",
		".storybook/preview.tsx",
		"node_modules/@moto-ui/react/dist/buildinfo.json",
	],
	globalVars: {
		"--font-sans-default": "UntitledSans",
		"--font-mono-default": "JetBrains Mono",
	},
	globalFontface: {
		"JetBrains Mono": [
			{
				fontWeight: "400",
				fontStyle: "normal",
				fontDisplay: "swap",
				src: 'url("/fonts/jetbrainsmono-regular.woff2") format("woff2")',
			},
		],
		UntitledSans: [
			{
				fontWeight: "400",
				fontStyle: "normal",
				fontDisplay: "swap",
				src: 'url("/fonts/untitledsans-regular.woff2") format("woff2")',
			},
			{
				fontWeight: "500",
				fontStyle: "normal",
				fontDisplay: "swap",
				src: 'url("/fonts/untitledsans-medium.woff2") format("woff2")',
			},
			{
				fontWeight: "600",
				fontStyle: "normal",
				fontDisplay: "swap",
				src: 'url("/fonts/untitledsans-bold.woff2") format("woff2")',
			},
		],
	},
});
