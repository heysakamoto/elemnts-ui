import type { Folder, Node, Root } from "fumadocs-core/page-tree";
import type { Page } from "fumadocs-core/source";

function getPage(child?: Page) {
	return child ?? null;
}

function findPageNode(folder: Folder, path: string) {
	for (const child of folder.children) {
		if (child.type === "page" && child.url === path) {
			return child.$id ?? null;
		}

		if (child.type === "folder") {
			if (findPageNode(child, path)) {
				return child.$id ?? null;
			}
		}
	}
	return null;
}

function extractSidebarNodes(tree: Root): Node[] {
	return (
		tree.children?.flatMap((node) =>
			node.type === "folder" ? node.children : [],
		) ?? []
	);
}

export const fumadocs = Object.assign(
	{},
	{
		getPageId: getPage,
		folder: {
			findPageNode,
		},
		extractSidebarNodes,
	},
);
