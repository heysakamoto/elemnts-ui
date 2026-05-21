import { defineTokens } from "@pandacss/dev";

export const fonts = defineTokens.fonts({
	sans: {
		value:
			"var(--font-sans-default, ''), ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, Segoe UI, Helvetica, Apple Color Emoji, Arial, sans-serif, Segoe UI Emoji, Segoe UI Symbol",
	},
	mono: {
		value:
			"var(--font-mono-default, ''), monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New",
	},
});
