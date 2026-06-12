import type { ComponentProps } from "react";
import {
	ClipboardContext,
	ClipboardControl,
	ClipboardIndicator,
	ClipboardInput,
	ClipboardLabel,
	ClipboardRoot,
	ClipboardRootProvider,
	ClipboardTrigger,
	ClipboardValueText,
} from "./clipboard";

export type ClipboardRootProviderProps = ComponentProps<
	typeof ClipboardRootProvider
>;
export type ClipboardRootProps = ComponentProps<typeof ClipboardRoot>;
export type ClipboardLabelProps = ComponentProps<typeof ClipboardLabel>;
export type ClipboardControlProps = ComponentProps<typeof ClipboardControl>;
export type ClipboardInputProps = ComponentProps<typeof ClipboardInput>;
export type ClipboardTriggerProps = ComponentProps<typeof ClipboardTrigger>;
export type ClipboardIndicatorProps = ComponentProps<typeof ClipboardIndicator>;
export type ClipboardValueTextProps = ComponentProps<typeof ClipboardValueText>;
export type ClipboardContextProps = ComponentProps<typeof ClipboardContext>;

export const Clipboard = Object.assign(ClipboardRoot, {
	RootProvider: ClipboardRootProvider,
	Root: ClipboardRoot,
	Label: ClipboardLabel,
	Control: ClipboardControl,
	Input: ClipboardInput,
	Trigger: ClipboardTrigger,
	Indicator: ClipboardIndicator,
	ValueText: ClipboardValueText,
	Context: ClipboardContext,
});

export type Clipboard = {
	RootProviderProps: ClipboardRootProviderProps;
	RootProps: ClipboardRootProps;
	LabelProps: ClipboardLabelProps;
	ControlProps: ClipboardControlProps;
	InputProps: ClipboardInputProps;
	TriggerProps: ClipboardTriggerProps;
	IndicatorProps: ClipboardIndicatorProps;
	ValueTextProps: ClipboardValueTextProps;
	ContextProps: ClipboardContextProps;
	Props: ClipboardRootProps;
};

export type {
	ClipboardCopyStatusDetails,
	UseClipboardContext,
	UseClipboardProps,
	UseClipboardReturn,
} from "@ark-ui/react/clipboard";

export { useClipboard, useClipboardContext } from "@ark-ui/react/clipboard";

export {
	ClipboardContext,
	ClipboardControl,
	ClipboardIndicator,
	ClipboardInput,
	ClipboardLabel,
	ClipboardRoot,
	ClipboardRootProvider,
	ClipboardTrigger,
	ClipboardValueText,
};
