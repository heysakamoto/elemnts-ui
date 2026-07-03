import type { ComponentProps } from "react";

import {
	JsonTreeViewRoot,
	JsonTreeViewRootProvider,
	JsonTreeViewTree,
} from "./json-tree-view";

export type JsonTreeViewRootProps = ComponentProps<typeof JsonTreeViewRoot>;
export type JsonTreeViewRootProviderProps = ComponentProps<
	typeof JsonTreeViewRootProvider
>;
export type JsonTreeViewTreeProps = ComponentProps<typeof JsonTreeViewTree>;

export const JsonTreeView = Object.assign(JsonTreeViewRoot, {
	RootProvider: JsonTreeViewRootProvider,
	Tree: JsonTreeViewTree,
	Root: JsonTreeViewRoot,
});

export type JsonTreeView = {
	RootProviderProps: JsonTreeViewRootProviderProps;
	TreeProps: JsonTreeViewTreeProps;
	RootProps: JsonTreeViewRootProps;
};

export type {
	UseJsonTreeViewProps,
	UseJsonTreeViewReturn,
} from "@ark-ui/react/json-tree-view";
export { useJsonTreeView } from "@ark-ui/react/json-tree-view";

export { JsonTreeViewRoot, JsonTreeViewRootProvider, JsonTreeViewTree };
