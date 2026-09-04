import { basePreset } from "@moto-ui/core/presets";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	minify: true,
	outExtension: "js",
	jsxFramework: "react",
	presets: [basePreset],
	include: [
		"src/**/*.{ts,tsx}",
		"../../packages/react/src/components/**/*.tsx",
		"node_modules/@moto-ui/react/dist/buildinfo.json",
	],
	globalVars: {
		"--font-sans-default": "UntitledSans",
		"--font-mono-default": "JetBrains Mono",

		// docs related variables
		"--toc-width": "17rem",
		"--docs-width": "96rem",
		"--navbar-height": "65px",
		"--sidebar-width": "18rem",
		"--page-offset-top": "40px",
		"--page-body-width": "50rem",
		"--toc-height": "calc(100dvh - var(--navbar-height))",
		"--sidebar-height": "calc(100dvh - var(--navbar-height))",
		"--navbar-width":
			"calc((100dvw - var(--sidebar-width)) - var(--toc-width))",
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
