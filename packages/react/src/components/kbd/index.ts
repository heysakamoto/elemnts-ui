import type { ComponentProps } from "react";
import { KbdItem, KbdItemGroup, KbdItemGroupText, KbdRoot } from "./kbd";

export type KbdRootProps = ComponentProps<typeof KbdRoot>;
export type KbdItemProps = ComponentProps<typeof KbdItem>;
export type KbdItemGroupProps = ComponentProps<typeof KbdItemGroup>;
export type KbdItemGroupTextProps = ComponentProps<typeof KbdItemGroupText>;

export const Kbd = Object.assign(KbdRoot, {
	Item: KbdItem,
	Root: KbdRoot,
	ItemGroup: KbdItemGroup,
	ItemGroupText: KbdItemGroupText,
});

export type Kbd = {
	RootProps: KbdRootProps;
	ItemProps: KbdItemProps;
	ItemGroupProps: KbdItemGroupProps;
	ItemGroupTextProps: KbdItemGroupTextProps;
	Props: KbdRootProps;
};

export { KbdItem, KbdItemGroup, KbdItemGroupText, KbdRoot };
