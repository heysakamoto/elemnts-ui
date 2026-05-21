import type { ComponentProps } from "react";
import {
	ScrollAreaContent,
	ScrollAreaContext,
	ScrollAreaCorner,
	ScrollAreaRoot,
	ScrollAreaRootProvider,
	ScrollAreaScrollbar,
	ScrollAreaThumb,
	ScrollAreaViewport,
} from "./scroll-area";

export type ScrollAreaRootProviderProps = ComponentProps<
	typeof ScrollAreaRootProvider
>;
export type ScrollAreaRootProps = ComponentProps<typeof ScrollAreaRoot>;
export type ScrollAreaContentProps = ComponentProps<typeof ScrollAreaContent>;
export type ScrollAreaContextProps = ComponentProps<typeof ScrollAreaContext>;
export type ScrollAreaCornerProps = ComponentProps<typeof ScrollAreaCorner>;
export type ScrollAreaScrollbarProps = ComponentProps<
	typeof ScrollAreaScrollbar
>;
export type ScrollAreaThumbProps = ComponentProps<typeof ScrollAreaThumb>;
export type ScrollAreaViewportProps = ComponentProps<typeof ScrollAreaViewport>;

export const ScrollArea = Object.assign(ScrollAreaRoot, {
	Content: ScrollAreaContent,
	Context: ScrollAreaContext,
	Corner: ScrollAreaCorner,
	Root: ScrollAreaRoot,
	RootProvider: ScrollAreaRootProvider,
	Scrollbar: ScrollAreaScrollbar,
	Thumb: ScrollAreaThumb,
	Viewport: ScrollAreaViewport,
});

export type ScrollArea = {
	RootProviderProps: ScrollAreaRootProviderProps;
	RootProps: ScrollAreaRootProps;
	ContentProps: ScrollAreaContentProps;
	ContextProps: ScrollAreaContextProps;
	CornerProps: ScrollAreaCornerProps;
	ScrollbarProps: ScrollAreaScrollbarProps;
	ThumbProps: ScrollAreaThumbProps;
	ViewportProps: ScrollAreaViewportProps;
	Props: ScrollAreaRootProps;
};

export type {
	ScrollAreaScrollToDetails,
	ScrollAreaScrollToEdgeDetails,
	UseScrollAreaContext,
	UseScrollAreaProps,
	UseScrollAreaReturn,
} from "@ark-ui/react/scroll-area";

export { useScrollArea, useScrollAreaContext } from "@ark-ui/react/scroll-area";

export {
	ScrollAreaContent,
	ScrollAreaContext,
	ScrollAreaCorner,
	ScrollAreaRoot,
	ScrollAreaRootProvider,
	ScrollAreaScrollbar,
	ScrollAreaThumb,
	ScrollAreaViewport,
};
