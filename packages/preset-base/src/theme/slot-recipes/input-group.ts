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
			fontSize: "{fontSizes.14}",
			bgColor: "var(--input-group-bg)",
			h: "var(--input-group-size)",
			color: "var(--colors-system-fg)",
			shadow: "var(--input-group-shadow, none)",
			rounded: "var(--input-group-radii, {radii.12})",
			borderColor: "var(--input-group-border-color, {colors.transparent})",

			_disabled: {
				filter: "grayscale(100%)",
			},

			"& * input": {
				_disabled: {},
			},

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

			"&:has(:is(input, textarea):is(:invalid, [data-invalid], [aria-invalid=true])), &:is(:invalid, [data-invalid], [aria-invalid=true])":
				{
					outlineOffset: "-1px",
					outline: "2px solid {colors.destructive.primary}",
				},
		},
		addon: {
			flexShrink: 0,
			h: "{sizes.full}",
			alignItems: "center",
			display: "inline-flex",
			justifyContent: "center",
		},
		input: {
			flexGrow: 1,
			alignItems: "center",
			fontFamily: "inherit",
			display: "inline-flex",
			boxSize: "{sizes.full}",
			fontSize: "{fontSizes.14}",
			lineHeight: "{lineHeights.none}",

			_focus: {
				outline: "none",
			},
		},
		textarea: {
			flexGrow: 1,
			resize: "vertical",
			alignItems: "center",
			fontFamily: "inherit",
			display: "inline-flex",
			boxSize: "{sizes.full}",
			lineHeight: "{lineHeights.sm}",

			_focus: {
				outline: "none",
			},
		},
	},
	variants: {
		size: {
			xs: {
				root: {
					"--input-group-size": "calc({sizes.4} * 6)",
				},
			},
			sm: {
				root: {
					"--input-group-size": "calc({sizes.4} * 7)",
				},
			},
			md: {
				root: {
					"--input-group-size": "calc({sizes.4} * 8)",
				},
			},
			lg: {
				root: {
					"--input-group-size": "calc({sizes.4} * 9)",
				},
			},
			xl: {
				root: {
					"--input-group-size": "calc({sizes.4} * 10)",
				},
			},
		},

		variant: {
			primary: {
				root: {
					"--input-group-shadow": "{shadows.2}",
					"--input-group-bg": "{colors.bg.tertiary}",
					"--input-group-border-color": "{colors.stroke.secondary}",
				},
			},
			secondary: {
				root: {
					"--input-group-bg": "{colors.bg.secondary}",
				},
			},
			tertiary: {
				root: {
					"--input-group-bg": "{colors.transparent}",
				},
			},
		},
	},
	defaultVariants: {
		size: "md",
		variant: "primary",
	},
});
