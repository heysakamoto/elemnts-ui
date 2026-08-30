import { defineSlotRecipe } from "@pandacss/dev";

export const imageCropperRecipe = defineSlotRecipe({
	className: "img-cropper",
	slots: ["root", "handle", "grid", "image", "selection", "viewport"],
	base: {
		root: {
			"--border-color-mix":
				"color-mix(in oklab, {colors.white} 70%, {colors.transparent})",
			"--grid-border": "1px solid var(--border-color-mix)",
			"--selection-border": "2px solid var(--border-color-mix)",

			display: "flex",
			gap: "{spacing.8}",
			position: "relative",
			flexDirection: "column",
		},

		viewport: {
			width: "auto",
			height: "auto",
		},

		image: {
			w: "{sizes.full}",
			userSelect: "none",
			objectFit: "cover",
			rounded: "{radii.16}",
			cornerShape: "squircle",
			boxSize: "{sizes.full}",
			backfaceVisibility: "hidden",
			transformOrigin: "center center",
		},

		selection: {
			cursor: "move",
			outline: "none",
			boxSizing: "content-box",
			backfaceVisibility: "none",
			border: "var(--selection-border)",

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

			_before: {
				content: "''",
				flexShrink: 0,
				shadow: "{shadows.3}",
				rounded: "{radii.16}",
				cornerShape: "squircle",
				bgColor: "{colors.white}",
				w: "calc({spacing.4} * 4)",
				h: "calc({spacing.4} * 4)",
				transition: `
          opacity 200ms ease,
          transform 150ms ease
        `,
			},

			_disabled: {
				cursor: "not-allowed",
				pointerEvents: "none",
			},

			"&[data-position=n]": {
				cursor: "ns-resize",
				_before: {
					opacity: 0,
				},
			},

			"&[data-position=s]": {
				cursor: "ns-resize",
				_before: {
					opacity: 0,
				},
			},

			"&[data-position=e]": {
				cursor: "ew-resize",
				_before: {
					opacity: 0,
				},
			},

			"&[data-position=w]": {
				cursor: "ew-resize",
				_before: {
					opacity: 0,
				},
			},

			"&[data-position=nw]": {
				cursor: "nwse-resize",
			},

			"&[data-position=se]": {
				cursor: "nwse-resize",
			},

			"&[data-position=ne]": {
				cursor: "nesw-resize",
			},

			"&[data-position=sw]": {
				cursor: "nesw-resize",
			},
		},

		grid: {
			opacity: "0",
			position: "absolute",
			pointerEvents: "none",
			transition: "opacity 0.2s ease",

			"&[data-axis='horizontal']": {
				inset: "33.33% 0",
				borderTop: "var(--grid-border)",
				borderBottom: "var(--grid-border)",
			},

			"&[data-axis='vertical']": {
				inset: "0 33.33%",
				borderLeft: "var(--grid-border)",
				borderRight: "var(--grid-border)",
			},

			"&[data-dragging],&[data-panning]": {
				opacity: 1,
			},
		},
	},
});
