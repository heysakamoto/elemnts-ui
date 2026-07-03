import type { ComponentProps } from "react";

import {
	TimelineConnector,
	TimelineContent,
	TimelineIndicator,
	TimelineItem,
	TimelineRoot,
	TimelineSeparator,
} from "./timeline";

export type TimelineConnectorProps = ComponentProps<typeof TimelineConnector>;
export type TimelineContentProps = ComponentProps<typeof TimelineContent>;
export type TimelineIndicatorProps = ComponentProps<typeof TimelineIndicator>;
export type TimelineItemProps = ComponentProps<typeof TimelineItem>;
export type TimelineRootProps = ComponentProps<typeof TimelineRoot>;
export type TimelineSeparatorProps = ComponentProps<typeof TimelineSeparator>;

export const Timeline = Object.assign(TimelineRoot, {
	Root: TimelineRoot,
	Connector: TimelineConnector,
	Content: TimelineContent,
	Indicator: TimelineIndicator,
	Item: TimelineItem,
	Separator: TimelineSeparator,
});

export type Timeline = {
	Props: TimelineRootProps;
	RootProps: TimelineRootProps;
	ConnectorProps: TimelineConnectorProps;
	ContentProps: TimelineContentProps;
	IndicatorProps: TimelineIndicatorProps;
	ItemProps: TimelineItemProps;
	SeparatorProps: TimelineSeparatorProps;
};

export {
	TimelineConnector,
	TimelineContent,
	TimelineIndicator,
	TimelineItem,
	TimelineRoot,
	TimelineSeparator,
};
