import type { ComponentProps } from "react";
import {
	TagsInputClearTrigger,
	TagsInputContext,
	TagsInputControl,
	TagsInputHiddenInput,
	TagsInputInput,
	TagsInputItem,
	TagsInputItemContext,
	TagsInputItemDeleteTrigger,
	TagsInputItemInput,
	TagsInputItemPreview,
	TagsInputItemText,
	TagsInputLabel,
	TagsInputRoot,
	TagsInputRootProvider,
} from "./tags-input";

export type TagsInputRootProviderProps = ComponentProps<
	typeof TagsInputRootProvider
>;
export type TagsInputRootProps = ComponentProps<typeof TagsInputRoot>;
export type TagsInputClearTriggerProps = ComponentProps<
	typeof TagsInputClearTrigger
>;
export type TagsInputContextProps = ComponentProps<typeof TagsInputContext>;
export type TagsInputControlProps = ComponentProps<typeof TagsInputControl>;
export type TagsInputHiddenInputProps = ComponentProps<
	typeof TagsInputHiddenInput
>;
export type TagsInputInputProps = ComponentProps<typeof TagsInputInput>;
export type TagsInputItemProps = ComponentProps<typeof TagsInputItem>;
export type TagsInputItemContextProps = ComponentProps<
	typeof TagsInputItemContext
>;
export type TagsInputItemDeleteTriggerProps = ComponentProps<
	typeof TagsInputItemDeleteTrigger
>;
export type TagsInputItemInputProps = ComponentProps<typeof TagsInputItemInput>;
export type TagsInputItemPreviewProps = ComponentProps<
	typeof TagsInputItemPreview
>;
export type TagsInputItemTextProps = ComponentProps<typeof TagsInputItemText>;
export type TagsInputLabelProps = ComponentProps<typeof TagsInputLabel>;

export const TagsInput = Object.assign(TagsInputRoot, {
	ClearTrigger: TagsInputClearTrigger,
	Context: TagsInputContext,
	Control: TagsInputControl,
	HiddenInput: TagsInputHiddenInput,
	Input: TagsInputInput,
	Item: TagsInputItem,
	ItemContext: TagsInputItemContext,
	ItemDeleteTrigger: TagsInputItemDeleteTrigger,
	ItemInput: TagsInputItemInput,
	ItemPreview: TagsInputItemPreview,
	ItemText: TagsInputItemText,
	Label: TagsInputLabel,
	Root: TagsInputRoot,
	RootProvider: TagsInputRootProvider,
});

export type TagsInput = {
	Props: TagsInputRootProps;
	RootProviderProps: TagsInputRootProviderProps;
	ClearTriggerProps: TagsInputClearTriggerProps;
	ContextProps: TagsInputContextProps;
	ControlProps: TagsInputControlProps;
	HiddenInputProps: TagsInputHiddenInputProps;
	InputProps: TagsInputInputProps;
	ItemProps: TagsInputItemProps;
	ItemContextProps: TagsInputItemContextProps;
	ItemDeleteTriggerProps: TagsInputItemDeleteTriggerProps;
	ItemInputProps: TagsInputItemInputProps;
	ItemPreviewProps: TagsInputItemPreviewProps;
	ItemTextProps: TagsInputItemTextProps;
	LabelProps: TagsInputLabelProps;
	RootProps: TagsInputRootProps;
};

export type {
	TagsInputHighlightChangeDetails,
	TagsInputValidityChangeDetails,
	TagsInputValueChangeDetails,
	UseTagsInputContext,
	UseTagsInputItemContext,
	UseTagsInputProps,
	UseTagsInputReturn,
} from "@ark-ui/react/tags-input";

export {
	useTagsInput,
	useTagsInputContext,
	useTagsInputItemContext,
} from "@ark-ui/react/tags-input";

export {
	TagsInputClearTrigger,
	TagsInputContext,
	TagsInputControl,
	TagsInputHiddenInput,
	TagsInputInput,
	TagsInputItem,
	TagsInputItemContext,
	TagsInputItemDeleteTrigger,
	TagsInputItemInput,
	TagsInputItemPreview,
	TagsInputItemText,
	TagsInputLabel,
	TagsInputRoot,
	TagsInputRootProvider,
};
