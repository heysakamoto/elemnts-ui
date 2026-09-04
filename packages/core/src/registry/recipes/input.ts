import { defineRecipe } from "@pandacss/dev";

import { buttonRecipe } from "./button";

export const inputRecipe = defineRecipe({
	className: "input",
	base: {
		w: "{sizes.full}",
		alignItems: "center",
		fontFamily: "inherit",
		display: "inline-flex",
		fontSize: "{fontSizes.14}",
		border: "1px solid transparent",
		lineHeight: "{lineHeights.none}",

		_focusVisible: {
			outlineOffset: "-1px",
			outline: "2px solid {colors.accent.primary}",
		},

		"&:is(:invalid, [data-invalid], [aria-invalid=true])": {
			outlineOffset: "-1px",
			outline: "2px solid {colors.destructive.primary}",
		},

		_disabled: {
			opacity: 0.5,
			cursor: "not-allowed",
			filter: "grayscale(50%)",
		},
	},
	variants: {
		size: {
			xs: {
				...buttonRecipe.variants?.size?.xs,
			},
			sm: {
				...buttonRecipe.variants?.size?.sm,
			},
			md: {
				...buttonRecipe.variants?.size?.md,
			},
			lg: {
				...buttonRecipe.variants?.size?.lg,
			},
			xl: {
				...buttonRecipe.variants?.size?.xl,
			},
		},
		variant: {
			primary: {
				bgColor: "{colors.transparent}",
				borderColor: "{colors.stroke.secondary}",
			},
			secondary: {
				bgColor: "{colors.neutral.secondary}",
			},
			tertiary: {
				bgColor: "{colors.transparent}",
			},
		},
	},

	defaultVariants: {
		size: "md",
		variant: "primary",
	},
});
