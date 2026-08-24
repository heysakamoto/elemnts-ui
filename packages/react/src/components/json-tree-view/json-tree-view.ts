import { JsonTreeView } from "@ark-ui/react";

import { createStyleContext } from "../../../styled-system/jsx";
import { jsonTreeViewRecipe } from "../../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(jsonTreeViewRecipe);

export const JsonTreeViewRootProvider = withProvider(
	JsonTreeView.RootProvider,
	"root",
);
JsonTreeViewRootProvider.displayName = "RootProvider";

export const JsonTreeViewRoot = withProvider(JsonTreeView.Root, "root");
JsonTreeViewRoot.displayName = "Root";

export const JsonTreeViewTree = withContext(JsonTreeView.Tree, "tree");
JsonTreeViewTree.displayName = "Tree";
