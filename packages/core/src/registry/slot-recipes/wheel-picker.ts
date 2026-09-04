import { defineSlotRecipe } from "@pandacss/dev";

export const wheelPickerRecipe = defineSlotRecipe({
	className: "wheel-picker",
	slots: ["root"],
	base: {
		root: {
			"--radius": "calc({radii.4} * 2.5)",

			"& [data-rwp-wrapper]": {
				display: "flex",
				w: "{sizes.full}",
				userSelect: "none",
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

				"& [data-rwp-highlight-wrapper]": {},

				"&:first-child": {
					"& [data-rwp-highlight-wrapper]": {
						roundedTopLeft: "var(--radius)",
						roundedBottomLeft: "var(--radius)",
					},
				},
				"&:last-child": {
					"& [data-rwp-highlight-wrapper]": {
						roundedTopRight: "var(--radius)",
						roundedBottomRight: "var(--radius)",
					},
				},
				"&:only-child": {
					"& [data-rwp-highlight-wrapper]": {
						rounded: "var(--radius)",
					},
				},

				_disabled: {
					opacity: 0.5,
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
				fontWeight: "400",
				alignItems: "center",
				justifyContent: "center",
				fontSize: "{fontSizes.16}",
				gap: "calc({spacing.4} * 3)",

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
				color: "var(--color)",
				border: "var(--border, none)",
				shadow: "var(--shadow, none)",
				bgColor: "var(--bg, {colors.bg.tertiary})",

				"&:is([data-rwp-focused])": {},
			},
		},
	},
	variants: {
		variant: {
			primary: {
				root: {
					"--bg": "{colors.colorPalette.primary}",
					"--color": "{colors.colorPalette.tertiary}",
				},
			},
			secondary: {
				root: {
					"--bg": "{colors.colorPalette.secondary}",
					"--color": "{colors.colorPalette.primary}",
				},
			},
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});
