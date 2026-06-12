import type { ComponentProps } from "react";
import {
	SortableItem,
	SortableItemBase,
	SortableItemHandle,
	SortableItemHandleBase,
	SortableRoot,
	SortableRootBase,
	type SortableRootBaseProps,
	type SortableRootProps,
	SortableRootProvider,
} from "./sortable";

export type SortableItemProps = ComponentProps<typeof SortableItem>;
export type SortableItemBaseProps = ComponentProps<typeof SortableItemBase>;
export type SortableItemHandleProps = ComponentProps<typeof SortableItemHandle>;
export type SortableItemHandleBaseProps = ComponentProps<
	typeof SortableItemHandleBase
>;
export type SortableRootProviderProps = ComponentProps<
	typeof SortableRootProvider
>;

export const Sortable = Object.assign(SortableRoot, {
	Item: SortableItem,
	Root: SortableRoot,
	ItemBase: SortableItemBase,
	RootBase: SortableRootBase,
	ItemHandle: SortableItemHandle,
	RootProvider: SortableRootProvider,
	ItemHandleBase: SortableItemHandleBase,
});

export type Sortable<T> = {
	Props: SortableRootProps<T>;
	ItemProps: SortableItemProps;
	RootProps: SortableRootProps<T>;
	RootBaseProps: SortableRootBaseProps<T>;
	ItemHandleProps: SortableItemHandleProps;
	RootProviderProps: SortableRootProviderProps;
	ItemHandleBaseProps: SortableItemHandleBaseProps;
};

export {
	type UseSortableItemProps,
	type UseSortableProps,
	useSortable,
	useSortableItem,
} from "./client";

export {
	SortableItem,
	SortableItemBase,
	SortableItemHandle,
	SortableItemHandleBase,
	SortableRoot,
	SortableRootBase,
	SortableRootProvider,
};
