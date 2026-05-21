import type { ComponentProps } from "react";
import {
	SegmentGroupContext,
	SegmentGroupIndicator,
	SegmentGroupItem,
	SegmentGroupItemContext,
	SegmentGroupItemControl,
	SegmentGroupItemHiddenInput,
	SegmentGroupItemText,
	SegmentGroupLabel,
	SegmentGroupRoot,
	SegmentGroupRootProvider,
} from "./segment-group";

export type SegmentGroupRootProviderProps = ComponentProps<
	typeof SegmentGroupRootProvider
>;
export type SegmentGroupRootProps = ComponentProps<typeof SegmentGroupRoot>;
export type SegmentGroupContextProps = ComponentProps<
	typeof SegmentGroupContext
>;
export type SegmentGroupIndicatorProps = ComponentProps<
	typeof SegmentGroupIndicator
>;
export type SegmentGroupItemProps = ComponentProps<typeof SegmentGroupItem>;
export type SegmentGroupItemContextProps = ComponentProps<
	typeof SegmentGroupItemContext
>;
export type SegmentGroupItemControlProps = ComponentProps<
	typeof SegmentGroupItemControl
>;
export type SegmentGroupItemHiddenInputProps = ComponentProps<
	typeof SegmentGroupItemHiddenInput
>;
export type SegmentGroupItemTextProps = ComponentProps<
	typeof SegmentGroupItemText
>;
export type SegmentGroupLabelProps = ComponentProps<typeof SegmentGroupLabel>;

export const SegmentGroup = Object.assign(SegmentGroupRoot, {
	Context: SegmentGroupContext,
	Indicator: SegmentGroupIndicator,
	Item: SegmentGroupItem,
	ItemContext: SegmentGroupItemContext,
	ItemControl: SegmentGroupItemControl,
	ItemHiddenInput: SegmentGroupItemHiddenInput,
	ItemText: SegmentGroupItemText,
	Label: SegmentGroupLabel,
	Root: SegmentGroupRoot,
	RootProvider: SegmentGroupRootProvider,
});

export type SegmentGroup = {
	RootProviderProps: SegmentGroupRootProviderProps;
	RootProps: SegmentGroupRootProps;
	ItemProps: SegmentGroupItemProps;
	ItemContextProps: SegmentGroupItemContextProps;
	ItemControlProps: SegmentGroupItemControlProps;
	ItemHiddenInputProps: SegmentGroupItemHiddenInputProps;
	ItemTextProps: SegmentGroupItemTextProps;
	LabelProps: SegmentGroupLabelProps;
	ContextProps: SegmentGroupContextProps;
	IndicatorProps: SegmentGroupIndicatorProps;
	Props: SegmentGroupRootProps;
};

export type {
	SegmentGroupValueChangeDetails,
	UseSegmentGroupContext,
	UseSegmentGroupItemContext,
	UseSegmentGroupProps,
	UseSegmentGroupReturn,
} from "@ark-ui/react/segment-group";

export {
	useSegmentGroup,
	useSegmentGroupContext,
	useSegmentGroupItemContext,
} from "@ark-ui/react/segment-group";

export {
	SegmentGroupContext,
	SegmentGroupIndicator,
	SegmentGroupItem,
	SegmentGroupItemContext,
	SegmentGroupItemControl,
	SegmentGroupItemHiddenInput,
	SegmentGroupItemText,
	SegmentGroupLabel,
	SegmentGroupRoot,
	SegmentGroupRootProvider,
};
