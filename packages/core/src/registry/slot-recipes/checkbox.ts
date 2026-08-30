import { defineSlotRecipe } from "@pandacss/dev";

import { checkmarkRecipe } from "../recipes/checkmark";

export const checkboxRecipe = defineSlotRecipe({
	className: "checkbox",
	slots: ["root", "indicator", "control", "label", "group"],
	base: {
		root: {
			display: "flex",
			gap: "{spacing.8}",
			alignItems: "center",
			justifyContent: "start",

			_disabled: {
				opacity: "0.5",
				filter: "grayscale(100%)",
			},

			_focusVisible: {
				outline: "none",
			},
		},
		label: {},
		group: {
			display: "flex",
			flexDirection: "column",
			gap: "calc({spacing.4} * 3)",

			_vertical: {
				flexDirection: "column",
			},
		},
		control: {
			...checkmarkRecipe.base,

			_focusVisible: {
				outlineOffset: "-1px",
				outline: "2px solid {colors.colorPalette.primary}",
			},
		},
		indicator: {
			zIndex: "1",
			color: "inherit",
			alignItems: "center",
			display: "inline-flex",
			boxSize: "{sizes.full}",
			justifyContent: "center",

			"& > svg": {
				color: "inherit",
			},
		},
	},

	variants: {
		size: {
			xs: {
				control: {
					...checkmarkRecipe.variants?.size?.xs,
				},
			},
			sm: {
				control: {
					...checkmarkRecipe.variants?.size?.sm,
				},
			},
			md: {
				control: {
					...checkmarkRecipe.variants?.size?.md,
				},
			},
			lg: {
				control: {
					...checkmarkRecipe.variants?.size?.lg,
				},
			},
			xl: {
				control: {
					...checkmarkRecipe.variants?.size?.xl,
				},
			},
		},

		variant: {
			primary: {
				control: {
					...checkmarkRecipe.variants?.variant?.primary,
				},
			},
			secondary: {
				control: {
					...checkmarkRecipe.variants?.variant?.secondary,
				},
			},
			tertiary: {
				control: {
					...checkmarkRecipe.variants?.variant?.tertiary,
				},
			},
			ghost: {
				control: {
					...checkmarkRecipe.variants?.variant?.ghost,
				},
			},
		},
	},

	defaultVariants: {
		size: "md",
		variant: "primary",
	},
});
