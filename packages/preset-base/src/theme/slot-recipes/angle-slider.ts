import { defineSlotRecipe } from "@pandacss/dev";

export const angleSliderRecipe = defineSlotRecipe({
	className: "angle-slider",
	slots: [
		"root",
		"control",
		"label",
		"marker",
		"markerGroup",
		"thumb",
		"valueText",
	],
	base: {
		thumb: {
			w: "{sizes.4}",
			outline: "none",
			h: "{sizes.full}",
			top: "{spacing.0}",
			position: "absolute",
			left: "calc(50% - {sizes.4} / 2)",

			_before: {
				content: '""',
				w: "{sizes.20}",
				h: "{sizes.20}",
				top: "{spacing.0}",
				right: "{spacing.0}",
				position: "absolute",
				bg: "{colors.blue.fill}",
				rounded: "{radii.full}",
			},
		},
		control: {
			boxSize: "160px",
			position: "relative",
			rounded: "{radii.full}",
			border: "8px solid {colors.bg.tertiary}",
		},
		valueText: {
			textAlign: "center",
		},
		label: {},
	},
});
