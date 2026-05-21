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
		"--font-sans-default": "Avio Sans",
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
});
