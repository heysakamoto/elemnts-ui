import type { ComponentProps } from "react";

import {
	TimerActionTrigger,
	TimerArea,
	TimerContext,
	TimerControl,
	TimerItem,
	TimerItemGroup,
	TimerItemLabel,
	TimerRoot,
	TimerRootProvider,
	TimerSeparator,
} from "./timer";

export type TimerActionTriggerProps = ComponentProps<typeof TimerActionTrigger>;
export type TimerAreaProps = ComponentProps<typeof TimerArea>;
export type TimerContextProps = ComponentProps<typeof TimerContext>;
export type TimerControlProps = ComponentProps<typeof TimerControl>;
export type TimerItemProps = ComponentProps<typeof TimerItem>;
export type TimerItemGroupProps = ComponentProps<typeof TimerItemGroup>;
export type TimerItemLabelProps = ComponentProps<typeof TimerItemLabel>;
export type TimerRootProps = ComponentProps<typeof TimerRoot>;
export type TimerRootProviderProps = ComponentProps<typeof TimerRootProvider>;
export type TimerSeparatorProps = ComponentProps<typeof TimerSeparator>;

export const Timer = Object.assign(TimerRoot, {
	ActionTrigger: TimerActionTrigger,
	Area: TimerArea,
	Context: TimerContext,
	Control: TimerControl,
	Item: TimerItem,
	ItemGroup: TimerItemGroup,
	ItemLabel: TimerItemLabel,
	Root: TimerRoot,
	RootProvider: TimerRootProvider,
	Separator: TimerSeparator,
});

export type Timer = {
	Props: TimerRootProps;
	RootProps: TimerRootProps;
	ActionTrigger: TimerActionTriggerProps;
	Area: TimerAreaProps;
	Context: TimerContextProps;
	Control: TimerControlProps;
	Item: TimerItemProps;
	ItemGroup: TimerItemGroupProps;
	ItemLabel: TimerItemLabelProps;
	Root: TimerRootProps;
	RootProvider: TimerRootProviderProps;
	Separator: TimerSeparatorProps;
};

export type {
	UseTimerContext,
	UseTimerProps,
	UseTimerReturn,
} from "@ark-ui/react/timer";
export { useTimer, useTimerContext } from "@ark-ui/react/timer";

export {
	TimerActionTrigger,
	TimerArea,
	TimerContext,
	TimerControl,
	TimerItem,
	TimerItemGroup,
	TimerItemLabel,
	TimerRoot,
	TimerRootProvider,
	TimerSeparator,
};
