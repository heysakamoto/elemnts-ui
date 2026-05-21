import type { ComponentProps } from "react";
import {
	InputGroupAddon,
	InputGroupInput,
	InputGroupRoot,
	InputGroupTextarea,
} from "./input-group";

export type InputGroupAddonProps = ComponentProps<typeof InputGroupAddon>;
export type InputGroupInputProps = ComponentProps<typeof InputGroupInput>;
export type InputGroupRootProps = ComponentProps<typeof InputGroupRoot>;
export type InputGroupTextareaProps = ComponentProps<typeof InputGroupTextarea>;

export const InputGroup = Object.assign(InputGroupRoot, {
	Addon: InputGroupAddon,
	Root: InputGroupRoot,
	Input: InputGroupInput,
	Textarea: InputGroupTextarea,
});

export type InputGroup = {
	AddonProps: InputGroupAddonProps;
	InputProps: InputGroupInputProps;
	RootProps: InputGroupRootProps;
	TextareaProps: InputGroupTextareaProps;
	Props: InputGroupRootProps;
};

export { InputGroupAddon, InputGroupInput, InputGroupRoot, InputGroupTextarea };
