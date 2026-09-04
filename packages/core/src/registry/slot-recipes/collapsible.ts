import { defineSlotRecipe } from "@pandacss/dev";
import { size } from "../constants/size";
import { variant } from "../constants/variant";

export const collapsibleRecipe = defineSlotRecipe({
	className: "collapsible",
	slots: ["root", "trigger", "indicator", "content"],
	base: {
		root: {
			display: "flex",
			overflow: "clip",
			w: "{sizes.full}",
			flexDirection: "column",
			borderRadius: size.sm.borderRadius,

			_open: {
				bgColor:
					"color-mix(in oklab, {colors.colorPalette.secondary}, {colors.mix.selected})",
			},

			"&:has([data-has-collapsed-size])": {
				bgColor:
					"color-mix(in oklab, {colors.colorPalette.secondary}, {colors.mix.selected})",
			},
		},
		trigger: {
			display: "flex",
			w: "{sizes.full}",
			gap: "{spacing.4}",
			transition: "none",
			alignItems: "center",
			height: size.sm.height,
			px: size.sm.paddingInline,
			fontSize: size.sm.fontSize,
			color: "{colors.fg.primary}",
			lineHeight: size.sm.lineHeight,
			justifyContent: "space-between",
			borderRadius: size.sm.borderRadius,

			_disabled: {
				opacity: 0.5,
				cursor: "not-allowed",
			},

			"&:not(:disabled, [data-disabled]):hover": {
				...variant.secondary._hover,
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
			fontSize: "{fontSizes.14}",

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
