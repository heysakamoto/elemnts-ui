import { defineSlotRecipe } from "@pandacss/dev";

export const ratingGroupRecipe = defineSlotRecipe({
	className: "rating-group",
	slots: ["root", "control", "label", "item", "itemIndicator"],
	base: {
		root: {
			_readOnly: {
				cursor: "not-allowed",
			},
		},
		label: {},
		control: {
			display: "flex",
			_disabled: {
				opacity: 0.5,
			},
		},
		item: {
			position: "relative",
			display: "inline-flex",

			"&:not([data-disabled])": {
				cursor: "pointer",
			},

			"& svg": {
				inset: "{sizes.0}",
				position: "absolute",
				boxSize: "{sizes.full}",
			},

			"& svg:first-of-type": {
				color: "{colors.icon.tertiary}",
				stroke: "{colors.icon.tertiary}",
			},

			"& svg:last-of-type": {
				fill: "{colors.transparent}",
				color: "{colors.transparent}",
			},

			_highlighted: {
				"& svg:last-of-type": {
					fill: "{colors.colorPalette.primary}",
					color: "{colors.colorPalette.primary}",
				},
				"&:is([data-half])": {
					"& svg:last-of-type": {
						clipPath: "inset(0 50% 0 0)",
					},
				},
			},

			_focusVisible: {
				outline: "none",
			},
		},
	},
	variants: {},
	defaultVariants: {},
});
