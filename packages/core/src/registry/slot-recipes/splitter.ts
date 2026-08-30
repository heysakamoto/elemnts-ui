import { defineSlotRecipe } from "@pandacss/dev";

export const splitterRecipe = defineSlotRecipe({
	className: "splitter",
	slots: ["root", "panel", "resizeTrigger", "resizeTriggerIndicator"],
	base: {
		root: {
			position: "relative",
			display: "flex",
			flexDirection: "row",
			_horizontal: {
				flexDirection: "row",
				width: "100%",
			},
			_vertical: {
				flexDirection: "column",
				height: "100%",
			},
		},

		panel: {
			flex: "1",
			overflow: "hidden",
			position: "relative",

			_vertical: {
				minHeight: "var(--min-panel-size, 0)",
			},
			_horizontal: {
				minWidth: "var(--min-panel-size, 0)",
			},
		},

		resizeTrigger: {
			zIndex: "1",
			all: "unset",
			display: "flex",
			border: "none",
			alignItems: "center",
			position: "relative",
			cursor: "col-resize",
			justifyContent: "center",
			bgColor: "{colors.transparent}",

			"[data-dragging]": {
				cursor: "grabbing",
			},

			_horizontal: {
				padding: "0",
				height: "auto",
				alignSelf: "stretch",
				cursor: "col-resize",
				width: "calc({spacing.4} * 2)",
			},

			_vertical: {
				width: "100%",
				padding: "0",
				cursor: "row-resize",
				height: "calc({spacing.4} * 2)",
			},

			// Visual indicator line
			_before: {
				content: "''",
				position: "absolute",
				bgColor: "{colors.stroke.primary}",
				transition: "background-color 0.2s ease",

				_horizontal: {
					top: "0",
					left: "50%",
					width: "1px",
					height: "100%",
					transform: "translateX(-50%)",
				},

				_vertical: {
					top: "50%",
					left: "0",
					width: "100%",
					height: "1px",
					transform: "translateY(-50%)",
				},
			},

			// Hover and active states
			_hover: {
				_before: {
					bgColor: "{colors.colorPalette.primary}",
				},
			},

			_dragging: {
				_before: {
					bgColor: "{colors.colorPalette.primary}",
				},
			},

			// Disabled state
			_disabled: {
				opacity: "0.5",
				pointerEvents: "none",
				cursor: "not-allowed",
			},
		},

		resizeTriggerIndicator: {
			display: "block",
			position: "relative",
			cornerShape: "squircle",
			boxShadow: "{shadows.2}",
			borderRadius: "{radii.16}",
			transition: "all 0.2s ease",
			bgColor: "{colors.surface.1}",
			border: "1px solid {colors.stroke.secondary}",

			_horizontal: {
				margin: "0 auto",
				width: "calc({spacing.4} * 2)",
				height: "calc({spacing.4} * 5)",
			},

			_vertical: {
				margin: "auto 0",
				width: "calc({spacing.4} * 5)",
				height: "calc({spacing.4} * 2)",
			},

			_disabled: {
				visibility: "hidden",
				pointerEvents: "none",
			},

			_hover: {
				bgColor: "{colors.colorPalette.primary}",
			},

			_dragging: {
				transform: "scale(1.1)",
				bgColor: "{colors.colorPalette.primary}",
			},
		},
	},
});
