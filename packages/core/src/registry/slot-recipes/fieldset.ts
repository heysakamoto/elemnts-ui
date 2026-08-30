import { defineSlotRecipe } from "@pandacss/dev";

export const fieldsetRecipe = defineSlotRecipe({
	className: "fieldset",
	slots: ["root", "errorText", "helperText", "legend"],
	base: {
		root: {
			border: "none",
			display: "flex",
			gap: "{spacing.8}",
			flexDirection: "column",
		},
		legend: {
			fontWeight: "500",
			fontSize: "{fontSizes.16}",
			lineHeight: "{lineHeights.xs}",
			letterSpacing: "{letterSpacings.sm}",
		},
		helperText: {
			fontSize: "{fontSizes.14}",
			color: "{colors.fg.secondary}",
		},
		errorText: {
			fontSize: "{fontSizes.14}",
			color: "{colors.destructive.bg.primary}",
		},
	},
});
