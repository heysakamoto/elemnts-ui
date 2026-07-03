import type { ComponentProps } from "react";

import {
	ComboboxClearTrigger,
	ComboboxContent,
	ComboboxContext,
	ComboboxControl,
	ComboboxEmpty,
	ComboboxIndicatorGroup,
	ComboboxInput,
	ComboboxItem,
	ComboboxItemContext,
	ComboboxItemGroup,
	ComboboxItemGroupLabel,
	ComboboxItemIndicator,
	ComboboxItemText,
	ComboboxLabel,
	ComboboxList,
	ComboboxPositioner,
	ComboboxRoot,
	type ComboboxRootProps,
	ComboboxRootProvider,
	type ComboboxRootProviderProps,
	ComboboxTrigger,
} from "./combobox";

export type ComboboxClearTriggerProps = ComponentProps<
	typeof ComboboxClearTrigger
>;

export type ComboboxContentProps = ComponentProps<typeof ComboboxContent>;

export type ComboboxEmptyProps = ComponentProps<typeof ComboboxEmpty>;

export type ComboboxControlProps = ComponentProps<typeof ComboboxControl>;

export type ComboboxInputProps = ComponentProps<typeof ComboboxInput>;

export type ComboboxItemProps = ComponentProps<typeof ComboboxItem>;

export type ComboboxItemGroupProps = ComponentProps<typeof ComboboxItemGroup>;

export type ComboboxItemGroupLabelProps = ComponentProps<
	typeof ComboboxItemGroupLabel
>;

export type ComboboxItemIndicatorProps = ComponentProps<
	typeof ComboboxItemIndicator
>;

export type ComboboxItemTextProps = ComponentProps<typeof ComboboxItemText>;

export type ComboboxLabelProps = ComponentProps<typeof ComboboxLabel>;

export type ComboboxListProps = ComponentProps<typeof ComboboxList>;

export type ComboboxTriggerProps = ComponentProps<typeof ComboboxTrigger>;

export type ComboboxPositionerProps = ComponentProps<typeof ComboboxPositioner>;

export type ComboboxIndicatorGroupProps = ComponentProps<
	typeof ComboboxIndicatorGroup
>;

export type ComboboxContextProps = ComponentProps<typeof ComboboxContext>;

export type ComboboxItemContextProps = ComponentProps<
	typeof ComboboxItemContext
>;

export const Combobox = Object.assign(ComboboxRoot, {
	RootProvider: ComboboxRootProvider,
	Root: ComboboxRoot,
	ClearTrigger: ComboboxClearTrigger,
	Content: ComboboxContent,
	Empty: ComboboxEmpty,
	Control: ComboboxControl,
	Input: ComboboxInput,
	Item: ComboboxItem,
	ItemGroup: ComboboxItemGroup,
	ItemGroupLabel: ComboboxItemGroupLabel,
	ItemIndicator: ComboboxItemIndicator,
	ItemText: ComboboxItemText,
	Label: ComboboxLabel,
	List: ComboboxList,
	Trigger: ComboboxTrigger,
	Positioner: ComboboxPositioner,
	IndicatorGroup: ComboboxIndicatorGroup,
	Context: ComboboxContext,
	ItemContext: ComboboxItemContext,
});

export type Combobox<T = any> = {
	Props: ComboboxRootProps<T>;
	RootProviderProps: ComboboxRootProviderProps<T>;
	RootProps: ComboboxRootProps<T>;
	ClearTriggerProps: ComboboxClearTriggerProps;
	ContentProps: ComboboxContentProps;
	EmptyProps: ComboboxEmptyProps;
	ControlProps: ComboboxControlProps;
	InputProps: ComboboxInputProps;
	ItemProps: ComboboxItemProps;
	ItemGroupProps: ComboboxItemGroupProps;
	ItemGroupLabelProps: ComboboxItemGroupLabelProps;
	ItemIndicatorProps: ComboboxItemIndicatorProps;
	ItemTextProps: ComboboxItemTextProps;
	LabelProps: ComboboxLabelProps;
	ListProps: ComboboxListProps;
	TriggerProps: ComboboxTriggerProps;
	PositionerProps: ComboboxPositionerProps;
	IndicatorGroupProps: ComboboxIndicatorGroupProps;
	ContextProps: ComboboxContextProps;
	ItemContextProps: ComboboxItemContextProps;
};

export type {
	CollectionItem,
	ComboboxFocusOutsideEvent,
	ComboboxHighlightChangeDetails,
	ComboboxInputValueChangeDetails,
	ComboboxOpenChangeDetails,
	ComboboxSelectionDetails,
	ComboboxValueChangeDetails,
	UseComboboxContext,
	UseComboboxItemContext,
	UseComboboxProps,
	UseComboboxReturn,
} from "@ark-ui/react/combobox";
export {
	useCombobox,
	useComboboxContext,
	useComboboxItemContext,
} from "@ark-ui/react/combobox";

export {
	ComboboxClearTrigger,
	ComboboxContent,
	ComboboxContext,
	ComboboxControl,
	ComboboxEmpty,
	ComboboxIndicatorGroup,
	ComboboxInput,
	ComboboxItem,
	ComboboxItemContext,
	ComboboxItemGroup,
	ComboboxItemGroupLabel,
	ComboboxItemIndicator,
	ComboboxItemText,
	ComboboxLabel,
	ComboboxList,
	ComboboxPositioner,
	ComboboxRoot,
	ComboboxRootProvider,
	ComboboxTrigger,
} from "./combobox";
export type { ComboboxRootProps, ComboboxRootProviderProps };
