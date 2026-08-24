import { basePreset } from "@moto-ui/core/presets";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	minify: true,
	outExtension: "js",
	jsxFramework: "react",
	presets: [basePreset],
	outdir: "styled-system",
	include: [
		"src/**/*.{ts,tsx}",
    "../../packages/react/examples/**/*.{ts,tsx}",
    "node_modules/@moto-ui/react/dist/buildinfo.json",
  ],
  globalVars: {
    "--font-sans-default": "UntitledSans",
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
