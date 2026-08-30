import { defineSlotRecipe } from "@pandacss/dev";

import { radiomarkRecipe } from "../recipes/radiomark";

export const radioGroupRecipe = defineSlotRecipe({
	className: "radio-group",
	slots: ["root", "label", "item", "itemText", "itemControl", "indicator"],
	base: {
		label: {},
		root: {
			display: "flex",
			gap: "calc({spacing.4} * 2)",

			_vertical: {
				flexDirection: "column",
			},

			_disabled: {
				opacity: ".5",
				filter: "grayscale(1)",
			},

			"& > svg": {
				color: "{colors.icon.secondary}",
			},
		},
		item: {
			alignItems: "center",
			display: "inline-flex",
			gap: "calc({spacing.4} * 2)",

			_disabled: {
				opacity: ".5",
			},
		},
		itemText: {
			color: "inherit",
			userSelect: "none",
			fontSize: "inherit",
			alignItems: "center",
		},
		itemControl: {
			...radiomarkRecipe.base,
			_disabled: {},
		},
		indicator: {
			position: "absolute",
			rounded: "{radii.full}",
			boxSize: "calc({sizes.4} * 4)",
			bgColor: "{colors.colorPalette.primary}",
		},
	},
	variants: {
		size: {
			xs: {
				itemControl: radiomarkRecipe.variants?.size?.xs,
			},
			sm: {
				itemControl: radiomarkRecipe.variants?.size?.sm,
			},
			md: {
				itemControl: radiomarkRecipe.variants?.size?.md,
			},
			lg: {
				itemControl: radiomarkRecipe.variants?.size?.lg,
			},
			xl: {
				itemControl: radiomarkRecipe.variants?.size?.xl,
			},
		},
	},
	defaultVariants: {
		size: "md",
	},
});
