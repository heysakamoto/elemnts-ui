import { ark } from "@ark-ui/react";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { timelineRecipe } from "@moto-ui/styled-system/recipes";

const { withProvider, withContext } = createStyleContext(timelineRecipe);

export const TimelineRoot = withProvider(ark.div, "root", {
	dataAttr: true,
	defaultProps: {
		"data-part": "root",
		"data-scope": "timeline",
	},
});
TimelineRoot.displayName = "TimelineRoot";

export const TimelineContent = withContext(ark.div, "content", {
	dataAttr: true,
	defaultProps: {
		"data-part": "content",
		"data-scope": "timeline",
	},
});
TimelineContent.displayName = "TimelineContent";

export const TimelineItem = withContext(ark.div, "item", {
	dataAttr: true,
	defaultProps: {
		role: "listitem",
		"data-part": "item",
		"data-scope": "timeline",
	},
});
TimelineItem.displayName = "TimelineItem";

export const TimelineSeparator = withContext(ark.div, "separator", {
	dataAttr: true,
	defaultProps: {
		"data-part": "separator",
		"data-scope": "timeline",
	},
});
TimelineSeparator.displayName = "TimelineSeparator";

export const TimelineIndicator = withContext(ark.div, "indicator", {
	dataAttr: true,
	defaultProps: {
		"data-part": "indicator",
		"data-scope": "timeline",
	},
});
TimelineIndicator.displayName = "TimelineIndicator";

export const TimelineConnector = withContext(ark.div, "connector", {
	dataAttr: true,
	defaultProps: {
		"data-part": "connector",
		"data-scope": "timeline",
	},
});
TimelineConnector.displayName = "TimelineConnector";
