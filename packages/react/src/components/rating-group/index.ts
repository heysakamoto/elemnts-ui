import type { ComponentProps } from "react";
import {
	RatingGroupContext,
	RatingGroupControl,
	RatingGroupHiddenInput,
	RatingGroupItem,
	RatingGroupItemContext,
	RatingGroupItemIndicator,
	RatingGroupLabel,
	RatingGroupRoot,
	RatingGroupRootProvider,
} from "./rating-group";

export type RatingGroupRootProviderProps = ComponentProps<
	typeof RatingGroupRootProvider
>;
export type RatingGroupRootProps = ComponentProps<typeof RatingGroupRoot>;
export type RatingGroupContextProps = ComponentProps<typeof RatingGroupContext>;
export type RatingGroupControlProps = ComponentProps<typeof RatingGroupControl>;
export type RatingGroupItemProps = ComponentProps<typeof RatingGroupItem>;
export type RatingGroupItemContextProps = ComponentProps<
	typeof RatingGroupItemContext
>;
export type RatingGroupHiddenInputProps = ComponentProps<
	typeof RatingGroupHiddenInput
>;
export type RatingGroupItemIndicatorProps = ComponentProps<
	typeof RatingGroupItemIndicator
>;
export type RatingGroupLabelProps = ComponentProps<typeof RatingGroupLabel>;

export const RatingGroup = Object.assign(RatingGroupRoot, {
	Context: RatingGroupContext,
	Control: RatingGroupControl,
	HiddenInput: RatingGroupHiddenInput,
	Item: RatingGroupItem,
	ItemContext: RatingGroupItemContext,
	Indicator: RatingGroupItemIndicator,
	Label: RatingGroupLabel,
	Root: RatingGroupRoot,
	RootProvider: RatingGroupRootProvider,
});

export type RatingGroup = {
	RootProviderProps: RatingGroupRootProviderProps;
	Props: RatingGroupRootProps;
	ContextProps: RatingGroupContextProps;
	ControlProps: RatingGroupControlProps;
	HiddenInputProps: RatingGroupHiddenInputProps;
	ItemProps: RatingGroupItemProps;
	ItemContextProps: RatingGroupItemContextProps;
	ItemIndicatorProps: RatingGroupItemIndicatorProps;
	LabelProps: RatingGroupLabelProps;
	RootProps: RatingGroupRootProps;
};

export type {
	RatingGroupHoverChangeDetails,
	RatingGroupValueChangeDetails,
	UseRatingGroupContext,
	UseRatingGroupItemContext,
	UseRatingGroupProps,
	UseRatingGroupReturn,
} from "@ark-ui/react/rating-group";

export {
	useRatingGroup,
	useRatingGroupContext,
	useRatingGroupItemContext,
} from "@ark-ui/react/rating-group";

export {
	RatingGroupContext,
	RatingGroupControl,
	RatingGroupHiddenInput,
	RatingGroupItem,
	RatingGroupItemContext,
	RatingGroupItemIndicator,
	RatingGroupLabel,
	RatingGroupRoot,
	RatingGroupRootProvider,
};
