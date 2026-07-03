import { defineSlotRecipe } from "@pandacss/dev";

import { elevatedRecipe } from "../recipes/elevated";

const { base } = elevatedRecipe;

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
			...base,
			overflow: "clip",
			rounded: "calc({radii.4} * 3)",
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
