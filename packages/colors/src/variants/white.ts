import type { ColorScale } from "../types";

export const whiteAlpha = {
	50: "oklch(1 0 0 / 0.05)",
	100: "oklch(1 0 0 / 0.1)",
	200: "oklch(1 0 0 / 0.2)",
	300: "oklch(1 0 0 / 0.3)",
	400: "oklch(1 0 0 / 0.4)",
	500: "oklch(1 0 0 / 0.5)",
	600: "oklch(1 0 0 / 0.6)",
	700: "oklch(1 0 0 / 0.7)",
	800: "oklch(1 0 0 / 0.8)",
	900: "oklch(1 0 0 / 0.9)",
	950: "oklch(1 0 0 / 0.95)",
} satisfies ColorScale;
