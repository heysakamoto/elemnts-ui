import { defineSlotRecipe } from "@pandacss/dev";

export const popoverRecipe = defineSlotRecipe({
	className: "popover",
	slots: [
		"content",
		"trigger",
		"title",
		"description",
		"indicator",
		"anchor",
		"arrow",
		"arrowTip",
		"positioner",
		"closeTrigger",
	],
	base: {
		content: {
			"--arrow-size": "calc(({sizes.4} * 2.5))",
			"--arrow-background": "{colors.fg.primary}",

			position: "relative",
			transformOrigin: "var(--transform-origin, top)",
			zIndex: "calc(var(--z-index, 9) + var(--layer-index, 0))",

			_open: {
				animation: "scale-fade-in 200ms ease-out",
			},
			_closed: {
				animation: "scale-fade-out 200ms ease-in",
			},
		},
		title: {
			fontWeight: "500",
			lineHeight: "{lineHeights.xs}",
			letterSpacing: "{letterSpacings.sm}",
		},
		positioner: {
			zIndex: "{zIndex.overlay}",
		},
		description: {
			fontSize: "{fontSizes.14}",
			color: "{colors.fg.secondary}",
		},
	},
});
