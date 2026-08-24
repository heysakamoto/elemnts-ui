import { defineSlotRecipe } from "@pandacss/dev";

export const comboboxRecipe = defineSlotRecipe({
	className: "combobox",
	slots: [
		"root",
		"trigger",
		"content",
		"control",
		"label",
		"positioner",
		"input",
		"item",
		"list",
		"clearTrigger",
		"itemGroup",
		"itemGroupLabel",
		"itemIndicator",
		"itemText",
		"empty",
		"indicatorGroup",
	],
	base: {
		list: {
			display: "flex",
			flexDirection: "column",
		},
		indicatorGroup: {
			alignItems: "center",
			display: "inline-flex",
		},
		control: {
			display: "flex",
			_disabled: {
				opacity: 0.5,
				userSelect: "none",
				cursor: "not-allowed",
				pointerEvents: "none",
			},
		},
		content: {
			position: "relative",
			transformOrigin: "var(--transform-origin, top)",
			zIndex: "calc(var(--z-index, 9) + var(--layer-index, 0))",

			_open: {
				animation: "scale-fade-in 300ms ease-out",
			},
			_closed: {
				animation: "scale-fade-out 300ms ease-in",
			},
		},
		input: {},
		item: {
			display: "flex",
			"&[data-highlighted]": {
				color: "{colors.colorPalette.primary}",
				bgColor: "{colors.colorPalette.secondary}",
			},
		},
		itemText: {
			flexGrow: 1,
		},
		itemGroupLabel: {},
		trigger: {
			_notHover: {
				"& svg": {
					color: "{colors.icon.secondary}",
				},
			},
		},
		empty: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
	},
});
