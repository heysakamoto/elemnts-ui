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
			gap: "4",
			flexShrink: 0,
			display: "flex",
			position: "relative",
			alignItems: "flex-start",
			"--timeline-content-gap": "calc({spacing.4} * 8)",
			_last: {
				"--timeline-content-gap": "0",
			},
		},
		separator: {
			display: "flex",
			alignItems: "center",
			position: "absolute",
		},
		indicator: {},
		connector: {
			position: "relative",
			alignSelf: "stretch",
		},
		content: {
			display: "flex",
			w: "{sizes.full}",
			flexDirection: "column",
			gap: "calc({spacing.4} * 4)",
		},
	},
});
