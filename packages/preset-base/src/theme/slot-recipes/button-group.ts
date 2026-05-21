import { defineSlotRecipe } from "@pandacss/dev";

export const buttonGroupRecipe = defineSlotRecipe({
	className: "btn-group",
	slots: ["root", "separator"],
	description: "A container for grouping related buttons",

	base: {
		root: {
			display: "flex",
			colorPalette: "accent",

			"& > *": {
				_active: {
					scale: 1,
				},
			},
		},
		separator: {
			zIndex: 1,
			opacity: 0.2,
			position: "absolute",
			display: "inline-block",
			bgColor: "{colors.current}",
			rounded: "calc({radii.4} * 99)",
		},
	},

	variants: {
		fullWidth: {
			true: {
				root: {
					w: "{sizes.full}",
					"& > *": {
						flex: "1 1 0%",
					},
				},
			},
		},

		attached: {
			false: {
				root: {
					gap: "calc({sizes.4} * 1)",
				},
			},

			true: {
				root: {
					"& > *": {
						rounded: 0,
					},
				},
			},
		},

		orientation: {
			horizontal: {
				root: {
					flexDirection: "row",
				},
				separator: {
					w: 1,
					h: "50%",
					inset: "auto 0px auto auto",
				},
			},
			vertical: {
				root: {
					flexDirection: "column",
				},
				separator: {
					w: "50%",
					h: 1,
					inset: "auto auto 0px auto",
				},
			},
		},
	},

	compoundVariants: [
		{
			attached: true,
			orientation: "horizontal",
			css: {
				root: {
					"& > *:not(:first-child)": {
						marginLeft: "-1px",
					},
				},
			},
		},

		{
			attached: true,
			orientation: "vertical",
			css: {
				root: {
					"& > *:not(:first-child)": {
						marginTop: "-1px",
					},
				},
			},
		},
	],

	defaultVariants: {
		fullWidth: false,
		attached: false,
		orientation: "horizontal",
	},
});
