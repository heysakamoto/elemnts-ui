import { defineSlotRecipe } from "@pandacss/dev";

export const pinInputRecipe = defineSlotRecipe({
	className: "pinInput",
	slots: ["root", "control", "label", "input"],
	base: {
		label: {},
		control: {
			display: "flex",
			w: "{sizes.full}",
			gap: "{spacing.8}",
			alignItems: "center",
			justifyContent: "center",
		},
		input: {
			w: "{sizes.full}",
			px: "{spacing.0}",
			textAlign: "center",
			fontFamily: "inherit",
			alignItems: "center",
			display: "inline-flex",
			lineHeight: "{lineHeights.none}",
		},
	},
});
