import type { ComponentProps } from "react";
import { SwapIndicator, SwapRoot, SwapRootProvider } from "./swap";

export type SwapIndicatorProps = ComponentProps<typeof SwapIndicator>;
export type SwapRootProps = ComponentProps<typeof SwapRoot>;
export type SwapRootProviderProps = ComponentProps<typeof SwapRootProvider>;

export const Swap = Object.assign(SwapRoot, {
	Indicator: SwapIndicator,
	Root: SwapRoot,
	RootProvider: SwapRootProvider,
});

export type Swap = {
	IndicatorProps: SwapIndicatorProps;
	RootProps: SwapRootProps;
	Props: SwapRootProps;
	RootProviderProps: SwapRootProviderProps;
};

export { SwapIndicator, SwapRoot, SwapRootProvider };
