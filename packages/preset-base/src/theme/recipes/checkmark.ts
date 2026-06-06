import { defineRecipe } from "@pandacss/dev";

export const checkmarkRecipe = defineRecipe({
	className: "checkmark",
	base: {
		flexShrink: "0",
		overflow: "clip",
		cursor: "pointer",
		border: "1px solid",
		position: "relative",
		alignItems: "center",
		display: "inline-flex",
		rounded: "{radii.full}",
		justifyContent: "center",
		borderColor: "{colors.transparent}",

		_before: {
			scale: "0.5",
			opacity: "0",
			content: "''",
			position: "absolute",
			boxSize: "{sizes.full}",
			rounded: "{radii.full}",
			transformOrigin: "center",
			bgColor: "{colors.colorPalette.primary}",
			transition: `
      scale 150ms ease,
      border 100ms ease-out,
      opacity 100ms ease-out,
      background-color 100ms ease-out
      `,
		},

		"& > svg": {
			zIndex: "1",
			color: "{colors.transparent}",
			transition: "color .2s ease-out",
		},

		"&[data-state='checked'], &[data-state='indeterminate']": {
			borderColor: "{colors.colorPalette.primary}",

			_before: {
				scale: "1",
				opacity: "1",
			},
			"& > svg": {
				color: "inherit",
			},
		},
	},

	variants: {
		size: {
			xs: { boxSize: "calc({sizes.4} * 3)" },
			sm: { boxSize: "calc({sizes.4} * 3.5)" },
			md: { boxSize: "calc({sizes.4} * 4)" },
			lg: { boxSize: "calc({sizes.4} * 5)" },
			xl: { boxSize: "calc({sizes.4} * 6)" },
		},

		variant: {
			primary: {
				shadow: "{shadows.2}",
				bgColor: "{colors.bg.primary}",
				color: "{colors.colorPalette.tertiary}",
				borderColor: "{colors.stroke.tertiary}",
			},
			secondary: {
				shadow: "none",
				bgColor: "{colors.bg.secondary}",
				color: "{colors.colorPalette.tertiary}",
			},
		},
	},

	defaultVariants: {
		size: "md",
		variant: "primary",
	},
});
