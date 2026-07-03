import type { ComponentProps } from "react";

import {
	DialogBackdrop,
	DialogCloseTrigger,
	DialogContent,
	DialogContext,
	DialogDescription,
	DialogPositioner,
	DialogRoot,
	DialogRootProvider,
	DialogTitle,
	DialogTrigger,
} from "./dialog";

export type DialogRootProviderProps = ComponentProps<typeof DialogRootProvider>;
export type DialogRootProps = ComponentProps<typeof DialogRoot>;
export type DialogTriggerProps = ComponentProps<typeof DialogTrigger>;
export type DialogBackdropProps = ComponentProps<typeof DialogBackdrop>;
export type DialogPositionerProps = ComponentProps<typeof DialogPositioner>;
export type DialogContentProps = ComponentProps<typeof DialogContent>;
export type DialogTitleProps = ComponentProps<typeof DialogTitle>;
export type DialogDescriptionProps = ComponentProps<typeof DialogDescription>;
export type DialogCloseTriggerProps = ComponentProps<typeof DialogCloseTrigger>;
export type DialogContextProps = ComponentProps<typeof DialogContext>;

export const Dialog = Object.assign(DialogRoot, {
	Root: DialogRoot,
	RootProvider: DialogRootProvider,
	Trigger: DialogTrigger,
	Backdrop: DialogBackdrop,
	Positioner: DialogPositioner,
	Content: DialogContent,
	Title: DialogTitle,
	Description: DialogDescription,
	CloseTrigger: DialogCloseTrigger,
	Context: DialogContext,
});

export type Dialog = {
	RootProviderProps: DialogRootProviderProps;
	RootProps: DialogRootProps;
	TriggerProps: DialogTriggerProps;
	BackdropProps: DialogBackdropProps;
	PositionerProps: DialogPositionerProps;
	ContentProps: DialogContentProps;
	TitleProps: DialogTitleProps;
	DescriptionProps: DialogDescriptionProps;
	CloseTriggerProps: DialogCloseTriggerProps;
	ContextProps: DialogContextProps;
	Props: DialogRootProps;
};

export type {
	DialogOpenChangeDetails,
	UseDialogContext,
	UseDialogProps,
	UseDialogReturn,
} from "@ark-ui/react/dialog";
export { useDialog, useDialogContext } from "@ark-ui/react/dialog";

export {
	DialogBackdrop,
	DialogCloseTrigger,
	DialogContent,
	DialogContext,
	DialogDescription,
	DialogPositioner,
	DialogRoot,
	DialogRootProvider,
	DialogTitle,
	DialogTrigger,
};
