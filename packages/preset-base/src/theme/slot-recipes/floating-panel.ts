import { defineSlotRecipe } from "@pandacss/dev";

export const floatingPanelRecipe = defineSlotRecipe({
	className: "floating-panel",
	slots: [
		"root",
		"body",
		"title",
		"header",
		"control",
		"content",
		"trigger",
		"positioner",
		"dragTrigger",
		"closeTrigger",
		"stageTrigger",
		"resizeTrigger",
	],
	base: {
		body: {
			display: "flex",
			h: "var(--height)",
			overflow: "auto",
			scrollbar: "hidden",
			flexDirection: "column",
		},
		positioner: {
			zIndex: "{zIndex.overlay}",
		},
		content: {
			position: "relative",
			transformOrigin: "var(--transform-origin, top)",
			zIndex: "calc(var(--z-index, 9) + var(--layer-index, 0))",

			_open: {
				animation: "scale-fade-in 200ms ease-out",
			},
			_closed: {
				animation: "scale-fade-out 200ms ease-in",
			},
			"&:is([data-maximized])": {
				rounded: "calc({radii.4} * 0)",
			},
		},
		resizeTrigger: {
			boxSize: "calc({sizes.4} * 3)",
		},
		dragTrigger: {
			w: "{sizes.full}",
			justifyContent: "start",
			_disabled: { opacity: "1" },
		},
		header: {
			display: "flex",
		},
		control: {
			display: "flex",
			w: "{sizes.full}",
			flexDirection: "column",
		},
		title: {
			flexGrow: 1,
			fontSize: "16",
			fontWeight: "500",
			gap: "{spacing.4}",
			alignItems: "center",
			display: "inline-flex",
			color: "{colors.fg.primary}",
		},
	},
});
