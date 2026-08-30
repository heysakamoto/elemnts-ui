import { defineSlotRecipe } from "@pandacss/dev";
import { variant } from "../constants/variant";

export const avatarRecipe = defineSlotRecipe({
	className: "avatar",
	slots: ["root", "image", "fallback"],
	base: {
		root: {
			flexShrink: 0,
			rounded: "16px",
			overflow: "hidden",
			alignItems: "center",
			boxSize: "var(--size)",
			display: "inline-flex",
			cornerShape: "squircle",
			justifyContent: "center",
			border: "1px solid transparent",
		},
		image: {
			objectFit: "cover",
			objectPosition: "center",
			boxSize: "{sizes.full}",
		},
		fallback: {
			color: "inherit",
			alignItems: "center",
			display: "inline-flex",
			boxSize: "{sizes.full}",
			justifyContent: "center",
			fontSize: "{fontSizes.14}",
			backgroundColor: "inherit",
			lineHeight: "{lineHeights.none}",
		},
	},

	variants: {
		size: {
			"2xs": {
				root: {
					"--size": "calc({sizes.4} * 5)",
				},
			},
			xs: {
				root: {
					"--size": "calc({sizes.4} * 6)",
				},
			},
			sm: {
				root: {
					"--size": "calc({sizes.4} * 7)",
				},
			},
			md: {
				root: {
					"--size": "calc({sizes.4} * 8)",
				},
			},
			lg: {
				root: {
					"--size": "calc({sizes.4} * 9)",
				},
			},
			xl: {
				root: {
					"--size": "calc({sizes.4} * 10)",
				},
			},
			"2xl": {
				root: {
					"--size": "calc({sizes.4} * 12)",
				},
			},
		},
		variant: {
			primary: {
				root: {
					"&:not(:has(img[data-state=visible]))": {
						color: variant.primary.color,
						backgroundColor: variant.primary.backgroundColor,
					},
				},
			},
			secondary: {
				root: {
					"&:not(:has(img[data-state=visible]))": {
						color: variant.secondary.color,
						backgroundColor: variant.secondary.backgroundColor,
					},
				},
			},
			tertiary: {
				root: {
					"&:not(:has(img[data-state=visible]))": {
						color: variant.tertiary.color,
						borderColor: variant.tertiary.borderColor,
						backgroundColor: variant.tertiary.backgroundColor,
					},
				},
			},
			ghost: {
				root: {
					"&:not(:has(img[data-state=visible]))": {
						color: variant.ghost.color,
						backgroundColor: variant.ghost.backgroundColor,
					},
				},
			},
			surface: {
				root: {
					"&:not(:has(img[data-state=visible]))": {
						color: variant.surface.color,
						borderColor: variant.surface.borderColor,
						backgroundColor: variant.surface.backgroundColor,
					},
				},
			},
		},
	},

	defaultVariants: {
		size: "md",
		variant: "primary",
	},
});
