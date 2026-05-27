import type { ComponentProps } from "react";
import {
	TimelineConnector,
	TimelineContent,
	TimelineDescription,
	TimelineIndicator,
	TimelineItem,
	TimelineRoot,
	TimelineSeparator,
	TimelineTitle,
} from "./timeline";

export type TimelineConnectorProps = ComponentProps<typeof TimelineConnector>;
export type TimelineContentProps = ComponentProps<typeof TimelineContent>;
export type TimelineDescriptionProps = ComponentProps<
	typeof TimelineDescription
>;
export type TimelineIndicatorProps = ComponentProps<typeof TimelineIndicator>;
export type TimelineItemProps = ComponentProps<typeof TimelineItem>;
export type TimelineRootProps = ComponentProps<typeof TimelineRoot>;
export type TimelineSeparatorProps = ComponentProps<typeof TimelineSeparator>;
export type TimelineTitleProps = ComponentProps<typeof TimelineTitle>;

export const Timeline = Object.assign(TimelineRoot, {
	Root: TimelineRoot,
	Connector: TimelineConnector,
	Content: TimelineContent,
	Description: TimelineDescription,
	Indicator: TimelineIndicator,
	Item: TimelineItem,
	Separator: TimelineSeparator,
	Title: TimelineTitle,
});

export type Timeline = {
	Props: TimelineRootProps;
	RootProps: TimelineRootProps;
	ConnectorProps: TimelineConnectorProps;
	ContentProps: TimelineContentProps;
	DescriptionProps: TimelineDescriptionProps;
	IndicatorProps: TimelineIndicatorProps;
	ItemProps: TimelineItemProps;
	SeparatorProps: TimelineSeparatorProps;
	TitleProps: TimelineTitleProps;
};

export {
	TimelineRoot,
	TimelineConnector,
	TimelineContent,
	TimelineDescription,
	TimelineIndicator,
	TimelineItem,
	TimelineSeparator,
	TimelineTitle,
};
