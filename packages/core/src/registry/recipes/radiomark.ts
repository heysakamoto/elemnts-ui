import { defineRecipe } from "@pandacss/dev";

export const radiomarkRecipe = defineRecipe({
	className: "radiomark",
	base: {
		flexShrink: 0,
		display: "flex",
		cursor: "pointer",
		alignItems: "center",
		position: "relative",
		shadow: "{shadows.2}",
		rounded: "{radii.full}",
		justifyContent: "center",
		border: "1px solid {colors.stroke.secondary}",
		transition: `
      background-color 100ms ease-in-out
    `,

		_before: {
			scale: "1",
			content: "''",
			position: "absolute",
			bgColor: "{colors.bg.primary}",
			rounded: "{radii.full}",
			boxSize: "{sizes.full}",
			transformOrigin: "center",
			transition: `scale 200ms ease-in,
        background-color 100ms ease-in-out
      `,
		},

		_checked: {
			bgColor: "{colors.colorPalette.primary}",
			borderColor: "{colors.colorPalette.primary}",
			_before: {
				scale: "0.5",
				bgColor: "{colors.colorPalette.tertiary}",
			},
		},

		_disabled: {
			opacity: 0.5,
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
	},

	defaultVariants: {
		size: "md",
	},
});
