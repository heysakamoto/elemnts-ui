import type { ComponentProps } from "react";
import {
	TreeViewBranch,
	TreeViewBranchContent,
	TreeViewBranchControl,
	TreeViewBranchIndentGuide,
	TreeViewBranchIndicator,
	TreeViewBranchText,
	TreeViewBranchTrigger,
	TreeViewContext,
	TreeViewItem,
	TreeViewItemIndicator,
	TreeViewItemText,
	TreeViewLabel,
	TreeViewNodeCheckbox,
	TreeViewNodeCheckboxIndicator,
	TreeViewNodeContext,
	TreeViewNodeProvider,
	type TreeViewNodeProviderProps,
	TreeViewNodeRenameInput,
	TreeViewRoot,
	type TreeViewRootProps,
	TreeViewRootProvider,
	type TreeViewRootProviderProps,
	TreeViewTree,
} from "./tree-view";

export type TreeViewBranchProps = ComponentProps<typeof TreeViewBranch>;
export type TreeViewBranchContentProps = ComponentProps<
	typeof TreeViewBranchContent
>;
export type TreeViewBranchControlProps = ComponentProps<
	typeof TreeViewBranchControl
>;
export type TreeViewBranchIndentGuideProps = ComponentProps<
	typeof TreeViewBranchIndentGuide
>;
export type TreeViewBranchIndicatorProps = ComponentProps<
	typeof TreeViewBranchIndicator
>;
export type TreeViewBranchTextProps = ComponentProps<typeof TreeViewBranchText>;
export type TreeViewBranchTriggerProps = ComponentProps<
	typeof TreeViewBranchTrigger
>;
export type TreeViewContextProps = ComponentProps<typeof TreeViewContext>;
export type TreeViewItemProps = ComponentProps<typeof TreeViewItem>;
export type TreeViewItemIndicatorProps = ComponentProps<
	typeof TreeViewItemIndicator
>;
export type TreeViewItemTextProps = ComponentProps<typeof TreeViewItemText>;
export type TreeViewLabelProps = ComponentProps<typeof TreeViewLabel>;
export type TreeViewNodeCheckboxProps = ComponentProps<
	typeof TreeViewNodeCheckbox
>;
export type TreeViewNodeCheckboxIndicatorProps = ComponentProps<
	typeof TreeViewNodeCheckboxIndicator
>;
export type TreeViewNodeContextProps = ComponentProps<
	typeof TreeViewNodeContext
>;
export type TreeViewNodeRenameInputProps = ComponentProps<
	typeof TreeViewNodeRenameInput
>;
export type TreeViewTreeProps = ComponentProps<typeof TreeViewTree>;

export const TreeView = Object.assign(TreeViewRoot, {
	Branch: TreeViewBranch,
	BranchContent: TreeViewBranchContent,
	BranchControl: TreeViewBranchControl,
	BranchIndentGuide: TreeViewBranchIndentGuide,
	BranchIndicator: TreeViewBranchIndicator,
	BranchText: TreeViewBranchText,
	BranchTrigger: TreeViewBranchTrigger,
	Context: TreeViewContext,
	Item: TreeViewItem,
	ItemIndicator: TreeViewItemIndicator,
	ItemText: TreeViewItemText,
	Label: TreeViewLabel,
	NodeCheckbox: TreeViewNodeCheckbox,
	NodeCheckboxIndicator: TreeViewNodeCheckboxIndicator,
	NodeContext: TreeViewNodeContext,
	NodeProvider: TreeViewNodeProvider,
	NodeRenameInput: TreeViewNodeRenameInput,
	Root: TreeViewRoot,
	RootProvider: TreeViewRootProvider,
	Tree: TreeViewTree,
});

export type TreeView<T = any> = {
	Props: TreeViewRootProps<T>;
	RootProviderProps: TreeViewRootProviderProps<T>;
	Branch: TreeViewBranchProps;
	BranchContent: TreeViewBranchContentProps;
	BranchControl: TreeViewBranchControlProps;
	BranchIndentGuide: TreeViewBranchIndentGuideProps;
	BranchIndicator: TreeViewBranchIndicatorProps;
	BranchText: TreeViewBranchTextProps;
	BranchTrigger: TreeViewBranchTriggerProps;
	Context: TreeViewContextProps;
	Item: TreeViewItemProps;
	ItemIndicator: TreeViewItemIndicatorProps;
	ItemText: TreeViewItemTextProps;
	Label: TreeViewLabelProps;
	NodeCheckbox: TreeViewNodeCheckboxProps;
	NodeCheckboxIndicator: TreeViewNodeCheckboxIndicatorProps;
	NodeContext: TreeViewNodeContextProps;
	NodeProvider: TreeViewNodeProviderProps<T>;
	NodeRenameInput: TreeViewNodeRenameInputProps;
	Root: TreeViewRootProps<T>;
	Tree: TreeViewTreeProps;
};

export type {
	TreeCollection,
	TreeViewExpandedChangeDetails,
	TreeViewFocusChangeDetails,
	TreeViewSelectionChangeDetails,
	UseTreeViewContext,
	UseTreeViewNodeContext,
	UseTreeViewProps,
	UseTreeViewReturn,
} from "@ark-ui/react/tree-view";

export {
	useTreeView,
	useTreeViewContext,
	useTreeViewNodeContext,
} from "@ark-ui/react/tree-view";

export {
	TreeViewBranch,
	TreeViewBranchContent,
	TreeViewBranchControl,
	TreeViewBranchIndentGuide,
	TreeViewBranchIndicator,
	TreeViewBranchText,
	TreeViewBranchTrigger,
	TreeViewContext,
	TreeViewItem,
	TreeViewItemIndicator,
	TreeViewItemText,
	TreeViewLabel,
	TreeViewNodeCheckbox,
	TreeViewNodeCheckboxIndicator,
	TreeViewNodeContext,
	TreeViewNodeProvider,
	TreeViewNodeRenameInput,
	TreeViewRoot,
	TreeViewRootProvider,
	TreeViewTree,
};

export type {
	TreeViewRootProps,
	TreeViewRootProviderProps,
	TreeViewNodeProviderProps,
};
