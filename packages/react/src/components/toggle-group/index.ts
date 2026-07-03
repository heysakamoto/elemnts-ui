import type { ComponentProps } from "react";

import {
	ToggleGroupContext,
	ToggleGroupItem,
	ToggleGroupRoot,
	ToggleGroupRootProvider,
} from "./toggle-group";

export type ToggleGroupContextProps = ComponentProps<typeof ToggleGroupContext>;
export type ToggleGroupItemProps = ComponentProps<typeof ToggleGroupItem>;
export type ToggleGroupRootProps = ComponentProps<typeof ToggleGroupRoot>;
export type ToggleGroupRootProviderProps = ComponentProps<
	typeof ToggleGroupRootProvider
>;

export const ToggleGroup = Object.assign(ToggleGroupRoot, {
	Context: ToggleGroupContext,
	Item: ToggleGroupItem,
	Root: ToggleGroupRoot,
	RootProvider: ToggleGroupRootProvider,
});

export type ToggleGroup = {
	Props: ToggleGroupRootProps;
	ContextProps: ToggleGroupContextProps;
	ItemProps: ToggleGroupItemProps;
	RootProviderProps: ToggleGroupRootProviderProps;
	RootProps: ToggleGroupRootProps;
};

export type {
	ToggleGroupValueChangeDetails,
	UseToggleGroupContext,
	UseToggleGroupProps,
	UseToggleGroupReturn,
} from "@ark-ui/react/toggle-group";
export {
	useToggleGroup,
	useToggleGroupContext,
} from "@ark-ui/react/toggle-group";

export {
	ToggleGroupContext,
	ToggleGroupItem,
	ToggleGroupRoot,
	ToggleGroupRootProvider,
};
