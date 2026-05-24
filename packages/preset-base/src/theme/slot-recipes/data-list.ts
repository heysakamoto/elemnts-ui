import { defineSlotRecipe } from "@pandacss/dev";

export const dataListRecipe = defineSlotRecipe({
	className: "data-list",
	slots: ["root", "item", "itemLabel", "itemValue"],
	description: "Data list slot recipe",
	base: {
		root: {
			display: "flex",
			flexDirection: "column",
		},
		itemLabel: {
			display: "flex",
			alignItems: "center",
			gap: "calc({spacing.4} * 1)",
		},
		itemValue: {
			flex: 1,
			display: "flex",
			minW: "calc({sizes.4} * 0)",
			color: "{colors.fg.tertiary}",
		},
	},
	variants: {
		orientation: {
			horizontal: {
				item: {
					alignItems: "center",
					display: "inline-flex",
					gap: "calc({spacing.4} * 4)",
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
