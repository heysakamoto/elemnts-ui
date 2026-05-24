import type { ComponentProps } from "react";
import {
	DataListItem,
	DataListItemLabel,
	DataListItemValue,
	DataListRoot,
} from "./data-list";

export type DataListRootProps = ComponentProps<typeof DataListRoot>;
export type DataListItemProps = ComponentProps<typeof DataListItem>;
export type DataListItemLabelProps = ComponentProps<typeof DataListItemLabel>;
export type DataListItemValueProps = ComponentProps<typeof DataListItemValue>;

export type DataListProps = {
	RootProps: DataListRootProps;
	ItemProps: DataListItemProps;
	ItemLabelProps: DataListItemLabelProps;
	ItemValueProps: DataListItemValueProps;
};

export const DataList = Object.assign(DataListRoot, {
	Root: DataListRoot,
	Item: DataListItem,
	ItemLabel: DataListItemLabel,
	ItemValue: DataListItemValue,
});

export { DataListRoot, DataListItem, DataListItemLabel, DataListItemValue };
