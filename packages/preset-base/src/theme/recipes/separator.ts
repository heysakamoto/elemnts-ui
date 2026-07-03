import { defineRecipe } from "@pandacss/dev";

export const separatorRecipe = defineRecipe({
	className: "separator",
	base: {
		userSelect: "none",
		flexShrink: "0",
	},
	variants: {
		orientation: {
			horizontal: {
				w: "auto",
				h: "var(--separator-size)",
			},

			vertical: {
				h: "auto",
				w: "var(--separator-size)",
			},
		},

		size: {
			xs: {
				"--separator-size": "1px",
			},
			sm: {
				"--separator-size": "2px",
			},
			md: {
				"--separator-size": "3px",
			},
			lg: {
				"--separator-size": "4px",
			},
			xl: {
				"--separator-size": "5px",
			},
		},

		variant: {
			primary: {
				bgColor: "{colors.stroke.primary}",
			},
			secondary: {
				bgColor: "{colors.stroke.secondary}",
			},
			tertiary: {
				bgColor: "{colors.stroke.tertiary}",
			},
			ghost: {
				bgColor: "{colors.transparent}",
			},
		},
	},
	defaultVariants: {
		size: "xs",
		variant: "primary",
	},
});
