import { basePreset } from "@elemnts-ui/core/presets";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	minify: true,
	outExtension: "js",
	jsxFramework: "react",
	presets: [basePreset],
	include: [
		"src/**/*.{ts,tsx}",
		"../../packages/react/src/components/**/*.tsx",
		"node_modules/@elemnts-ui/react/dist/buildinfo.json",
	],
	globalVars: {
		"--font-sans-default": "UntitledSans",
		"--font-mono-default": "JetBrains Mono",

    // docs related variables
    "--toc-width": "15rem",
    "--docs-width": "96rem",
    "--navbar-height": "45px",
    "--sidebar-width": "18rem",
    "--page-body-width": "50rem",
    "--page-offset-top": "2.15rem",
    "--toc-height": "calc(100dvh - var(--navbar-height))",
    "--sidebar-height": "calc(100dvh - var(--navbar-height))",
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
