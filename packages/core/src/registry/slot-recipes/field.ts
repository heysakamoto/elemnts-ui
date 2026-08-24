import { defineSlotRecipe } from "@pandacss/dev";

export const fieldRecipe = defineSlotRecipe({
	className: "field",
	slots: [
		"root",
		"input",
		"label",
		"textarea",
		"errorText",
		"helperText",
		"select",
		"requiredIndicator",
	],
	base: {
		input: {
			w: "{sizes.full}",
			fontFamily: "inherit",
			alignItems: "center",
			display: "inline-flex",
			lineHeight: "{lineHeights.none}",
		},
		root: {
			display: "flex",
			flexDirection: "column",
			gap: "calc({spacing.4} * 2)",
		},
		label: {},
		textarea: {
			w: "{sizes.full}",
			fontFamily: "inherit",
			alignItems: "center",
			display: "inline-flex",
			resize: "vertical",
			lineHeight: "{lineHeights.sm}",
		},
		helperText: {
			fontSize: "{fontSizes.14}",
			color: "{colors.fg.secondary}",
		},
		errorText: {
			fontSize: "{fontSizes.14}",
			color: "{colors.destructive.primary}",
			lineHeight: "{lineHeights.sm}",
		},
	},
});
