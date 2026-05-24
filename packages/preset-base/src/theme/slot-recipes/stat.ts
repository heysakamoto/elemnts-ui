import { defineSlotRecipe } from "@pandacss/dev";

export const statRecipe = defineSlotRecipe({
	className: "stat",
	slots: ["root", "label", "valueText", "helpText", "valueUnit", "indicator"],
	description: "Stat slot recipe",
	base: {
		root: {
			flex: 1,
			display: "flex",
			gap: "{spacing.4}",
			position: "relative",
			flexDirection: "column",
		},
		label: {
			alignItems: "center",
			display: "inline-flex",
			fontSize: "{fontSizes.14}",
			color: "{colors.fg.tertiary}",
			gap: "calc({spacing.4} * 1.5)",
		},
		helpText: {
			fontSize: "{fontSizes.12}",
			color: "{colors.fg.tertiary}",
		},
		valueText: {
			fontWeight: "500",
			letterSpacing: "sm",
			display: "inline-flex",
			verticalAlign: "baseline",
			gap: "calc({spacing.4} * 1)",
			fontFeatureSettings: "pnum",
			fontVariantNumeric: "proportional-nums",
		},
		valueUnit: {
			fontSize: "{fontSizes.12}",
			color: "{colors.fg.tertiary}",
		},
		indicator: {
			alignItems: "center",
			display: "inline-flex",
			justifyContent: "center",
			marginEnd: "calc({spacing.4} * 1)",
		},
	},
});
