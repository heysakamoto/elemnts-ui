import { defineSlotRecipe } from "@pandacss/dev";

export const inputGroupRecipe = defineSlotRecipe({
	className: "input-group",
	slots: ["textarea", "root", "addon", "input"],
	base: {
		root: {
			display: "flex",
			overflow: "clip",
			w: "{sizes.full}",
			border: "1px solid",
			alignItems: "center",
			position: "relative",
			bg: "var(--input-group-bg)",
			h: "var(--input-group-height)",
			color: "var(--colors-system-fg)",
			shadow: "var(--input-group-shadow)",
			rounded: "var(--input-group-radii, {radii.12})",
			borderColor: "var(--input-group-border-color, {colors.transparent})",

			_vertical: {
				flexDirection: "column",
			},

			_horizontal: {
				flexDirection: "row",
			},

			"&:has(input:focus-visible), &:has(textarea:focus-visible)": {
				outlineOffset: "-1px",
				outline: "2px solid {colors.accent.primary}",
			},
		},
		addon: {
			h: "{sizes.full}",
			alignItems: "center",
			display: "inline-flex",
			justifyContent: "center",
		},
		input: {
			w: "{sizes.full}",
			fontFamily: "inherit",
			alignItems: "center",
			display: "inline-flex",
			lineHeight: "{lineHeights.none}",

			_focus: {
				outline: "none",
			},
		},
		textarea: {
			w: "{sizes.full}",
			fontFamily: "inherit",
			alignItems: "center",
			display: "inline-flex",
			resize: "vertical",
			lineHeight: "{lineHeights.sm}",

			_focus: {
				outline: "none",
			},
		},
	},
	variants: {
		size: {
			auto: {
				root: {
					"--input-group-height": "auto",
					flexWrap: "wrap",
				},
			},
			xs: {
				root: {
					"--input-group-height": "{sizes.28}",
				},
			},
			sm: {
				root: {
					"--input-group-height": "{sizes.32}",
				},
			},
			md: {
				root: {
					"--input-group-height": "{sizes.36}",
				},
			},
			lg: {
				root: {
					"--input-group-height": "{sizes.40}",
				},
			},
			xl: {
				root: {
					"--input-group-height": "{sizes.48}",
				},
			},
		},

		variant: {
			primary: {
				root: {
					"--input-group-bg": "{colors.bg.tertiary}",
					"--input-group-shadow": "{shadows.2}",
					"--input-group-border-color": "{colors.stroke.secondary}",
				},
			},
			secondary: {
				root: {
					"--input-group-shadow": "{shadows.none}",
					"--input-group-bg": "{colors.bg.secondary}",
					"--input-group-stroke": "{colors.transparent}",
				},
			},
			tertiary: {
				root: {
					"--input-group-shadow": "{shadows.none}",
					"--input-group-bg": "{colors.transparent}",
					"--input-group-stroke": "{colors.transparent}",
				},
			},
		},

		noFocus: {
			true: {
				root: {
					_focusWithin: {
						outline: "none",
						shadow: "{shadows.none}",
					},
				},
			},
		},
	},
	defaultVariants: {
		size: "md",
		noFocus: false,
		variant: "primary",
	},
});
