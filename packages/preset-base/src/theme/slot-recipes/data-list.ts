import { defineSlotRecipe } from "@pandacss/dev";

export const dataListRecipe = defineSlotRecipe({
	className: "data-list",
	slots: ["root", "item", "itemLabel", "itemValue"],
	description: "Data list slot recipe",
	base: {
		root: {
			display: "flex",
			flexDirection: "column",
			gap: "calc({spacing.4} * 3)",
		},
		item: {
			fontSize: "{fontSizes.14}",
			lineHeight: "{lineHeights.xs}",
		},
		itemLabel: {
			display: "flex",
			lineHeight: "inherit",
			gap: "calc({spacing.4} * 1)",
			color: "{colors.fg.tertiary}",
		},
		itemValue: {
			flex: 1,
			display: "flex",
			lineHeight: "inherit",
			minW: "calc({sizes.4} * 0)",
			color: "{colors.fg.primary}",
		},
	},
	variants: {
		orientation: {
			horizontal: {
				item: {
					display: "inline-grid",
					gap: "calc({spacing.4} * 4)",
					gridTemplateColumns: "repeat(auto-fit, minmax(0, 1fr))",
				},
				itemLabel: {
					minW: "calc({sizes.4} * 30)",
				},
			},
			vertical: {
				item: {
					display: "flex",
					flexDirection: "column",
					gap: "calc({spacing.4} * 1)",
				},
			},
		},
	},

	defaultVariants: {
		orientation: "vertical",
	},
});
