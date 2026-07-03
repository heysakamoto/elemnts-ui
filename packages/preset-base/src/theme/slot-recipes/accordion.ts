import { defineSlotRecipe } from "@pandacss/dev";

export const accordionRecipe = defineSlotRecipe({
	className: "accordion",
	slots: [
		"root",
		"item",
		"itemTrigger",
		"itemContent",
		"itemIndicator",
		"separator",
	],

	base: {
		root: {
			display: "flex",
			w: "{sizes.full}",
			flexDirection: "column",
			gap: "calc({spacing.4} * 0.5)",
		},
		item: {
			display: "flex",
			overflow: "clip",
			flexDirection: "column",
			rounded: "calc({radii.4} * 5)",

			_open: {
				bgColor:
					"color-mix(in oklab, {colors.bg.secondary} 40%, {colors.transparent})",
			},
		},
		itemTrigger: {
			display: "flex",
			w: "{sizes.full}",
			gap: "{spacing.4}",
			transition: "none",
			alignItems: "center",
			h: "calc({sizes.4} * 9)",
			fontSize: "{fontSizes.14}",
			px: "calc({spacing.4} * 3)",
			color: "{colors.fg.primary}",
			rounded: "calc({radii.4} * 5)",
			justifyContent: "space-between",
			lineHeight: "{lineHeights.none}",

			_hover: {
				bgColor: "{colors.bg.secondary}",

				"& svg": {
					color: "inherit",
				},
			},
		},
		itemIndicator: {
			"& > svg": {
				transformOrigin: "center",
				transition: `rotate 200ms`,
				color: "{colors.icon.secondary}",
			},

			_open: {
				"& > svg": {
					rotate: "180deg",
				},
			},
		},
		itemContent: {
			overflow: "clip",
			w: "{sizes.full}",
			fontSize: "{fontSizes.14}",

			_open: {
				animationDuration: "250ms",
				animationName: "expand-height, fade",
				animationTimingFunction: "ease-out, ease-out",
			},
			_closed: {
				animationName: "collapse-height, fade-out",
				animationDuration: "250ms",
				animationTimingFunction: "ease-in, ease-in",
			},
		},
	},
});
