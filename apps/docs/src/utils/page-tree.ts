import type { Node } from "fumadocs-core/page-tree";

export function isNodeActive(node: Node, currentPath: string): boolean {
  if (node.type === "page") {
    return node.url === currentPath;
  }
  if (node.type === "folder") {
    if (node.index?.url === currentPath) return true;
    return node.children.some((child) => isNodeActive(child, currentPath));
  }
  return false;
}
