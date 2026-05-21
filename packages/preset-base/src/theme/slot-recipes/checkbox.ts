import { defineSlotRecipe } from "@pandacss/dev";

export const checkboxRecipe = defineSlotRecipe({
	className: "checkbox",
	slots: ["root", "indicator", "control", "label", "group"],
	base: {
		root: {
			gap: "{spacing.8}",
			alignItems: "center",
			display: "inline-flex",
			colorPalette: "accent",
			justifyContent: "start",

			_focusVisible: {
				shadow: "none",
				outline: "none",

				"& > [data-part=control]": {
					shadow: "none",
					outline: "none",
				},
			},
		},
		label: {
			_focusVisible: {
				shadow: "none",
				outline: "none",
			},
		},
		group: {
			display: "flex",
			flexDirection: "column",
			gap: "calc({spacing.4} * 3)",

			_vertical: {
				flexDirection: "column",
			},
		},
		control: {
			flexShrink: "0",
			rounded: "full",
			overflow: "clip",
			cursor: "pointer",
			position: "relative",
			alignItems: "center",
			display: "inline-flex",
			justifyContent: "center",
			bgColor: "var(--checkbox-control-bg)",
			color: "var(--checkbox-control-color)",
			boxSize: "var(--checkbox-control-size)",
			shadow: "var(--checkbox-control-shadow)",
			border: "var(--checkbox-control-border)",

			_before: {
				scale: "0.5",
				opacity: "0",
				content: "''",
				rounded: "inherit",
				position: "absolute",
				boxSize: "{sizes.full}",
				transformOrigin: "center",
				bgColor: "var(--checkbox-control-bg-checked)",
				transition: `
      scale 150ms ease,
      border 100ms ease-out,
      opacity 100ms ease-out,
      background-color 100ms ease-out
      `,
			},

			"&:is([data-state='checked']), &:is([data-state='indeterminate'])": {
				shadow: "none",
				borderColor: "{colors.current}",
				_before: {
					scale: "1",
					opacity: "1",
				},
			},
		},
		indicator: {
			zIndex: "1",
			alignItems: "center",
			display: "inline-flex",
			boxSize: "{sizes.full}",
			justifyContent: "center",
			color: "{colors.transparent}",

			"& > svg": {
				color: "inherit",
				transition: "color .2s ease-out",
			},

			"&:is([data-state='checked']), &:is([data-state='indeterminate'])": {
				color: "inherit",
			},
		},
	},

	variants: {
		size: {
			xs: {
				root: {
					"--checkbox-control-size": "calc({sizes.4} * 3)",
				},
			},
			sm: {
				root: {
					"--checkbox-control-size": "calc({sizes.4} * 3.5)",
				},
			},
			md: {
				root: {
					"--checkbox-control-size": "calc({sizes.4} * 4)",
				},
			},
			lg: {
				root: {
					"--checkbox-control-size": "calc({sizes.4} * 5)",
				},
			},
			xl: {
				root: {
					"--checkbox-control-size": "calc({sizes.4} * 6)",
				},
			},
		},

		variant: {
			primary: {
				root: {
					"--checkbox-control-shadow": "{shadows.2}",
					"--checkbox-control-bg": "{colors.transparent}",
					"--checkbox-control-color": "{colors.colorPalette.tertiary}",
					"--checkbox-control-bg-checked": "{colors.colorPalette.primary}",
					"--checkbox-control-border": "1px solid {colors.stroke.secondary}",
				},
			},
			secondary: {
				root: {
					"--checkbox-control-bg": "{colors.colorPalette.secondary}",
					"--checkbox-control-color": "{colors.colorPalette.primary}",
					"--checkbox-control-bg-checked": "{colors.colorPalette.secondary}",
				},
			},
			tertiary: {
				control: {
					"--checkbox-control-bg": "{colors.transparent}",
					"--checkbox-control-bg-checked": "{colors.transparent}",
					"--checkbox-control-color": "{colors.colorPalette.primary}",
				},
			},
		},
	},

	defaultVariants: {
		size: "md",
		variant: "primary",
	},
});
