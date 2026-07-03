import { defineSlotRecipe } from "@pandacss/dev";

export const collapsibleRecipe = defineSlotRecipe({
	className: "collapsible",
	slots: ["root", "trigger", "indicator", "content"],
	base: {
		root: {
			"--collapsible-bg":
				"color-mix(in oklab, {colors.bg.secondary} 40%, transparent)",

			display: "flex",
			overflow: "clip",
			w: "{sizes.full}",
			flexDirection: "column",
			rounded: "calc({radii.4} * 5)",

			_open: {
				bgColor: "var(--collapsible-bg)",
			},

			"&:has([data-has-collapsed-size])": {
				bgColor: "var(--collapsible-bg)",
			},
		},
		trigger: {
			w: "{sizes.full}",
			alignItems: "center",
			display: "inline-flex",
			justifyContent: "start",
			fontSize: "{fontSizes.14}",
			px: "calc({spacing.4} * 3)",
			gap: "calc({spacing.4} * 2)",
			rounded: "calc({radii.4} * 5)",
			lineHeight: "{lineHeights.none}",

			"&:hover:not([data-disabled], :disabled, [aria-disabled=true])": {
				bgColor: "{colors.bg.secondary}",

				"& svg": {
					color: "inherit",
				},
			},
		},
		indicator: {
			"& > svg": {
				transformOrigin: "center",
				transition: "rotate 200ms",
				color: "{colors.icon.secondary}",
			},

			_open: {
				"& > svg": {
					rotate: "180deg",
				},
			},
		},
		content: {
			overflow: "clip",
			_open: {
				animationDuration: "250ms",
				animationName: "expand-height, fade",
				animationTimingFunction: "ease-out, ease-out",
				"&[data-has-collapsed-size]": {
					animationName: "expand-height",
				},
			},
			_closed: {
				animationDuration: "250ms",
				animationName: "collapse-height, fade-out",
				animationTimingFunction: "ease-in, ease-in",
				"&[data-has-collapsed-size]": {
					animationName: "collapse-height",
				},
			},
		},
	},
});
