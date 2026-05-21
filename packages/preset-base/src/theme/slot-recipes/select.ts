import { defineSlotRecipe } from "@pandacss/dev";

export const selectRecipe = defineSlotRecipe({
	className: "select",
	slots: [
		"root",
		"label",
		"item",
		"indicator",
		"itemText",
		"content",
		"list",
		"positioner",
		"trigger",
		"clearTrigger",
		"itemIndicator",
		"itemGroup",
		"itemGroupLabel",
		"control",
		"hiddenSelect",
		"valueText",
	],
	base: {
		valueText: {
			flexGrow: 1,
			color: "inherit",
			textAlign: "start",
			overflow: "hidden",
			whiteSpace: "nowrap",
			textOverflow: "ellipsis",
			fontSize: "{fontSizes.14}",
			lineHeight: "{lineHeights.xs}",
		},
		control: {
			display: "flex",
			w: "{sizes.full}",
			alignItems: "center",

			"& svg": {
				color: "{colors.icon.secondary}",
			},

			_hover: {
				"& svg": {
					color: "inherit",
				},
			},
		},
		content: {
			position: "relative",
			w: "var(--reference-width)",
			transformOrigin: "var(--transform-origin, top)",
			zIndex: "calc(var(--z-index, 9) + var(--layer-index, 0))",

			_open: {
				animation: "scale-fade-in 200ms ease-out",
			},
			_closed: {
				animation: "scale-fade-out 200ms ease-in",
			},
		},
		trigger: {
			w: "{sizes.full}",
			userSelect: "none",
			display: "inline-flex",

			"& svg": {
				color: "{colors.icon.secondary}",
			},

			"&:is([data-placeholder-shown])": {
				color: "{colors.fg.tertiary}",
			},
		},
		itemText: {
			flexGrow: 1,
			color: "inherit",
		},
		itemGroupLabel: {
			fontSize: "{fontSizes.12}",
			color: "{colors.fg.tertiary}",
		},
		itemIndicator: { color: "inherit" },
		positioner: {
			w: "var(--reference-width)",
		},
	},
});
