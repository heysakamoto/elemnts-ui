import { defineSlotRecipe } from "@pandacss/dev";

export const tourRecipe = defineSlotRecipe({
	className: "tour",
	slots: [
		"root",
		"positioner",
		"content",
		"title",
		"description",
		"actionTrigger",
		"closeTrigger",
		"arrow",
		"arrowTip",
		"control",
		"backdrop",
		"progressText",
		"spotlight",
	],
	base: {
		progressText: {
			fontSize: "{fontSizes.14}",
			color: "{colors.fg.tertiary}",
		},
		title: {
			fontWeight: "500",
			lineHeight: "{lineHeights.xs}",
			letterSpacing: "{letterSpacings.sm}",
		},
		description: {
			fontSize: "{fontSizes.14}",
			color: "{colors.fg.secondary}",
		},
		backdrop: {
			position: "fixed",
			top: "{spacing.0}",
			left: "{spacing.0}",
			boxSize: "{sizes.full}",
			bg: "{colors.white.a50}",
			zIndex: "var(--z-index)",
			backdropFilter: "blur(8px)",
			_dark: { bg: "{colors.black.a50}" },
		},
		positioner: {
			display: "flex",
			flexDirection: "column",
			zIndex: "{zIndex.overlay}",

			"&:is([data-type=dialog])": {
				position: "fixed",
				top: "{spacing.0}",
				left: "{spacing.0}",
				alignItems: "center",
				boxSize: "{sizes.full}",
				transform: "none !important",
				justifyContent: "center",
			},
		},
		spotlight: {
			rounded: "calc({radii.4} * 5) !important",
			border: "2px solid {colors.accent.primary}",
		},
		control: {
			display: "flex",
			flexDirection: "row",
			gap: "{spacing.8}",
		},
	},
});
