import type { ComponentProps } from "react";
import {
	VirtualListContent,
	VirtualListContentBase,
	VirtualListItem,
	VirtualListRoot,
	VirtualListRootBase,
	VirtualListRootProvider,
	VirtualListRootProviderBase,
	VirtualListViewport,
	VirtualListViewportBase,
} from "./virtual-list";

export type VirtualListRootProps = ComponentProps<typeof VirtualListRoot>;
export type VirtualListContentProps = ComponentProps<typeof VirtualListContent>;
export type VirtualListItemProps = ComponentProps<typeof VirtualListItem>;
export type VirtualListRootProviderProps = ComponentProps<
	typeof VirtualListRootProvider
>;
export type VirtualListViewportProps = ComponentProps<
	typeof VirtualListViewport
>;
export type VirtualListRootBaseProps = ComponentProps<
	typeof VirtualListRootBase
>;
export type VirtualListContentBaseProps = ComponentProps<
	typeof VirtualListContentBase
>;
export type VirtualListRootProviderBaseProps = ComponentProps<
	typeof VirtualListRootProviderBase
>;
export type VirtualListViewportBaseProps = ComponentProps<
	typeof VirtualListViewportBase
>;

export const VirtualList = Object.assign(VirtualListRoot, {
	Root: VirtualListRoot,
	Items: VirtualListItem,
	RootBase: VirtualListRootBase,
	Container: VirtualListContent,
	Viewport: VirtualListViewport,
	ViewportBase: VirtualListViewportBase,
	RootProvider: VirtualListRootProvider,
	ContainerBase: VirtualListContentBase,
	RootProviderBase: VirtualListRootProviderBase,
});

export type VirtualList = {
	Props: VirtualListRootProps;
	RootProps: VirtualListRootProps;
	ItemsProps: VirtualListItemProps;
	ViewportProps: VirtualListViewportProps;
	RootBaseProps: VirtualListRootBaseProps;
	ContainerProps: VirtualListContentProps;
	ViewportBaseProps: VirtualListViewportBaseProps;
	RootProviderProps: VirtualListRootProviderProps;
	ContainerBaseProps: VirtualListContentBaseProps;
	RootProviderBaseProps: VirtualListRootProviderBaseProps;
};

export type {
	ReactVirtualizerOptions,
	VirtualItem,
	Virtualizer,
	VirtualizerOptions,
} from "@tanstack/react-virtual";
export { useVirtualizer, useWindowVirtualizer } from "@tanstack/react-virtual";
export type { UseVirtualListProps } from "./client";
export { useVirtualList, useVirtualListContext } from "./client";

export {
	VirtualListContent,
	VirtualListContentBase,
	VirtualListRootProvider,
	VirtualListRootProviderBase,
	VirtualListRoot,
	VirtualListRootBase,
	VirtualListItem,
	VirtualListViewport,
	VirtualListViewportBase,
};
