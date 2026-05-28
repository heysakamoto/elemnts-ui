import { defineSlotRecipe } from "@pandacss/dev";

export const wheelPickerRecipe = defineSlotRecipe({
	className: "wheel-picker",
	slots: ["root"],
	base: {
		root: {
			"& [data-rwp-wrapper]": {
				display: "flex",
				userSelect: "none",
				width: "{sizes.full}",
				overflowY: "hidden",
				overflowX: "visible",
				position: "relative",
				alignItems: "stretch",

				"& ul": {
					m: "0",
					p: "0",
					listStyle: "none",
				},
			},
			"& [data-rwp]": {
				flex: "1",
				position: "relative",

				_focus: {
					outline: "none",
				},

				"&:first-child": {
					"& [data-rwp-highlight-wrapper]": {
						roundedTopLeft: "var(--wheel-picker-radius)",
						roundedBottomLeft: "var(--wheel-picker-radius)",
					},
				},
				"&:last-child": {
					"& [data-rwp-highlight-wrapper]": {
						roundedTopRight: "var(--wheel-picker-radius)",
						roundedBottomRight: "var(--wheel-picker-radius)",
					},
				},
				"&:only-child": {
					"& [data-rwp-highlight-wrapper]": {
						rounded: "var(--wheel-picker-radius)",
					},
				},
			},
			"& [data-rwp-options]": {
				h: "0px",
				mx: "auto",
				top: "50%",
				left: "0px",
				display: "block",
				w: "{sizes.full}",
				position: "absolute",
				willChange: "transform",
				backfaceVisibility: "hidden",
				transformStyle: "preserve-3d",
			},
			"& [data-rwp-highlight-list]": {
				position: "absolute",
				width: "{sizes.full}",
			},
			"& [data-rwp-option]": {
				top: "0",
				left: "0",
				w: "{sizes.full}",
				position: "absolute",
				willChange: "visibility",
				fontSize: "{fontSizes.16}",
				color: "{colors.fg.secondary}",
				lineHeight: "{lineHeights.none}",
			},
			"& [data-rwp-option], & [data-rwp-highlight-item]": {
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				fontSize: "{fontSizes.16}",
				gap: "calc({spacing.4} * 1.5)",

				_disabled: {
					opacity: 0.5,
				},
			},
			"& [data-rwp-highlight-wrapper]": {
				top: "50%",
				w: "{sizes.full}",
				fontWeight: "500",
				overflow: "hidden",
				position: "absolute",
				fontSize: "{fontSizes.16}",
				transform: "translateY(-50%)",
				lineHeight: "{lineHeights.none}",
				color: "var(--wheel-picker-color)",
				border: "var(--wheel-picker-border, none)",
				shadow: "var(--wheel-picker-shadow, none)",
				bgColor: "var(--wheel-picker-bg, {colors.bg.tertiary})",

				"&:is([data-rwp-focused])": {},
			},
		},
	},
	variants: {
		radius: {
			xs: {
				root: { "--wheel-picker-radius": "calc({radii.4} * 1)" },
			},
			sm: {
				root: { "--wheel-picker-radius": "calc({radii.4} * 2)" },
			},
			md: {
				root: { "--wheel-picker-radius": "calc({radii.4} * 3)" },
			},
			lg: {
				root: { "--wheel-picker-radius": "calc({radii.4} * 4)" },
			},
			xl: {
				root: { "--wheel-picker-radius": "calc({radii.4} * 5)" },
			},
			none: {
				root: { "--wheel-picker-radius": "calc({radii.4} * 0)" },
			},
			full: {
				root: { "--wheel-picker-radius": "{radii.full}" },
			},
		},
		variant: {
			primary: {
				root: {
					"--wheel-picker-bg": "{colors.colorPalette.primary}",
					"--wheel-picker-color": "{colors.colorPalette.tertiary}",
				},
			},
			secondary: {
				root: {
					"--wheel-picker-bg": "{colors.colorPalette.secondary}",
					"--wheel-picker-color": "{colors.colorPalette.primary}",
				},
			},
			tertiary: {
				root: {
					"--wheel-picker-shadow": "{shadows.2}",
					"--wheel-picker-color": "{colors.colorPalette.primary}",
					"--wheel-picker-border": "1px solid {colors.stroke.tertiary}",
				},
			},
		},
	},
	defaultVariants: {
		radius: "md",
		variant: "primary",
	},
});
