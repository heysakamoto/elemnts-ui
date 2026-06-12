import { defineSlotRecipe } from "@pandacss/dev";

export const tableRecipe = defineSlotRecipe({
	className: "table",
	slots: [
		"row",
		"root",
		"cell",
		"body",
		"header",
		"footer",
		"caption",
		"columnHeader",
		"columnGroup",
	],
	base: {
		root: {
			w: "{sizes.full}",
			textAlign: "start",
			verticalAlign: "top",
			borderCollapse: "collapse",
			fontVariantNumeric: "lining-nums tabular-nums",
		},
		row: {
			_selected: {
				bgColor: "{colors.transparent}",
			},
		},
		cell: {
			textAlign: "start",
			alignItems: "center",
			color: "{colors.fg.primary}",
		},
		columnHeader: {
			fontWeight: "500",
			textAlign: "start",
			color: "{colors.fg.secondary}",
		},
		caption: {
			fontWeight: "500",
			textAlign: "start",
			fontSize: "{fontSizes.12}",
			color: "{colors.fg.tertiary}",
		},
		footer: {
			fontWeight: "500",
			textAlign: "start",
		},
	},
	variants: {
		interactive: {
			true: {
				body: {
					"& tr": {
						_hover: {
							bg: "{colors.colorPalette.secondary}",
						},
					},
				},
			},
		},

		pinnedHeader: {
			true: {
				header: {
					"&:has(tr)": {
						top: "0",
						zIndex: 1,
						position: "sticky",
					},
				},
			},
		},

		alternatingRows: {
			true: {
				row: {
					"&:nth-of-type(odd) td": {
						bgColor: "{colors.bg.secondary}",
					},
				},
			},
		},

		showColumnDividers: {
			true: {
				columnHeader: {
					"&:not(:last-of-type)": {
						borderInlineEndWidth: "1px",
					},
				},
				cell: {
					"&:not(:last-of-type)": {
						borderInlineEndWidth: "1px",
					},
				},
			},
		},

		variant: {
			primary: {
				columnHeader: {
					borderBottomWidth: "1px",
				},
				cell: {
					borderBottomWidth: "1px",
				},
				row: {
					bgColor: "{colors.transparent}",
				},
			},

			secondary: {
				root: {
					boxShadow: "0 0 0 1px {colors.stroke.secondary}",
				},
				columnHeader: {
					borderBottomWidth: "1px",
				},
				header: {
					bg: "{colors.bg.secondary}",
				},
				row: {
					"&:not(:last-of-type)": {
						borderBottomWidth: "1px",
					},
				},
				footer: {
					borderTopWidth: "1px",
				},
			},
		},

		size: {
			xs: {
				root: {
					fontSize: "{fontSizes.14}",
				},
				columnHeader: {
					px: "calc({spacing.4} * 0.5)",
					py: "calc({spacing.4} * 0.5)",
				},
				cell: {
					px: "calc({spacing.4} * 0.5)",
					py: "calc({spacing.4} * 0.5)",
				},
			},
			sm: {
				root: {
					fontSize: "{fontSizes.14}",
				},
				columnHeader: {
					px: "calc({spacing.4} * 1)",
					py: "calc({spacing.4} * 1)",
				},
				cell: {
					px: "calc({spacing.4} * 1)",
					py: "calc({spacing.4} * 1)",
				},
			},
			md: {
				root: {
					fontSize: "{fontSizes.14}",
				},
				columnHeader: {
					px: "calc({spacing.4} * 1.5)",
					py: "calc({spacing.4} * 1.5)",
				},
				cell: {
					px: "calc({spacing.4} * 1.5)",
					py: "calc({spacing.4} * 1.5)",
				},
			},
			lg: {
				root: {
					fontSize: "{fontSizes.14}",
				},
				columnHeader: {
					px: "calc({spacing.4} * 2)",
					py: "calc({spacing.4} * 2)",
				},
				cell: {
					px: "calc({spacing.4} * 2)",
					py: "calc({spacing.4} * 2)",
				},
			},
			xl: {
				root: {
					fontSize: "{fontSizes.16}",
				},
				columnHeader: {
					px: "calc({spacing.4} * 2.5)",
					py: "calc({spacing.4} * 2.5)",
				},
				cell: {
					px: "calc({spacing.4} * 2.5)",
					py: "calc({spacing.4} * 2.5)",
				},
			},
		},
	},
	defaultVariants: {
		size: "md",
		variant: "primary",
	},
});
