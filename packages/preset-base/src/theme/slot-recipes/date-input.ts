import { defineSlotRecipe } from "@pandacss/dev";

export const dateInputRecipe = defineSlotRecipe({
	className: "date-input",
	slots: ["root", "control", "label", "segment", "segmentGroup", "hiddenInput"],
	base: {
		root: {
			display: "flex",
			flexDirection: "column",
			gap: "calc({spacing.4} * 3)",
		},
		control: {
			display: "flex",
			w: "{sizes.full}",
			alignItems: "center",
			gap: "calc({spacing.4} * 2)",
		},
		segmentGroup: {
			flex: "1",
			minW: "0",
			display: "flex",
			cursor: "text",
			alignItems: "center",
			fontSize: "{fontSizes.14}",
			bgColor: "{colors.transparent}",
		},
		segment: {
			minW: "2ch",
			textAlign: "center",
			alignItems: "center",
			display: "inline-flex",
			justifyContent: "center",
			py: "calc({spacing.4} * 0)",
			px: "calc({spacing.4} * 1)",
			color: "{colors.fg.primary}",
			rounded: "calc({radii.4} * 0.5)",
			caretColor: "{colors.transparent}",

			"&[data-placeholder-shown]": {
				color:
					"color-mix(in oklab, {colors.fg.tertiary}, 50% {colors.transparent})",
			},

			"&[data-type=literal]": {
				p: "0",
				minW: "unset",
				userSelect: "none",
				color: "{colors.fg.secondary}",
			},
		},
		label: {},
	},
	variants: {
		variant: {
			primary: {
				segment: {
					"&:focus": {
						color: "{colors.colorPalette.tertiary}",
						bgColor: "{colors.colorPalette.primary}",
					},
				},
			},
			secondary: {
				segment: {
					"&:focus": {
						color: "{colors.colorPalette.primary}",
						bgColor: "{colors.colorPalette.secondary}",
					},
				},
			},
			tertiary: {
				segment: {
					"&:focus": {
						bgColor: "{colors.transparent}",
						border: "{colors.stroke.secondary}",
						color: "{colors.colorPalette.primary}",
					},
				},
			},
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});
