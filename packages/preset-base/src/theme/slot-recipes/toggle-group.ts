import { defineSlotRecipe } from "@pandacss/dev";

export const toggleGroupRecipe = defineSlotRecipe({
	className: "toggle-group",
	slots: ["root", "item"],
	base: {
		root: {
			display: "flex",

			"& > *": {
				_active: {
					scale: 1,
				},
			},

			_horizontal: {
				flexDirection: "row",
			},

			_vertical: {
				flexDirection: "column",
			},
		},
		item: {},
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

					_horizontal: {
						"& > *:not(:first-child)": {
							marginLeft: "-1px",
						},
					},

					_vertical: {
						"& > *:not(:first-child)": {
							marginTop: "-1px",
						},
					},
				},
			},
		},
	},

	defaultVariants: {
		fullWidth: false,
		attached: false,
	},
});
