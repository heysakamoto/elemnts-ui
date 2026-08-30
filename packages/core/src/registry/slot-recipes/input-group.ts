import { defineSlotRecipe } from "@pandacss/dev";

import { buttonRecipe } from "../recipes/button";
import { inputRecipe } from "../recipes/input";

export const inputGroupRecipe = defineSlotRecipe({
	className: "input-group",
	slots: ["textarea", "root", "addon", "input"],
	base: {
		root: {
			display: "flex",
			overflow: "clip",
			w: "{sizes.full}",
			alignItems: "center",
			position: "relative",
			rounded: "{radii.16}",
			cornerShape: "squircle",
			fontSize: "{fontSizes.14}",
			border: "1px solid transparent",

			_disabled: {
				filter: "grayscale(100%)",
			},

			"& * input": {
				_disabled: {},
			},

			_vertical: {
				flexDirection: "column",
			},

			_horizontal: {
				flexDirection: "row",
			},

			"&:has(input:focus-visible), &:has(textarea:focus-visible)": {
				outlineOffset: "-1px",
				outline: "2px solid {colors.accent.primary}",
			},

			"&:has(:is(input, textarea):is(:invalid, [data-invalid], [aria-invalid=true])), &:is(:invalid, [data-invalid], [aria-invalid=true])":
				{
					outlineOffset: "-1px",
					outline: "2px solid {colors.destructive.primary}",
				},
		},
		addon: {
			flexShrink: 0,
			h: "{sizes.full}",
			alignItems: "center",
			display: "inline-flex",
			justifyContent: "center",
		},
		input: {
			flexGrow: 1,
			alignItems: "center",
			fontFamily: "inherit",
			display: "inline-flex",
			boxSize: "{sizes.full}",
			fontSize: "{fontSizes.14}",
			lineHeight: "{lineHeights.none}",

			_focus: {
				outline: "none",
			},
		},
		textarea: {
			flexGrow: 1,
			resize: "vertical",
			alignItems: "center",
			fontFamily: "inherit",
			display: "inline-flex",
			boxSize: "{sizes.full}",
			lineHeight: "{lineHeights.sm}",

			_focus: {
				outline: "none",
			},
		},
	},
	variants: {
		size: {
			xs: {
				root: {
					...buttonRecipe.variants?.size?.xs,
				},
			},
			sm: {
				root: {
					...buttonRecipe.variants?.size?.sm,
				},
			},
			md: {
				root: {
					...buttonRecipe.variants?.size?.md,
				},
			},
			lg: {
				root: {
					...buttonRecipe.variants?.size?.lg,
				},
			},
			xl: {
				root: {
					...buttonRecipe.variants?.size?.xl,
				},
			},
		},

		variant: {
			primary: {
				root: {
					...inputRecipe.variants?.variant?.primary,
				},
			},
			secondary: {
				root: {
					...inputRecipe.variants?.variant?.secondary,
				},
			},
			tertiary: {
				root: {
					...inputRecipe.variants?.variant?.tertiary,
				},
			},
		},
	},
	defaultVariants: {
		size: "md",
		variant: "primary",
	},
});
