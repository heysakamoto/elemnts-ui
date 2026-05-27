import type { ComponentProps } from "react";
import {
	SortableItem,
	SortableItemAddon,
	SortableItemContent,
	SortableItemDescription,
	SortableItemHandle,
	SortableItemHandleBase,
	SortableItemIndicator,
	SortableItemTitle,
	SortableRoot,
} from "./sortable";

export type SortableItemProps = ComponentProps<typeof SortableItem>;
export type SortableItemAddonProps = ComponentProps<typeof SortableItemAddon>;
export type SortableItemContentProps = ComponentProps<
	typeof SortableItemContent
>;
export type SortableItemDescriptionProps = ComponentProps<
	typeof SortableItemDescription
>;
export type SortableItemHandleProps = ComponentProps<typeof SortableItemHandle>;
export type SortableItemHandleBaseProps = ComponentProps<
	typeof SortableItemHandleBase
>;
export type SortableItemIndicatorProps = ComponentProps<
	typeof SortableItemIndicator
>;
export type SortableItemTitleProps = ComponentProps<typeof SortableItemTitle>;
export type SortableRootProps = ComponentProps<typeof SortableRoot>;

export const Sortable = Object.assign(SortableRoot, {
	Item: SortableItem,
	ItemAddon: SortableItemAddon,
	ItemContent: SortableItemContent,
	ItemDescription: SortableItemDescription,
	ItemHandle: SortableItemHandle,
	ItemHandleBase: SortableItemHandleBase,
	ItemIndicator: SortableItemIndicator,
	ItemTitle: SortableItemTitle,
	Root: SortableRoot,
});

export type Sortable = {
	Props: SortableRootProps;
	RootProps: SortableRootProps;
	ItemProps: SortableItemProps;
	ItemAddonProps: SortableItemAddonProps;
	ItemContentProps: SortableItemContentProps;
	ItemDescriptionProps: SortableItemDescriptionProps;
	ItemHandleProps: SortableItemHandleProps;
	ItemHandleBaseProps: SortableItemHandleBaseProps;
	ItemIndicatorProps: SortableItemIndicatorProps;
	ItemTitleProps: SortableItemTitleProps;
};

export { useSortable } from "@dnd-kit/react/sortable";

export {
	SortableItem,
	SortableItemAddon,
	SortableItemContent,
	SortableItemDescription,
	SortableItemHandle,
	SortableItemHandleBase,
	SortableItemIndicator,
	SortableItemTitle,
	SortableRoot,
};
