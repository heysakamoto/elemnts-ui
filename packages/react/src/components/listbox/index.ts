import type { ComponentProps } from "react";

import {
	ListboxContent,
	ListboxContext,
	ListboxEmpty,
	ListboxInput,
	ListboxItem,
	ListboxItemContext,
	ListboxItemGroup,
	ListboxItemGroupLabel,
	ListboxItemIndicator,
	ListboxItemText,
	ListboxLabel,
	ListboxRoot,
	type ListboxRootProps,
	ListboxRootProvider,
	type ListboxRootProviderProps,
	ListboxValueText,
} from "./listbox";

export type ListboxValueTextProps = ComponentProps<typeof ListboxValueText>;
export type ListboxLabelProps = ComponentProps<typeof ListboxLabel>;
export type ListboxItemProps = ComponentProps<typeof ListboxItem>;
export type ListboxItemTextProps = ComponentProps<typeof ListboxItemText>;
export type ListboxItemIndicatorProps = ComponentProps<
	typeof ListboxItemIndicator
>;
export type ListboxItemGroupProps = ComponentProps<typeof ListboxItemGroup>;
export type ListboxItemGroupLabelProps = ComponentProps<
	typeof ListboxItemGroupLabel
>;
export type ListboxContentProps = ComponentProps<typeof ListboxContent>;
export type ListboxInputProps = ComponentProps<typeof ListboxInput>;
export type ListboxEmptyProps = ComponentProps<typeof ListboxEmpty>;
export type ListboxItemContextProps = ComponentProps<typeof ListboxItemContext>;
export type ListboxContextProps = ComponentProps<typeof ListboxContext>;

export const Listbox = Object.assign(ListboxRoot, {
	RootProvider: ListboxRootProvider,
	Root: ListboxRoot,
	ValueText: ListboxValueText,
	Label: ListboxLabel,
	ItemText: ListboxItemText,
	ItemIndicator: ListboxItemIndicator,
	Content: ListboxContent,
	Context: ListboxContext,
	Empty: ListboxEmpty,
	Input: ListboxInput,
	Item: ListboxItem,
	ItemContext: ListboxItemContext,
	ItemGroup: ListboxItemGroup,
	ItemGroupLabel: ListboxItemGroupLabel,
});

export type Listbox<T = any> = {
	RootProviderProps: ListboxRootProviderProps<T>;
	RootProps: ListboxRootProps<T>;
	ValueTextProps: ListboxValueTextProps;
	LabelProps: ListboxLabelProps;
	ItemProps: ListboxItemProps;
	ItemTextProps: ListboxItemTextProps;
	ItemIndicatorProps: ListboxItemIndicatorProps;
	ItemGroupProps: ListboxItemGroupProps;
	ItemGroupLabelProps: ListboxItemGroupLabelProps;
	ContentProps: ListboxContentProps;
	InputProps: ListboxInputProps;
	EmptyProps: ListboxEmptyProps;
	ItemContextProps: ListboxItemContextProps;
	ContextProps: ListboxContextProps;
	Props: ListboxRootProps<T>;
};

export type {
	ListboxHighlightChangeDetails,
	ListboxScrollToIndexDetails,
	ListboxSelectionDetails,
	ListboxValueChangeDetails,
	ListCollection,
	UseListboxContext,
	UseListboxItemContext,
	UseListboxProps,
	UseListboxReturn,
} from "@ark-ui/react/listbox";
export {
	useListbox,
	useListboxContext,
	useListboxItemContext,
} from "@ark-ui/react/listbox";

export type { ListboxRootProps, ListboxRootProviderProps };
export {
	ListboxContent,
	ListboxContext,
	ListboxEmpty,
	ListboxInput,
	ListboxItem,
	ListboxItemContext,
	ListboxItemGroup,
	ListboxItemGroupLabel,
	ListboxItemIndicator,
	ListboxItemText,
	ListboxLabel,
	ListboxRoot,
	ListboxRootProvider,
	ListboxValueText,
};
