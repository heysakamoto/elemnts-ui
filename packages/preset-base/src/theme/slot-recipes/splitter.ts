import { defineSlotRecipe } from "@pandacss/dev";

export const splitterRecipe = defineSlotRecipe({
	className: "splitter",
	slots: [
		"root",
		"panel",
		"resizeTrigger",
		"resizeTriggerIndicator",
		"resizeTriggerSeparator",
	],
	base: {
		root: {
			colorPalette: "accent",

			_vertical: {
				flexDirection: "column",
			},
		},
		resizeTrigger: {
			"--splitter-border-size": "1px",
			"--splitter-thumb-size": "calc({sizes.4} * 1.5)",
			"--splitter-handle-size": "calc({sizes.4} * 6)",
			"--splitter-handle-color": "{colors.bg.tertiary}",
			"--splitter-border-color": "{colors.stroke.primary}",
			"--splitter-active-color": "{colors.colorPalette.primary}",

			zIndex: "1",
			position: "relative",
			alignItems: "center",
			display: "inline-flex",
			flexDirection: "column",
			justifyContent: "center",

			_before: {
				top: "0",
				content: "''",
				h: "{sizes.full}",
				position: "absolute",
				w: "calc({sizes.4} * 10)",
			},

			_disabled: {
				opacity: "0.5",
				pointerEvents: "none",
			},

			_hover: {
				"& [data-part=resize-trigger-indicator]": {
					bgColor: "var(--splitter-active-color)",
				},
			},

			_dragging: {
				"& [data-part=resize-trigger-separator]": {
					bgColor: "var(--splitter-active-color)",
				},
			},

			_horizontal: {
				w: "var(--splitter-thumb-size)",
				"& [data-part=resize-trigger-separator]": {
					w: "var(--splitter-border-size)",
					h: "{sizes.full}",
				},
			},

			_vertical: {
				h: "var(--splitter-thumb-size)",
				"& [data-part=resize-trigger-separator]": {
					h: "var(--splitter-border-size)",
					w: "{sizes.full}",
				},
			},
		},
		resizeTriggerSeparator: {
			zIndex: "-1",
			position: "absolute",
			bgColor: "var(--splitter-border-color)",
		},

		resizeTriggerIndicator: {
			position: "relative",
			rounded: "{radii.full}",
			shadow: "{shadows.2}",
			bgColor: "var(--splitter-handle-color)",
			border: "1px solid var(--splitter-border-color)",

			_disabled: {
				visibility: "hidden",
				pointerEvents: "none",
			},

			_hover: {
				bgColor: "var(--splitter-active-color)",
			},

			_dragging: {
				bgColor: "var(--splitter-active-color)",
			},

			_horizontal: {
				h: "var(--splitter-handle-size)",
				w: "{sizes.full}",
			},

			_vertical: {
				h: "{sizes.full}",
				w: "var(--splitter-handle-size)",
			},
		},
	},

	variants: {},

	defaultVariants: {},
});
