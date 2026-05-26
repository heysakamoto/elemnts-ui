import { basePreset } from "@moto-ui/preset-base";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	preflight: true,
	minify: true,
	lightningcss: true,
	outExtension: "js",
	jsxFramework: "react",
	presets: [basePreset],
	outdir: "styled-system",
	include: ["src/**/*.{js,jsx,ts,tsx}", "content/**/*.{md,mdx}"],
	globalVars: {
		"--font-sans-default": "Geist",
		"--font-mono-default": "JetBrains Mono",
	},
	staticCss: {
		css: [
			{
				properties: {
					gap: ["24"],
					gridRow: ["*"],
					height: ["256"],
					gridColumn: ["*"],
					backgroundColor: ["*"],
					gridTemplateColumns: ["*"],
					gridTemplateRows: ["*", "repeat(3, 96px)", "repeat(4, 96px)"],
				},
			},
		],
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
