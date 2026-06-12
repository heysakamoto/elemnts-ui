import { defineRecipe } from "@pandacss/dev";

export const anchorRecipe = defineRecipe({
	className: "anchor",

	base: {
		cursor: "pointer",
		gap: "{spacing.4}",
		position: "relative",
		userSelect: "none",
		alignItems: "center",
		display: "inline-flex",
		color: "{colors.colorPalette.primary}",

		_before: {
			left: 0,
			opacity: "0",
			content: '""',
			h: "{sizes.1}",
			w: "{sizes.full}",
			position: "absolute",
			bottom: "{spacing.0}",
			bg: "{colors.current}",
			transition: "opacity 150ms ease-out",
		},

		_hover: {
			color:
				"color-mix(in oklab, {colors.colorPalette.primary} 96%, {colors.fg.primary})",
		},
	},

	variants: {
		variant: {
			primary: {
				_before: {
					opacity: "1",
				},
			},
			secondary: {
				_hover: {
					_before: {
						opacity: "1",
					},
				},
			},
			tertiary: {
				_before: {
					opacity: "0",
				},
			},
		},
	},

	defaultVariants: {
		variant: "primary",
	},
});
