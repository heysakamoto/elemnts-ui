import { defineSlotRecipe } from "@pandacss/dev";

export const timelineRecipe = defineSlotRecipe({
	className: "timeline",
	slots: ["root", "content", "item", "separator", "indicator", "connector"],
	base: {
		root: {
			width: "full",
			display: "flex",
			flexDirection: "column",
			"--timeline-gutter": "4px",
			"--timeline-thickness": "1px",
		},
		item: {
			flexShrink: 0,
			display: "flex",
			position: "relative",
			alignItems: "flex-start",
			gap: "calc({spacing.4} * 6)",
			"--timeline-separator-display": "inline-block",
			"--timeline-content-gap": "calc({spacing.4} * 6)",
			_last: {
				"--timeline-content-gap": "0",
				"--timeline-separator-display": "none",
			},
		},
		separator: {
			top: "0",
			left: "50%",
			h: "{sizes.full}",
			position: "absolute",
			transform: "translateX(-50%)",
			display: "var(--timeline-separator-display)",
		},
		indicator: {
			position: "relative",
		},
		connector: {
			position: "relative",
			alignSelf: "stretch",
		},
		content: {
			display: "flex",
			w: "{sizes.full}",
			flexDirection: "column",
			gap: "calc({spacing.4} * 4)",
			pb: "var(--timeline-content-gap)",
		},
	},
});
