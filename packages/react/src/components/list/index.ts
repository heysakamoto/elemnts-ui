import type { ComponentProps } from "react";
import { ListIndicator, ListItem, ListRoot } from "./list";

export type ListItemProps = ComponentProps<typeof ListItem>;
export type ListIndicatorProps = ComponentProps<typeof ListIndicator>;
export type ListRootProps = ComponentProps<typeof ListRoot>;

export const List = Object.assign(ListRoot, {
	Root: ListRoot,
	Item: ListItem,
	Indicator: ListIndicator,
});

export type List = {
	Props: ListRootProps;
	RootProps: ListRootProps;
	ItemProps: ListItemProps;
	IndicatorProps: ListIndicatorProps;
};

export { ListItem, ListIndicator, ListRoot };
