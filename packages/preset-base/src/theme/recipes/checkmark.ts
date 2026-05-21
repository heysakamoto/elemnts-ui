import { defineRecipe } from "@pandacss/dev";

export const checkmarkRecipe = defineRecipe({
	className: "checkmark",
	base: {
		flexShrink: "0",
		overflow: "clip",
		cursor: "pointer",
		position: "relative",
		alignItems: "center",
		display: "inline-flex",
		colorPalette: "accent",
		rounded: "{radii.full}",
		justifyContent: "center",

		_before: {
			scale: "0.5",
			opacity: "0",
			content: "''",
			position: "absolute",
			boxSize: "{sizes.full}",
			rounded: "{radii.full}",
			transformOrigin: "center",
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
			border: "0px solid {colors.transparent}",

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
				border: "1px solid {colors.stroke.tertiary}",
				color: "{colors.colorPalette.tertiary}",
				_before: {
					bgColor: "{colors.colorPalette.primary}",
				},
			},
			secondary: {
				shadow: "none",
				border: "none",
				bgColor: "{colors.bg.secondary}",
				color: "{colors.colorPalette.tertiary}",
				_before: {
					bgColor: "{colors.colorPalette.primary}",
				},
			},
		},
	},

	defaultVariants: {
		size: "md",
		variant: "primary",
	},
});
