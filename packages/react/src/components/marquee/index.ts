import type { ComponentProps } from "react";
import {
	MarqueeContent,
	MarqueeContext,
	MarqueeEdge,
	MarqueeItem,
	MarqueeRoot,
	MarqueeRootProvider,
	MarqueeViewport,
} from "./marquee";

export type MarqueeRootProviderProps = ComponentProps<
	typeof MarqueeRootProvider
>;
export type MarqueeRootProps = ComponentProps<typeof MarqueeRoot>;
export type MarqueeEdgeProps = ComponentProps<typeof MarqueeEdge>;
export type MarqueeItemProps = ComponentProps<typeof MarqueeItem>;
export type MarqueeViewportProps = ComponentProps<typeof MarqueeViewport>;
export type MarqueeContentProps = ComponentProps<typeof MarqueeContent>;
export type MarqueeContextProps = ComponentProps<typeof MarqueeContext>;

export const Marquee = Object.assign(MarqueeRoot, {
	RootProvider: MarqueeRootProvider,
	Root: MarqueeRoot,
	Viewport: MarqueeViewport,
	Content: MarqueeContent,
	Context: MarqueeContext,
	Edge: MarqueeEdge,
	Item: MarqueeItem,
});

export type Marquee = {
	RootProviderProps: MarqueeRootProviderProps;
	RootProps: MarqueeRootProps;
	EdgeProps: MarqueeEdgeProps;
	ItemProps: MarqueeItemProps;
	ViewportProps: MarqueeViewportProps;
	ContentProps: MarqueeContentProps;
	ContextProps: MarqueeContextProps;
	Props: MarqueeRootProps;
};

export type {
	MarqueePauseStatusDetails,
	UseMarqueeContext,
	UseMarqueeProps,
	UseMarqueeReturn,
} from "@ark-ui/react/marquee";

export { useMarquee, useMarqueeContext } from "@ark-ui/react/marquee";

export {
	MarqueeRootProvider,
	MarqueeRoot,
	MarqueeViewport,
	MarqueeContent,
	MarqueeContext,
	MarqueeEdge,
	MarqueeItem,
};
