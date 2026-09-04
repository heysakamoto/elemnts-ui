import { defineRecipe } from "@pandacss/dev";

export const elevatedRecipe = defineRecipe({
	className: "elevated",
	description: "Raises the elevation level of its children by a given `offset`",
	base: {
		display: "flex",
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
	variants: {
		withBorder: {
			false: {
				border: "none",
			},
			true: {
				border: "1px solid {colors.stroke.secondary}",
			},
		},
	},
	defaultVariants: {
		withBorder: true,
	},
});
