import { defineSlotRecipe } from "@pandacss/dev";

export const datePickerRecipe = defineSlotRecipe({
	className: "date-picker",
	slots: [
		"root",
		"trigger",
		"content",
		"control",
		"label",
		"positioner",
		"input",
		"clearTrigger",
		"table",
		"nextTrigger",
		"prevTrigger",
		"view",
		"monthSelect",
		"rangeText",
		"tableBody",
		"tableCell",
		"tableCellTrigger",
		"tableHead",
		"tableHeader",
		"tableRow",
		"viewTrigger",
		"viewControl",
		"yearSelect",
		"presetTrigger",
	],
	base: {
		root: {
			"&:is([data-readonly])": {
				pointerEvents: "none",
			},
			_disabled: {
				opacity: "0.5",
				pointerEvents: "none",
				cursor: "not-allowed",
			},
		},
		control: {
			display: "flex",
		},
		content: {
			"--date-picker-border-radius": "{radii.12}",

			position: "relative",
			colorPalette: "accent",
			transformOrigin: "var(--transform-origin, top)",
			zIndex: "calc(var(--z-index, 9) + var(--layer-index, 0))",

			_open: {
				animation: "scale-fade-in 200ms ease-out",
			},
			_closed: {
				animation: "scale-fade-out 200ms ease-in",
			},
		},
		label: {},
		table: {
			display: "flex",
			w: "{sizes.full}",
			borderSpacing: "0",
			gap: "{spacing.12}",
			flexDirection: "column",
			borderCollapse: "separate",
		},
		tableHeader: {
			fontWeight: "400",
			alignItems: "center",
			display: "inline-flex",
			justifyContent: "center",
			fontSize: "{fontSizes.13}",
			color: "{colors.fg.tertiary}",
			lineHeight: "{lineHeights.none}",
		},
		tableBody: {
			display: "flex",
			w: "{sizes.full}",
			gap: "{spacing.4}",
			flexDirection: "column",
		},
		tableRow: {
			display: "grid",
			w: "{sizes.full}",

			"&:is([data-view=day])": {
				gridTemplateColumns: "repeat(7, 1fr)",
			},
			"&:is([data-view=month])": {
				gridTemplateColumns: "repeat(4, 1fr)",
			},
			"&:is([data-view=year])": {
				gridTemplateColumns: "repeat(4, 1fr)",
			},
		},
		tableCell: {
			w: "{sizes.full}",
			alignItems: "center",
			aspectRatio: "1 / 1",
			display: "inline-flex",
			justifyContent: "center",
			overflow: "hidden",

			"&:is(:first-child)": {
				borderTopLeftRadius: "var(--date-picker-border-radius)",
				borderBottomLeftRadius: "var(--date-picker-border-radius)",
			},
			"&:is(:last-child)": {
				borderTopRightRadius: "var(--date-picker-border-radius)",
				borderBottomRightRadius: "var(--date-picker-border-radius)",
			},
		},
		tableCellTrigger: {
			cursor: "pointer",
			alignItems: "center",
			display: "inline-flex",
			boxSize: "{sizes.full}",
			justifyContent: "center",
			fontSize: "{fontSizes.14}",
			lineHeight: "{lineHeights.none}",
			rounded: "var(--date-picker-border-radius)",

			"&:not([data-selected], :disabled, [data-in-range]):is([data-today])": {
				fontWeight: "500",
				textDecoration: "underline",
				color: "{colors.colorPalette.primary}",

				_hover: {
					color: "{colors.colorPalette.primary}",
				},
			},

			"&:not([data-selected], :disabled, [data-in-range], [data-disabled])": {
				_hover: {
					color: "{colors.fg.primary}",
					bgColor:
						"color-mix(in oklab, {colors.bg.secondary} 96%, {colors.fg.primary})",
				},
			},

			"&:not([data-range-start], [data-range-end]):is([data-selected])": {
				color: "{colors.colorPalette.tertiary}",
				bgColor: "{colors.colorPalette.primary}",
			},

			"&:is([data-in-range])": {
				rounded: "{radii.0}",
				bgColor: "{colors.colorPalette.secondary}",
				color: "{colors.colorPalette.primary}",
			},

			"&:is([data-range-start], [data-range-end])": {
				bgColor: "{colors.colorPalette.primary}",
				color: "{colors.colorPalette.tertiary}",
			},

			"&:is([data-range-start])": {
				borderTopLeftRadius: "var(--date-picker-border-radius)",
				borderBottomLeftRadius: "var(--date-picker-border-radius)",
			},
			"&:is([data-range-end])": {
				borderTopRightRadius: "var(--date-picker-border-radius)",
				borderBottomRightRadius: "var(--date-picker-border-radius)",
			},
			"&:is([data-outside-range], [data-unavailable])": {
				opacity: "0.8",
				color: "{colors.fg.tertiary}",
			},
			"&:is([data-unavailable])": {
				textDecoration: "line-through",
			},
		},
		positioner: {
			zIndex: "{zIndex.overlay}",
			w: "var(--reference-width)",
		},
		rangeText: {
			flexGrow: "1",
			w: "{sizes.fit}",
			textAlign: "start",
			color: "{colors.fg.primary}",
			fontSize: "{fontSizes.14}",
		},
		viewControl: {
			w: "{sizes.full}",
			alignItems: "center",
			display: "inline-flex",
		},
	},
});
