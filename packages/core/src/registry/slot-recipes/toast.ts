import { defineSlotRecipe } from "@pandacss/dev";

export const toastRecipe = defineSlotRecipe({
	className: "toast",
	slots: [
		"root",
		"title",
		"description",
		"indicator",
		"actionTrigger",
		"group",
		"closeTrigger",
		"control",
	],
	base: {
		root: {
			display: "grid",
			shadow: "{shadows.2}",
			scale: "var(--scale)",
			zIndex: "var(--z-index)",
			opacity: "var(--opacity)",
			p: "calc({spacing.4} * 3)",
			alignItems: "anchor-center",
			bgColor: "{colors.surface.2}",
			height: "var(--height, auto)",
			rounded: "calc({radii.4} * 6)",
			translate: "var(--x) var(--y)",
			columnGap: "calc({spacing.4} * 2)",
			border: "1px solid {colors.stroke.tertiary}",
			gridTemplateColumns: "auto minmax(0, 1fr) auto",

			willChange: "translate, opacity, scale",
			transition: `translate 400ms,
          scale 400ms,
          opacity 400ms,
          height 400ms,
          box-shadow 200ms`,
			transitionTimingFunction: "cubic-bezier(0.21, 1.02, 0.73, 1)",

			// color palette based on toast type
			"&[data-type=error]": {
				colorPalette: "destructive",
			},

			"&[data-type=success]": {
				colorPalette: "success",
			},

			"&[data-type=warning]": {
				colorPalette: "warning",
			},

			"&[data-type=info]": {
				colorPalette: "accent",
			},

			"&[data-state='closed']": {
				transition: `
          translate "400ms",
          scale "400ms",
          opacity "200ms"`,
				transitionTimingFunction: "cubic-bezier(0.06, 0.71, 0.55, 1)",
			},

			"@media (prefers-reduced-motion: reduce)": {
				transitionDuration: "0ms, 0ms",
				transitionDelay: "0ms",
			},
		},
		indicator: {
			display: "flex",
			alignItems: "center",
			gridColumn: "1/span 1",
			justifyContent: "center",
			"& > svg": {
				color: "{colors.colorPalette.primary}",
			},
		},
		control: {
			display: "flex",
			gap: "{spacing.4}",
			alignItems: "center",
			gridColumn: "3/span 1",
			gridRow: "1",
		},
		title: {
			fontWeight: "500",
			gridColumn: "2/span 1",
			fontSize: "{fontSizes.14}",
			color: "{colors.fg.primary}",
			lineHeight: "{lineHeights.none}",
		},
		description: {
			gridColumn: "2/span 1",
			fontSize: "{fontSizes.14}",
			lineHeight: "{lineHeights.sm}",
			color: "{colors.fg.secondary}",
		},
	},
});
