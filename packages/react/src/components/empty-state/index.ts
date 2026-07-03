import type { ComponentProps } from "react";

import {
	EmptyStateContent,
	EmptyStateControl,
	EmptyStateDescription,
	EmptyStateIndicator,
	EmptyStateRoot,
	EmptyStateTitle,
} from "./empty-state";

export type EmptyStateRootProps = ComponentProps<typeof EmptyStateRoot>;
export type EmptyStateContentProps = ComponentProps<typeof EmptyStateContent>;
export type EmptyStateTitleProps = ComponentProps<typeof EmptyStateTitle>;
export type EmptyStateDescriptionProps = ComponentProps<
	typeof EmptyStateDescription
>;
export type EmptyStateIndicatorProps = ComponentProps<
	typeof EmptyStateIndicator
>;
export type EmptyStateControlProps = ComponentProps<typeof EmptyStateControl>;

export type EmptyState = {
	RootProps: EmptyStateRootProps;
	ContentProps: EmptyStateContentProps;
	TitleProps: EmptyStateTitleProps;
	DescriptionProps: EmptyStateDescriptionProps;
	IndicatorProps: EmptyStateIndicatorProps;
	ControlProps: EmptyStateControlProps;
};

export const EmptyState = Object.assign(EmptyStateRoot, {
	Root: EmptyStateRoot,
	Title: EmptyStateTitle,
	Control: EmptyStateControl,
	Content: EmptyStateContent,
	Description: EmptyStateDescription,
	Indicator: EmptyStateIndicator,
});

export {
	EmptyStateContent,
	EmptyStateControl,
	EmptyStateDescription,
	EmptyStateIndicator,
	EmptyStateRoot,
	EmptyStateTitle,
};
