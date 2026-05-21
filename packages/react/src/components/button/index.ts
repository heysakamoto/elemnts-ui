import type { ComponentProps } from "react";
import { Button } from "./button";
import { ButtonGroupRoot, ButtonGroupSeparator } from "./button-group";

export type ButtonProps = ComponentProps<typeof Button>;
export type ButtonGroupSeparatorProps = ComponentProps<
	typeof ButtonGroupSeparator
>;

export type ButtonGroupRootProps = ComponentProps<typeof ButtonGroupRoot>;

export type ButtonGroup = {
	RootProps: ButtonGroupRootProps;
	ItemProps: ButtonProps;
	SeparatorProps: ButtonGroupSeparatorProps;
	Props: ButtonGroupRootProps;
};

export const ButtonGroup = Object.assign(ButtonGroupRoot, {
	Root: ButtonGroupRoot,
	Item: Button,
	Separator: ButtonGroupSeparator,
});

export {
	Button,
	ButtonGroupRoot,
	ButtonGroupSeparator,
	Button as ButtonGroupItem,
};
