import { basePreset } from "@moto-ui/preset-base";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	preflight: true,
	outExtension: "js",
	jsxFramework: "react",
	presets: [basePreset],
	outdir: "styled-system",
	include: [
		"./node_modules/@moto-ui/react/dist/panda.buildinfo.json",
		"src/**/*.{js,jsx,ts,tsx}",
		"content/**/*.{md,mdx}",
	],
	globalVars: {
		"--font-sans-default": "Inter",
		"--font-mono-default": "JetBrains Mono",
	},
	staticCss: {
		css: [
			{
				properties: {
					gridRow: ["*"],
					gridColumn: ["*"],
					gridTemplateRows: ["*", "repeat(3, 96px)", "repeat(4, 96px)"],
					gridTemplateColumns: ["*"],
					backgroundColor: ["*"],
					height: ["256"],
					gap: ["24"],
				},
			},
		],
	},
	globalFontface: {
		Inter: [
			{
				src: 'url("/fonts/inter-regular.woff2") format("woff2")',
				fontWeight: "400",
				fontStyle: "normal",
				fontDisplay: "swap",
			},
			{
				src: 'url("/fonts/inter-medium.woff2") format("woff2")',
				fontWeight: "500",
				fontStyle: "normal",
				fontDisplay: "swap",
			},
			{
				src: 'url("/fonts/inter-semibold.woff2") format("woff2")',
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
