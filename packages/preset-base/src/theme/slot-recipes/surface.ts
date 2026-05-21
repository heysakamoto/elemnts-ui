import { defineSlotRecipe } from "@pandacss/dev";

export const surfaceRecipe = defineSlotRecipe({
	className: "surface",
	slots: [
		"root",
		"header",
		"addon",
		"content",
		"footer",
		"title",
		"description",
	],
	base: {
		root: {
			display: "flex",
			overflow: "clip",
			rounded: "calc({radii.4} * 3)",
			border: "1px solid {colors.stroke.secondary}",

			"&[data-elevation='1']": {
				bgColor: "{colors.surface.1}",
			},
			"&[data-elevation='2']": {
				bgColor: "{colors.surface.2}",
			},
			"&[data-elevation='3']": {
				bgColor: "{colors.surface.3}",
			},
			"&[data-elevation='4']": {
				bgColor: "{colors.surface.4}",
			},
			"&[data-elevation='5']": {
				bgColor: "{colors.surface.5}",
			},
			"&[data-elevation='6']": {
				bgColor: "{colors.surface.6}",
			},
			"&[data-elevation='7']": {
				bgColor: "{colors.surface.7}",
			},
			"&[data-elevation='8']": {
				bgColor: "{colors.surface.8}",
			},

			// Elevation shadows
			"&[data-elevation-shadow='1']": {
				shadow: "{shadows.1}",
			},
			"&[data-elevation-shadow='2']": {
				shadow: "{shadows.2}",
			},
			"&[data-elevation-shadow='3']": {
				shadow: "{shadows.3}",
			},
			"&[data-elevation-shadow='4']": {
				shadow: "{shadows.4}",
			},
			"&[data-elevation-shadow='5']": {
				shadow: "{shadows.5}",
			},
			"&[data-elevation-shadow='6']": {
				shadow: "{shadows.6}",
			},
			"&[data-elevation-shadow='7']": {
				shadow: "{shadows.7}",
			},
			"&[data-elevation-shadow='8']": {
				shadow: "{shadows.8}",
			},
		},
		addon: {
			display: "flex",
			flexDirection: "column",
		},
		header: {
			display: "flex",
			alignItems: "center",
			flexDirection: "column",
		},
		footer: {
			display: "flex",
			flexDirection: "column",
		},
		content: {
			flexGrow: "1",
			display: "flex",
			flexDirection: "column",
		},
		title: {
			w: "{sizes.full}",
			alignItems: "center",
			display: "inline-flex",
			fontSize: "{fontSizes.16}",
			color: "{colors.fg.primary}",
			gap: "calc({spacing.4} * 2)",
			lineHeight: "{lineHeights.none}",
		},
		description: {
			fontSize: "{fontSizes.14}",
			color: "{colors.fg.secondary}",
			lineHeight: "{lineHeights.sm}",
		},
	},
	variants: {
		orientation: {
			vertical: {
				root: {
					flexDirection: "column",
				},
			},
			horizontal: {
				root: {
					flexDirection: "row",
				},
			},
		},
		elevated: {
			false: {
				root: {
					border: "none",
					shadow: "none",
				},
			},
		},
	},
	defaultVariants: {
		elevated: true,
		orientation: "vertical",
	},
});
