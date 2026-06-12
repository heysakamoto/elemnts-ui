import type { ComponentProps } from "react";
import {
	SelectClearTrigger,
	SelectContent,
	SelectContext,
	SelectControl,
	SelectHiddenSelect,
	SelectIndicator,
	SelectItem,
	SelectItemContext,
	SelectItemGroup,
	SelectItemGroupLabel,
	SelectItemIndicator,
	SelectItemText,
	SelectLabel,
	SelectPositioner,
	SelectRoot,
	type SelectRootProps,
	SelectRootProvider,
	type SelectRootProviderProps,
	SelectTrigger,
	SelectValueText,
} from "./select";

export type SelectClearTriggerProps = ComponentProps<typeof SelectClearTrigger>;
export type SelectContentProps = ComponentProps<typeof SelectContent>;
export type SelectContextProps = ComponentProps<typeof SelectContext>;
export type SelectControlProps = ComponentProps<typeof SelectControl>;
export type SelectHiddenSelectProps = ComponentProps<typeof SelectHiddenSelect>;
export type SelectIndicatorProps = ComponentProps<typeof SelectIndicator>;
export type SelectItemProps = ComponentProps<typeof SelectItem>;
export type SelectItemContextProps = ComponentProps<typeof SelectItemContext>;
export type SelectItemGroupProps = ComponentProps<typeof SelectItemGroup>;
export type SelectItemGroupLabelProps = ComponentProps<
	typeof SelectItemGroupLabel
>;
export type SelectItemIndicatorProps = ComponentProps<
	typeof SelectItemIndicator
>;
export type SelectItemTextProps = ComponentProps<typeof SelectItemText>;
export type SelectLabelProps = ComponentProps<typeof SelectLabel>;
export type SelectPositionerProps = ComponentProps<typeof SelectPositioner>;
export type SelectTriggerProps = ComponentProps<typeof SelectTrigger>;
export type SelectValueTextProps = ComponentProps<typeof SelectValueText>;

export const Select = Object.assign(SelectRoot, {
	ClearTrigger: SelectClearTrigger,
	Content: SelectContent,
	Context: SelectContext,
	Control: SelectControl,
	HiddenSelect: SelectHiddenSelect,
	Indicator: SelectIndicator,
	Item: SelectItem,
	ItemContext: SelectItemContext,
	ItemGroup: SelectItemGroup,
	ItemGroupLabel: SelectItemGroupLabel,
	ItemIndicator: SelectItemIndicator,
	ItemText: SelectItemText,
	Label: SelectLabel,
	Positioner: SelectPositioner,
	Root: SelectRoot,
	RootProvider: SelectRootProvider,
	Trigger: SelectTrigger,
	ValueText: SelectValueText,
});

export type Select<T = any> = {
	Props: SelectRootProps<T>;
	RootProviderProps: SelectRootProviderProps<T>;
	ClearTriggerProps: SelectClearTriggerProps;
	ContentProps: SelectContentProps;
	ContextProps: SelectContextProps;
	ControlProps: SelectControlProps;
	HiddenSelectProps: SelectHiddenSelectProps;
	IndicatorProps: SelectIndicatorProps;
	ItemProps: SelectItemProps;
	ItemContextProps: SelectItemContextProps;
	ItemGroupProps: SelectItemGroupProps;
	ItemGroupLabelProps: SelectItemGroupLabelProps;
	ItemIndicatorProps: SelectItemIndicatorProps;
	ItemTextProps: SelectItemTextProps;
	LabelProps: SelectLabelProps;
	PositionerProps: SelectPositionerProps;
	RootProps: SelectRootProps<T>;
	TriggerProps: SelectTriggerProps;
	ValueTextProps: SelectValueTextProps;
};

export type {
	SelectHighlightChangeDetails,
	SelectOpenChangeDetails,
	SelectValueChangeDetails,
	UseSelectContext,
	UseSelectItemContext,
	UseSelectProps,
	UseSelectReturn,
} from "@ark-ui/react/select";

export {
	useSelect,
	useSelectContext,
	useSelectItemContext,
} from "@ark-ui/react/select";
export type { SelectRootProps, SelectRootProviderProps };
export {
	SelectClearTrigger,
	SelectContent,
	SelectContext,
	SelectControl,
	SelectHiddenSelect,
	SelectIndicator,
	SelectItem,
	SelectItemContext,
	SelectItemGroup,
	SelectItemGroupLabel,
	SelectItemIndicator,
	SelectItemText,
	SelectLabel,
	SelectPositioner,
	SelectRoot,
	SelectRootProvider,
	SelectTrigger,
	SelectValueText,
};
