import type { ComponentProps } from "react";

import { ToggleContext, ToggleIndicator, ToggleRoot } from "./toggle";

export type ToggleContextProps = ComponentProps<typeof ToggleContext>;
export type ToggleIndicatorProps = ComponentProps<typeof ToggleIndicator>;
export type ToggleRootProps = ComponentProps<typeof ToggleRoot>;

export const Toggle = Object.assign(ToggleRoot, {
	Context: ToggleContext,
	Indicator: ToggleIndicator,
	Root: ToggleRoot,
});

export type Toggle = {
	Props: ToggleRootProps;
	RootProps: ToggleRootProps;
	IndicatorProps: ToggleIndicatorProps;
	ContextProps: ToggleContextProps;
};

export type {
	UseToggleContext,
	UseToggleProps,
	UseToggleReturn,
} from "@ark-ui/react/toggle";
export { useToggle, useToggleContext } from "@ark-ui/react/toggle";

export { ToggleContext, ToggleIndicator, ToggleRoot };
