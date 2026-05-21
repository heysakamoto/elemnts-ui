import { defineSlotRecipe } from "@pandacss/dev";

export const statusRecipe = defineSlotRecipe({
	className: "status",
	slots: ["root", "indicator", "text"],
	base: {
		root: {
			alignItems: "center",
			display: "inline-flex",
			colorPalette: "accent",
			gap: "calc({sizes.4} * 1)",
		},
		indicator: {
			rounded: "full",
			bg: "{colors.colorPalette.primary}",
		},
		text: {
			fontSize: "14",
			lineHeight: "{lineHeights.none}",
		},
	},
	variants: {
		size: {
			xs: {
				text: { fontSize: "12" },
				indicator: { boxSize: "calc({sizes.4} * 1)" },
			},
			sm: {
				text: { fontSize: "14" },
				indicator: { boxSize: "calc({sizes.4} * 1.5)" },
			},
			md: {
				text: { fontSize: "14" },
				indicator: { boxSize: "calc({sizes.4} * 2)" },
			},
			lg: {
				text: { fontSize: "14" },
				indicator: { boxSize: "calc({sizes.4} * 2.5)" },
			},
			xl: {
				text: { fontSize: "16" },
				indicator: { boxSize: "calc({sizes.4} * 3)" },
			},
		},
	},
	defaultVariants: {
		size: "md",
	},
});
