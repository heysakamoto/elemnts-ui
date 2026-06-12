import type { ComponentProps } from "react";
import {
	CarouselAutoplayIndicator,
	CarouselAutoplayTrigger,
	CarouselContext,
	CarouselControl,
	CarouselIndicator,
	CarouselIndicatorGroup,
	CarouselItem,
	CarouselItemGroup,
	CarouselNextTrigger,
	CarouselPrevTrigger,
	CarouselProgressText,
	CarouselRoot,
	CarouselRootProvider,
} from "./carousel";

export type CarouselRootProviderProps = ComponentProps<
	typeof CarouselRootProvider
>;
export type CarouselRootProps = ComponentProps<typeof CarouselRoot>;
export type CarouselControlProps = ComponentProps<typeof CarouselControl>;
export type CarouselProgressTextProps = ComponentProps<
	typeof CarouselProgressText
>;
export type CarouselItemGroupProps = ComponentProps<typeof CarouselItemGroup>;
export type CarouselItemProps = ComponentProps<typeof CarouselItem>;
export type CarouselIndicatorGroupProps = ComponentProps<
	typeof CarouselIndicatorGroup
>;
export type CarouselIndicatorProps = ComponentProps<typeof CarouselIndicator>;
export type CarouselNextTriggerProps = ComponentProps<
	typeof CarouselNextTrigger
>;
export type CarouselPrevTriggerProps = ComponentProps<
	typeof CarouselPrevTrigger
>;
export type CarouselAutoplayTriggerProps = ComponentProps<
	typeof CarouselAutoplayTrigger
>;
export type CarouselAutoplayIndicatorProps = ComponentProps<
	typeof CarouselAutoplayIndicator
>;
export type CarouselContextProps = ComponentProps<typeof CarouselContext>;

export const Carousel = Object.assign(CarouselRoot, {
	Root: CarouselRoot,
	Control: CarouselControl,
	ProgressText: CarouselProgressText,
	ItemGroup: CarouselItemGroup,
	Item: CarouselItem,
	IndicatorGroup: CarouselIndicatorGroup,
	Indicator: CarouselIndicator,
	NextTrigger: CarouselNextTrigger,
	PrevTrigger: CarouselPrevTrigger,
	AutoplayTrigger: CarouselAutoplayTrigger,
	AutoplayIndicator: CarouselAutoplayIndicator,
	RootProvider: CarouselRootProvider,
	Context: CarouselContext,
});

export type Carousel = {
	Props: CarouselRootProps;
	ItemProps: CarouselItemProps;
	IndicatorProps: CarouselIndicatorProps;
	NextTriggerProps: CarouselNextTriggerProps;
	PrevTriggerProps: CarouselPrevTriggerProps;
	AutoplayTriggerProps: CarouselAutoplayTriggerProps;
	AutoplayIndicatorProps: CarouselAutoplayIndicatorProps;
	RootProviderProps: CarouselRootProviderProps;
	ContextProps: CarouselContextProps;
	ControlProps: CarouselControlProps;
	RootProps: CarouselRootProps;
	IndicatorGroupProps: CarouselIndicatorGroupProps;
	ItemGroupProps: CarouselItemGroupProps;
};

export type {
	CarouselDragStatusDetails,
	UseCarouselContext,
	UseCarouselProps,
	UseCarouselReturn,
} from "@ark-ui/react/carousel";

export { useCarousel, useCarouselContext } from "@ark-ui/react/carousel";

export {
	CarouselAutoplayIndicator,
	CarouselAutoplayTrigger,
	CarouselControl,
	CarouselIndicator,
	CarouselIndicatorGroup,
	CarouselItem,
	CarouselItemGroup,
	CarouselNextTrigger,
	CarouselPrevTrigger,
	CarouselProgressText,
	CarouselRootProvider,
};
