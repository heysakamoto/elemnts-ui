import { defineSlotRecipe } from "@pandacss/dev";

export const menuRecipe = defineSlotRecipe({
	className: "menu",
	slots: [
		"content",
		"separator",
		"trigger",
		"indicator",
		"item",
		"itemText",
		"itemGroup",
		"itemIndicator",
		"itemGroupLabel",
		"arrow",
		"arrowTip",
		"contextTrigger",
		"positioner",
		"triggerItem",
		"radioItemGroup",
		"radioItem",
		"checkboxItem",
	],
	base: {
		positioner: {
			"--z-index": "{zIndex.overlay}",
		},
		content: {
			_focusVisible: {
				outline: "none",
			},
			position: "relative",
			transformOrigin: "var(--transform-origin, bottom)",
			zIndex: "calc(var(--z-index, 9) + var(--layer-index, 0))",

			_open: {
				animation: "scale-fade-in 200ms ease-out",
			},
			_closed: {
				animation: "scale-fade-out 200ms ease-in",
			},
		},
		contextTrigger: {
			fontSize: "14",
			w: "{sizes.full}",
			alignItems: "center",
			display: "inline-flex",
			justifyContent: "center",
		},
		itemText: {
			flexGrow: 1,
			color: "inherit",
		},
		itemGroup: {
			display: "flex",
			flexDirection: "column",
		},
		itemGroupLabel: {
			fontSize: "{fontSizes.12}",
			color: "{colors.fg.tertiary}",
		},
	},
});
