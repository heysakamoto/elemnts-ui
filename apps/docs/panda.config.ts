import { basePreset } from "@moto-ui/preset-base";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	minify: true,
	outExtension: "js",
	jsxFramework: "react",
	presets: [basePreset],
	outdir: "styled-system",
	importMap: "@moto-ui/styled-system",
	include: [
		"src/**/*.{ts,tsx}",
		"content/**/*.{mdx}",
		"node_modules/@moto-ui/react/dist/buildinfo.json",
	],
	globalVars: {
		"--font-sans-default": "Inter",
		"--font-mono-default": "JetBrains Mono",
	},
	globalFontface: {
		InstrumentSerif: {
			fontWeight: "400",
			fontStyle: "normal",
			fontDisplay: "swap",
			src: 'url("/fonts/instrumentserif-regular.woff2") format("woff2")',
		},
		"JetBrains Mono": [
			{
				fontWeight: "400",
				fontStyle: "normal",
				fontDisplay: "swap",
				src: 'url("/fonts/jetbrainsmono-regular.woff2") format("woff2")',
			},
		],
		Inter: [
			{
				fontWeight: "400",
				fontStyle: "normal",
				fontDisplay: "swap",
				src: 'url("/fonts/inter-regular.woff2") format("woff2")',
			},
			{
				fontWeight: "500",
				fontStyle: "normal",
				fontDisplay: "swap",
				src: 'url("/fonts/inter-medium.woff2") format("woff2")',
			},
		],
	},
});
