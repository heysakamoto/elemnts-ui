import type { ComponentProps } from "react";
import { KbdItem, KbdRoot } from "./kbd";

export type KbdRootProps = ComponentProps<typeof KbdRoot>;
export type KbdItemProps = ComponentProps<typeof KbdItem>;

export const Kbd = Object.assign(KbdRoot, {
	Item: KbdItem,
	Root: KbdRoot,
});

export type Kbd = {
	RootProps: KbdRootProps;
	ItemProps: KbdItemProps;
	Props: KbdRootProps;
};

export { KbdRoot, KbdItem };
