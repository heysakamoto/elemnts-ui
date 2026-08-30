import type { ComponentProps } from "react";

import {
	SplitterContext,
	SplitterPanel,
	SplitterResizeTrigger,
	SplitterResizeTriggerIndicator,
	SplitterRoot,
	SplitterRootProvider,
} from "./splitter";

export type SplitterRootProviderProps = ComponentProps<
	typeof SplitterRootProvider
>;
export type SplitterRootProps = ComponentProps<typeof SplitterRoot>;
export type SplitterContextProps = ComponentProps<typeof SplitterContext>;
export type SplitterPanelProps = ComponentProps<typeof SplitterPanel>;
export type SplitterResizeTriggerProps = ComponentProps<
	typeof SplitterResizeTrigger
>;
export type SplitterResizeTriggerIndicatorProps = ComponentProps<
	typeof SplitterResizeTriggerIndicator
>;

export const Splitter = Object.assign(SplitterRoot, {
	Context: SplitterContext,
	Panel: SplitterPanel,
	ResizeTrigger: SplitterResizeTrigger,
	ResizeTriggerIndicator: SplitterResizeTriggerIndicator,
	Root: SplitterRoot,
	RootProvider: SplitterRootProvider,
});

export type Splitter = {
	RootProviderProps: SplitterRootProviderProps;
	RootProps: SplitterRootProps;
	ContextProps: SplitterContextProps;
	PanelProps: SplitterPanelProps;
	ResizeTriggerProps: SplitterResizeTriggerProps;
	ResizeTriggerIndicatorProps: SplitterResizeTriggerIndicatorProps;
	Props: SplitterRootProps;
};

export type {
	SplitterExpandCollapseDetails,
	SplitterResizeDetails,
	SplitterResizeEndDetails,
	UseSplitterContext,
	UseSplitterProps,
	UseSplitterReturn,
} from "@ark-ui/react/splitter";
export { useSplitter, useSplitterContext } from "@ark-ui/react/splitter";

export {
	SplitterContext,
	SplitterPanel,
	SplitterResizeTrigger,
	SplitterResizeTriggerIndicator,
	SplitterRoot,
	SplitterRootProvider,
};
