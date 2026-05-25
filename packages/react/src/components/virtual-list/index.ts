import type { ComponentProps } from "react";
import {
	VirtualListContainer,
	VirtualListContainerBase,
	VirtualListItems,
	VirtualListRoot,
	VirtualListRootBase,
	VirtualListRootProvider,
	VirtualListRootProviderBase,
	VirtualListViewport,
	VirtualListViewportBase,
} from "./virtual-list";

export type VirtualListRootProps = ComponentProps<typeof VirtualListRoot>;
export type VirtualListContainerProps = ComponentProps<
	typeof VirtualListContainer
>;
export type VirtualListItemsProps = ComponentProps<typeof VirtualListItems>;
export type VirtualListRootProviderProps = ComponentProps<
	typeof VirtualListRootProvider
>;
export type VirtualListViewportProps = ComponentProps<
	typeof VirtualListViewport
>;
export type VirtualListRootBaseProps = ComponentProps<
	typeof VirtualListRootBase
>;
export type VirtualListContainerBaseProps = ComponentProps<
	typeof VirtualListContainerBase
>;
export type VirtualListRootProviderBaseProps = ComponentProps<
	typeof VirtualListRootProviderBase
>;
export type VirtualListViewportBaseProps = ComponentProps<
	typeof VirtualListViewportBase
>;

export const VirtualList = Object.assign(VirtualListRoot, {
	Root: VirtualListRoot,
	Items: VirtualListItems,
	RootBase: VirtualListRootBase,
	Container: VirtualListContainer,
	Viewport: VirtualListViewport,
	ViewportBase: VirtualListViewportBase,
	RootProvider: VirtualListRootProvider,
	ContainerBase: VirtualListContainerBase,
	RootProviderBase: VirtualListRootProviderBase,
});

export type VirtualList = {
	Props: VirtualListRootProps;
	RootProps: VirtualListRootProps;
	ItemsProps: VirtualListItemsProps;
	ViewportProps: VirtualListViewportProps;
	RootBaseProps: VirtualListRootBaseProps;
	ContainerProps: VirtualListContainerProps;
	ViewportBaseProps: VirtualListViewportBaseProps;
	RootProviderProps: VirtualListRootProviderProps;
	ContainerBaseProps: VirtualListContainerBaseProps;
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
	VirtualListContainer,
	VirtualListContainerBase,
	VirtualListRootProvider,
	VirtualListRootProviderBase,
	VirtualListRoot,
	VirtualListRootBase,
	VirtualListItems,
	VirtualListViewport,
	VirtualListViewportBase,
};
