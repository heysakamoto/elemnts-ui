import { defineSlotRecipe } from "@pandacss/dev";

export const tooltipRecipe = defineSlotRecipe({
	className: "tooltip",
	slots: ["content", "trigger", "arrow", "arrowTip", "positioner"],
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
		arrow: {
			zIndex: "-1",
		},
	},
});
