import { basePreset } from "@moto-ui/preset-base";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	minify: true,
	outExtension: "js",
	jsxFramework: "react",
	presets: [basePreset],
	outdir: "styled-system",
	include: [
		"src/**/*.{ts,tsx}",
		"content/**/*.{mdx}",
		"node_modules/@moto-ui/react/dist/buildinfo.json",
	],
	globalVars: {
		"--font-sans-default": "Geist",
		"--font-mono-default": "JetBrains Mono",
	},
	globalFontface: {
		Geist: [
			{
				src: 'url("/fonts/geist-regular.woff2") format("woff2")',
				fontWeight: "400",
				fontStyle: "normal",
				fontDisplay: "swap",
			},
			{
				src: 'url("/fonts/geist-medium.woff2") format("woff2")',
				fontWeight: "500",
				fontStyle: "normal",
				fontDisplay: "swap",
			},
			{
				src: 'url("/fonts/geist-semibold.woff2") format("woff2")',
				fontWeight: "600",
				fontStyle: "normal",
				fontDisplay: "swap",
			},
		],
		"JetBrains Mono": [
			{
				src: 'url("/fonts/jetbrainsmono-regular.woff2") format("woff2")',
				fontWeight: "400",
				fontStyle: "normal",
				fontDisplay: "swap",
			},
		],
	},
});
