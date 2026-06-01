import type { ComponentProps } from "react";
import {
	SortableItem,
	SortableItemBase,
	SortableItemHandle,
	SortableItemHandleBase,
	SortableRoot,
} from "./sortable";

export type SortableItemProps = ComponentProps<typeof SortableItem>;
export type SortableItemBaseProps = ComponentProps<typeof SortableItemBase>;
export type SortableItemHandleProps = ComponentProps<typeof SortableItemHandle>;
export type SortableItemHandleBaseProps = ComponentProps<
	typeof SortableItemHandleBase
>;
export type SortableRootProps = ComponentProps<typeof SortableRoot>;

export const Sortable = Object.assign(SortableRoot, {
	Item: SortableItem,
	ItemBase: SortableItemBase,
	ItemHandle: SortableItemHandle,
	ItemHandleBase: SortableItemHandleBase,
	Root: SortableRoot,
});

export type Sortable = {
	Props: SortableRootProps;
	RootProps: SortableRootProps;
	ItemProps: SortableItemProps;
	ItemHandleProps: SortableItemHandleProps;
	ItemHandleBaseProps: SortableItemHandleBaseProps;
};

export { useSortable } from "@dnd-kit/react/sortable";

export {
	SortableItem,
	SortableRoot,
	SortableItemBase,
	SortableItemHandle,
	SortableItemHandleBase,
};
