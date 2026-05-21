import type { ComponentProps } from "react";
import {
	StepsCompletedContent,
	StepsContent,
	StepsContext,
	StepsIndicator,
	StepsItem,
	StepsItemContext,
	StepsList,
	StepsNextTrigger,
	StepsPrevTrigger,
	StepsProgress,
	StepsRoot,
	StepsRootProvider,
	StepsSeparator,
	StepsTrigger,
} from "./steps";

export type StepsCompletedContentProps = ComponentProps<
	typeof StepsCompletedContent
>;
export type StepsContentProps = ComponentProps<typeof StepsContent>;
export type StepsContextProps = ComponentProps<typeof StepsContext>;
export type StepsIndicatorProps = ComponentProps<typeof StepsIndicator>;
export type StepsItemProps = ComponentProps<typeof StepsItem>;
export type StepsItemContextProps = ComponentProps<typeof StepsItemContext>;
export type StepsListProps = ComponentProps<typeof StepsList>;
export type StepsNextTriggerProps = ComponentProps<typeof StepsNextTrigger>;
export type StepsPrevTriggerProps = ComponentProps<typeof StepsPrevTrigger>;
export type StepsProgressProps = ComponentProps<typeof StepsProgress>;
export type StepsRootProps = ComponentProps<typeof StepsRoot>;
export type StepsRootProviderProps = ComponentProps<typeof StepsRootProvider>;
export type StepsSeparatorProps = ComponentProps<typeof StepsSeparator>;
export type StepsTriggerProps = ComponentProps<typeof StepsTrigger>;

export const Steps = Object.assign(StepsRoot, {
	CompletedContent: StepsCompletedContent,
	Content: StepsContent,
	Context: StepsContext,
	Indicator: StepsIndicator,
	Item: StepsItem,
	ItemContext: StepsItemContext,
	List: StepsList,
	NextTrigger: StepsNextTrigger,
	PrevTrigger: StepsPrevTrigger,
	Progress: StepsProgress,
	Root: StepsRoot,
	RootProvider: StepsRootProvider,
	Separator: StepsSeparator,
	Trigger: StepsTrigger,
});

export type Steps = {
	RootProviderProps: StepsRootProviderProps;
	CompletedContentProps: StepsCompletedContentProps;
	ContentProps: StepsContentProps;
	ContextProps: StepsContextProps;
	IndicatorProps: StepsIndicatorProps;
	ItemProps: StepsItemProps;
	ItemContextProps: StepsItemContextProps;
	ListProps: StepsListProps;
	NextTriggerProps: StepsNextTriggerProps;
	PrevTriggerProps: StepsPrevTriggerProps;
	ProgressProps: StepsProgressProps;
	RootProps: StepsRootProps;
	SeparatorProps: StepsSeparatorProps;
	TriggerProps: StepsTriggerProps;
	Props: StepsRootProps;
};

export type {
	StepChangeDetails,
	UseStepsContext,
	UseStepsItemContext,
	UseStepsProps,
	UseStepsReturn,
} from "@ark-ui/react/steps";

export {
	useSteps,
	useStepsContext,
	useStepsItemContext,
} from "@ark-ui/react/steps";

export {
	StepsCompletedContent,
	StepsContent,
	StepsContext,
	StepsIndicator,
	StepsItem,
	StepsItemContext,
	StepsList,
	StepsNextTrigger,
	StepsPrevTrigger,
	StepsProgress,
	StepsRoot,
	StepsRootProvider,
	StepsSeparator,
	StepsTrigger,
};
