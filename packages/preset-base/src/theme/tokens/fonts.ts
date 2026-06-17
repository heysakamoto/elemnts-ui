import { defineTokens } from "@pandacss/dev";

export const fonts = defineTokens.fonts({
	sans: {
		value:
			"var(--font-sans-default, system-ui), -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Apple Color Emoji, Arial, sans-serif, Segoe UI Emoji, Segoe UI Symbol",
	},
	mono: {
		value:
			"var(--font-mono-default, monospace), SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New",
	},
});
