import { defineSlotRecipe } from "@pandacss/dev";

export const switchRecipe = defineSlotRecipe({
	className: "switch",
	slots: ["root", "control", "label", "thumb"],
	base: {
		root: {
			display: "flex",
			gap: "{spacing.8}",
			alignItems: "center",
			colorPalette: "accent",
		},
		control: {
			cursor: "pointer",
			position: "relative",
			lineHeight: "{lineHeights.none}",

			rounded: "full",
			alignItems: "center",
			display: "inline-flex",
			justifyContent: "start",
			w: "var(--switch-control-width)",
			h: "var(--control-height)",
			bg: "{colors.bg.secondary}",
			transition: `
      background-color 100ms ease-in-out
      transform 200ms ease-in-out`,

			_checked: {
				bg: "{colors.colorPalette.primary}",
			},

			_active: {
				scale: "0.98",
			},
		},
		thumb: {
			rounded: "full",
			bg: "{colors.white}",
			display: "inline-block",
			w: "var(--switch-thumb-width)",
			h: "var(--switch-thumb-height)",
			marginInlineStart: "{sizes.2}",
			transition: "margin 350ms cubic-bezier(.32, .72, 0, 1)",
			shadow: "{shadows.3}, 0 0 0 1px {colors.stroke.secondary}",

			_active: {
				scale: "0.98",
			},

			_checked: {
				bg: "{colors.white}",
				marginInlineStart:
					"calc(var(--switch-control-width) - var(--switch-thumb-width) - 2px)",
			},
		},
	},
	variants: {
		size: {
			xs: {
				root: {
					"--switch-thumb-width": "calc({sizes.16} + 2px)",
					"--switch-thumb-height": "{sizes.12}",
					"--switch-control-width": "{sizes.32}",
					"--control-height": "{sizes.16}",
				},
			},
			sm: {
				root: {
					"--switch-thumb-width": "{sizes.20}",
					"--switch-thumb-height": "calc({sizes.12} + 2px)",
					"--switch-control-width": "{sizes.36}",
					"--control-height": "calc({sizes.16} + 2px)",
				},
			},
			md: {
				root: {
					"--switch-thumb-width": "calc({sizes.20} + 2px)",
					"--switch-thumb-height": "{sizes.16}",
					"--switch-control-width": "{sizes.40}",
					"--control-height": "{sizes.20}",
				},
			},
			lg: {
				root: {
					"--switch-thumb-width": "{sizes.24}",
					"--switch-thumb-height": "calc({sizes.16} + 2px)",
					"--switch-control-width": "calc({sizes.40} + 4px)",
					"--control-height": "calc({sizes.20} + 2px)",
				},
			},
			xl: {
				root: {
					"--switch-thumb-width": "calc({sizes.24} + 2px)",
					"--switch-thumb-height": "{sizes.20}",
					"--switch-control-width": "{sizes.48}",
					"--control-height": "{sizes.24}",
				},
			},
		},
	},
	defaultVariants: {
		size: "md",
	},
});
