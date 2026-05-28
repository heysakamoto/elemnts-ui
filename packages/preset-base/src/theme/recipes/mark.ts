import { defineRecipe } from "@pandacss/dev";

export const markRecipe = defineRecipe({
	className: "mark",
	base: {
		zIndex: "0",
		position: "relative",
		whiteSpace: "nowrap",
		bg: "{colors.transparent}",
		px: "calc({spacing.2} * 1)",

		_before: {
			top: "50%",
			right: "0",
			left: "50%",
			bottom: "0",
			zIndex: "-1",
			content: '""',
			color: "inherit",
			position: "absolute",
			display: "inline-flex",
			translate: "-50% -50%",
			boxSize: "{sizes.full}",
			borderRadius: "inherit",
			border: "1px solid var(--stroke)",
		},
	},
	variants: {
		variant: {
			primary: {
				color: "{colors.colorPalette.tertiary}",
				_before: {
					bgColor: "{colors.colorPalette.primary}",
				},
			},
			secondary: {
				color: "{colors.colorPalette.primary}",
				_before: {
					bgColor: "{colors.colorPalette.secondary}",
				},
			},
			tertiary: {
				px: "calc({spacing.2} * 0)",
				color: "{colors.colorPalette.primary}",
				_before: {
					bgColor: "{colors.transparent}",
				},
			},
			underline: {
				px: "calc({spacing.2} * 0)",
				color: "{colors.colorPalette.primary}",

				_before: {
					bgColor: "{colors.transparent}",
					borderBottom: "1px solid {colors.current}",
				},
			},
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});
