import { defineSlotRecipe } from "@pandacss/dev";

export const editableRecipe = defineSlotRecipe({
	className: "editable",
	slots: [
		"root",
		"control",
		"input",
		"area",
		"label",
		"preview",
		"editTrigger",
		"submitTrigger",
		"cancelTrigger",
	],
	base: {
		root: {
			display: "flex",
			flexDirection: "column",
		},
		preview: {
			"&:not([hidden])": {
				zIndex: "0",
				minW: "{sizes.0}",
				px: "{spacing.8}",
				position: "relative",
				rounded: "{radii.8}",
				display: "inline-flex",
				fontSize: "{fontSizes.14}",
				color: "{colors.fg.secondary}",
				py: "calc({spacing.4} * 0.5)",

				_hover: {
					bgColor:
						"color-mix(in oklab, {colors.bg.secondary} 96%, {colors.bg.primary})",
				},
			},
		},
		input: {
			w: "fit-content",
			fieldSizing: "content",
		},
		label: {},
		control: {
			display: "flex",
			alignItems: "center",
		},
	},
});
