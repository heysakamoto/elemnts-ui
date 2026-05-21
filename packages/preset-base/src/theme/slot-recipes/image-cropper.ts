import { defineSlotRecipe } from "@pandacss/dev";

export const imageCropperRecipe = defineSlotRecipe({
	className: "img-cropper",
	slots: ["root", "handle", "grid", "image", "selection", "viewport"],
	base: {
		root: {
			"--cropper-grid-border-width": "1px",
			"--cropper-grid-border-color": "{colors.white.a60}",
			"--cropper-grid-border":
				"var(--cropper-grid-border-width) solid var(--cropper-grid-border-color)",

			"--cropper-selection-border-width": "2px",
			"--cropper-selection-border-color": "{colors.white.a80}",
			"--cropper-selection-border":
				"var(--cropper-selection-border-width) solid var(--cropper-selection-border-color)",

			"--cropper-handle-size": "calc({sizes.8} + 2px)",
			"--cropper-handle-bg": "{colors.colorPalette.primary}",

			display: "flex",
			gap: "{spacing.12}",
			position: "relative",
			colorPalette: "accent",
			flexDirection: "column",
		},

		viewport: {
			overflow: "hidden",
			aspectRatio: 16 / 9,
			rounded: "{radii.12}",
			position: "relative",
		},

		image: {
			top: "{spacing.0}",
			left: "{spacing.0}",
			userSelect: "none",
			position: "absolute",
			pointerEvents: "none",
			boxSize: "{sizes.full}",
			backfaceVisibility: "hidden",
			transformOrigin: "center center",
		},

		selection: {
			cursor: "move",
			outline: "none",
			boxSizing: "content-box",
			backfaceVisibility: "none",
			border: "var(--cropper-selection-border)",

			"&:is([data-shape='circle'])": {
				rounded: "{radii.full}",
			},

			_focusVisible: {
				borderColor: "{colors.colorPalette.primary}",
			},

			_disabled: {
				cursor: "default",
			},

			_dragging: {
				cursor: "grabbing",
				borderColor: "{colors.white}",
			},
		},

		handle: {
			display: "flex",
			touchAction: "none",
			alignItems: "center",
			position: "absolute",
			justifyContent: "center",
			w: "calc(var(--cropper-handle-size) * 2)",
			h: "calc(var(--cropper-handle-size) * 2)",

			_before: {
				content: "''",
				rounded: "{radii.4}",
				shadow: "{shadows.2}",
				w: "var(--cropper-handle-size)",
				h: "var(--cropper-handle-size)",
				bgColor: "{colors.colorPalette.tertiary}",
				border: "2px solid var(--cropper-handle-bg)",
				transition: `
          opacity 200ms ease,
          transform 150ms ease
        `,
			},

			_disabled: {
				display: "none",
			},

			"&[data-position='top-left']": {
				cursor: "nwse-resize",
			},

			"&[data-position='top-right']": {
				cursor: "nesw-resize",
			},

			"&[data-position='bottom-right']": {
				cursor: "nwse-resize",
			},

			"&[data-position='bottom-left']": {
				cursor: "nesw-resize",
			},

			"&[data-position='top'],&[data-position='bottom']": {
				cursor: "ns-resize",
			},

			"&[data-position='left'],&[data-position='right']": {
				cursor: "ew-resize",
			},
		},

		grid: {
			opacity: "0",
			position: "absolute",
			pointerEvents: "none",
			transition: "opacity 0.2s ease",

			"&[data-axis='horizontal']": {
				inset: "33.33% 0",
				borderTop: "var(--cropper-grid-border)",
				borderBottom: "var(--cropper-grid-border)",
			},

			"&[data-axis='vertical']": {
				inset: "0 33.33%",
				borderLeft: "var(--cropper-grid-border)",
				borderRight: "var(--cropper-grid-border)",
			},

			"&[data-dragging],&[data-panning]": {
				opacity: 1,
			},
		},
	},
});
