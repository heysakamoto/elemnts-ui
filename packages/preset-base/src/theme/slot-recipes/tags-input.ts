import { defineSlotRecipe } from "@pandacss/dev";

export const tagsInputRecipe = defineSlotRecipe({
	className: "tags-input",
	slots: [
		"root",
		"control",
		"input",
		"label",
		"item",
		"clearTrigger",
		"itemPreview",
		"itemInput",
		"itemText",
		"hiddenInput",
		"itemDeleteTrigger",
	],
	base: {
		root: {
			display: "flex",
			flexDirection: "column",
			gap: "calc({spacing.4} * 2)",

			_disabled: {
				opacity: "0.5",
				cursor: "not-allowed",
				pointerEvents: "none",
			},

			"& > input:focus-visible, & > textarea:focus-visible": {
				shadow: "none",
				outline: "none",
			},
		},
		control: {
			h: "auto",
			display: "flex",
			flexWrap: "wrap",
			gap: "{spacing.4}",
			alignItems: "center",
		},
		input: {
			w: "{sizes.full}",
			fontFamily: "inherit",
			alignItems: "center",
			display: "inline-flex",
			lineHeight: "{lineHeights.none}",

			px: "{spacing.4}",
			flex: "1 0 32px",
			fieldSizing: "content",

			"&[data-empty]": {
				px: "{spacing.8}",
			},

			_focusVisible: {
				shadow: "none",
				outline: "none",
			},
		},
		itemText: {
			color: "inherit",
			fontSize: "{fontSizes.14}",
			lineHeight: "{lineHeights.none}",
			letterSpacing: "{letterSpacings.sm}",
		},
		item: {
			alignItems: "center",
			display: "inline-flex",
			justifyContent: "center",

			_notHover: {
				_svg: { color: "icon.secondary" },
			},
		},
		itemDeleteTrigger: {},
		itemPreview: {
			gap: "{spacing.4}",
			alignItems: "center",
			display: "inline-flex",
		},
		itemInput: {
			"&:focus-visible, &:focus": {
				outline: "none",
			},

			minW: ".75rem",
			textAlign: "start",
			lineHeight: "{lineHeights.none}",
			fieldSizing: "content",
		},
	},
});
