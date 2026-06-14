import { defineSlotRecipe } from "@pandacss/dev";

export const separatorGroupRecipe = defineSlotRecipe({
	className: "separator-group",
	slots: ["root", "caption"],

	base: {
		root: {
			display: "flex",
			alignItems: "center",
			flexDirection: "row",
			gap: "calc({spacing.4} * 2)",
		},
		caption: {
			fontSize: "{fontSize.14}",
			color: "{colors.fg.tertiary}",
			lineHeight: "{lineHeights.none}",
		},
	},
	variants: {},
});
