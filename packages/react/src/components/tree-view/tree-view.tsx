import {
	TreeView as ArkTreeView,
	type Assign,
	useTreeViewContext,
	useTreeViewNodeContext,
} from "@ark-ui/react";
import type { ReactElement } from "react";

import {
	createStyleContext,
	type HTMLStyledProps,
} from "../../../styled-system/jsx";
import {
	type TreeViewRecipeVariantProps,
	treeViewRecipe,
} from "../../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(treeViewRecipe);

export type TreeViewRootProviderProps<T = any> = Assign<
	ArkTreeView.RootProviderProps<T>,
	HTMLStyledProps<"div"> & TreeViewRecipeVariantProps
>;
type TreeViewRootProviderComponent = {
	<T>(props: TreeViewRootProviderProps<T>): ReactElement;
	displayName?: string;
};
export const TreeViewRootProvider = withProvider(
	ArkTreeView.RootProvider,
	"root",
) as TreeViewRootProviderComponent;
TreeViewRootProvider.displayName = "TreeViewRootProvider";

export type TreeViewRootProps<T = any> = Assign<
	ArkTreeView.RootProps<T>,
	HTMLStyledProps<"div"> & TreeViewRecipeVariantProps
>;
type TreeViewRootComponent = {
	<T>(props: TreeViewRootProps<T>): ReactElement;
	displayName?: string;
};
export const TreeViewRoot = withProvider(
	ArkTreeView.Root,
	"root",
) as TreeViewRootComponent;
TreeViewRoot.displayName = "TreeViewRoot";

export const TreeViewTree = withContext(ArkTreeView.Tree, "tree");
TreeViewTree.displayName = "TreeViewTree";

export const TreeViewItem = withContext(ArkTreeView.Item, "item");
TreeViewItem.displayName = "TreeViewItem";

export const TreeViewItemIndicator = withContext(
	ArkTreeView.ItemIndicator,
	"itemIndicator",
);
TreeViewItemIndicator.displayName = "TreeViewItemIndicator";

export const TreeViewItemText = withContext(ArkTreeView.ItemText, "itemText");
TreeViewItemText.displayName = "TreeViewItemText";

export const TreeViewBranch = withContext(ArkTreeView.Branch, "branch");
TreeViewBranch.displayName = "TreeViewBranch";

export const TreeViewBranchControl = withContext(
	ArkTreeView.BranchControl,
	"branchControl",
);
TreeViewBranchControl.displayName = "TreeViewBranchControl";

export const TreeViewBranchContent = withContext(
	(props: ArkTreeView.BranchContentProps) => {
		const { collection } = useTreeViewContext();
		const { value } = useTreeViewNodeContext();

		const node = collection.findNode(value);
		const childCount = node?.children?.length ?? 0;

		return (
			<ArkTreeView.BranchContent
				data-empty={childCount === 0 ? "" : undefined}
				data-count={childCount}
				{...props}
			/>
		);
	},
	"branchContent",
);
TreeViewBranchContent.displayName = "TreeViewBranchContent";

export const TreeViewBranchIndicator = withContext(
	ArkTreeView.BranchIndicator,
	"branchIndicator",
);
TreeViewBranchIndicator.displayName = "TreeViewBranchIndicator";

export const TreeViewBranchText = withContext(
	ArkTreeView.BranchText,
	"branchText",
);
TreeViewBranchText.displayName = "TreeViewBranchText";

export const TreeViewBranchIndentGuide = withContext(
	(props: ArkTreeView.BranchIndentGuideProps) => {
		const { collection } = useTreeViewContext();
		const { value } = useTreeViewNodeContext();

		const node = collection.findNode(value);
		const childCount = node?.children?.length ?? 0;

		return (
			<ArkTreeView.BranchIndentGuide
				data-count={childCount}
				hidden={childCount === 0 ? true : undefined}
				data-empty={childCount === 0 ? "" : undefined}
				aria-hidden={childCount === 0 ? true : undefined}
				{...props}
			/>
		);
	},
	"branchIndentGuide",
);
TreeViewBranchIndentGuide.displayName = "TreeViewBranchIndentGuide";

export const TreeViewBranchTrigger = withContext(
	ArkTreeView.BranchTrigger,
	"branchTrigger",
);
TreeViewBranchTrigger.displayName = "TreeViewBranchTrigger";

export const TreeViewLabel = withContext(ArkTreeView.Label, "label");
TreeViewLabel.displayName = "TreeViewLabel";

export type TreeViewNodeProviderProps<T = any> =
	ArkTreeView.NodeProviderProps<T>;
type TreeViewNodeProviderComponent = <T>(
	props: TreeViewNodeProviderProps<T>,
) => ReactElement;
export const TreeViewNodeProvider =
	ArkTreeView.NodeProvider as TreeViewNodeProviderComponent;

export const TreeViewNodeRenameInput = withContext(
	ArkTreeView.NodeRenameInput,
	"nodeRenameInput",
);
TreeViewNodeRenameInput.displayName = "TreeViewNodeRenameInput";

export const TreeViewNodeCheckbox = withContext(
	ArkTreeView.NodeCheckbox,
	"nodeCheckbox",
);
TreeViewNodeCheckbox.displayName = "TreeViewNodeCheckbox";

export const TreeViewNodeCheckboxIndicator = ArkTreeView.NodeCheckboxIndicator;

export const TreeViewNodeContext = ArkTreeView.NodeContext;

export const TreeViewContext = ArkTreeView.Context;
