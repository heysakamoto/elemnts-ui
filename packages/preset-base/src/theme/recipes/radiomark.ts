import { defineRecipe } from "@pandacss/dev";

export const radiomarkRecipe = defineRecipe({
	className: "radiomark",
	base: {
		flexShrink: 0,
		display: "flex",
		cursor: "pointer",
		alignItems: "center",
		position: "relative",
		boxSize: "var(--size)",
		colorPalette: "accent",
		rounded: "{radii.full}",
		justifyContent: "center",
		shadow: "{shadows.2}",
		border: "1px solid {colors.stroke.secondary}",
		transition: `
      shadow 100ms ease-in-out,
      background-color 100ms ease-in-out
    `,

		_before: {
			scale: "1",
			content: "''",
			position: "absolute",
			bg: "{colors.bg.primary}",
			rounded: "{radii.full}",
			boxSize: "{sizes.full}",
			transformOrigin: "center",
			transition: `scale 200ms ease-in,
        background-color 100ms ease-in-out
      `,
		},

		_checked: {
			shadow: "none",
			bg: "{colors.colorPalette.primary}",
			borderColor: "{colors.colorPalette.primary}",
			_before: {
				scale: "0.5",
				bg: "{colors.colorPalette.tertiary}",
			},
		},
	},

	variants: {
		size: {
			xs: { "--size": "calc({sizes.4} * 3)" },
			sm: { "--size": "calc({sizes.4} * 3.5)" },
			md: { "--size": "calc({sizes.4} * 4)" },
			lg: { "--size": "calc({sizes.4} * 5)" },
			xl: { "--size": "calc({sizes.4} * 6)" },
		},
	},

	defaultVariants: {
		size: "sm",
	},
});
