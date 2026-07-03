import type { ComponentProps } from "react";

import { StatusIndicator, StatusRoot, StatusText } from "./status";

export type StatusIndicatorProps = ComponentProps<typeof StatusIndicator>;
export type StatusRootProps = ComponentProps<typeof StatusRoot>;
export type StatusTextProps = ComponentProps<typeof StatusText>;

export const Status = Object.assign(StatusRoot, {
	Root: StatusRoot,
	Indicator: StatusIndicator,
	Text: StatusText,
});

export type Status = {
	RootProps: StatusRootProps;
	IndicatorProps: StatusIndicatorProps;
	TextProps: StatusTextProps;
	Props: StatusRootProps;
};

export { StatusIndicator, StatusRoot, StatusText };
