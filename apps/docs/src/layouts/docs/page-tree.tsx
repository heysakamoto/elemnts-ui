import { For, Icon, Show, Sidebar, Status } from "@moto-ui/react";
import { Link, useLocation } from "@tanstack/react-router";
import type { Folder, Item, Node } from "fumadocs-core/page-tree";
import { createContext, use, useEffect, useMemo, useState } from "react";
import { css } from "@/styled-system/css";
import { isNodeActive } from "@/utils/page-tree";
import { useDocsLayoutContext, useDocsLayoutMobileMenuContext } from "./client";

export function DocsLayoutPageTree() {
	const { pageTree } = useDocsLayoutContext();

	return (
		<Sidebar.Nav
			py="8"
			px="14"
			flex="1"
			overflow="scroll"
			scrollbar="hidden"
		>
			<Sidebar.List>
				<For each={pageTree.children}>
					{(node, idx) => (
						<NodeRenderer
							node={node}
							key={node.$id ?? String(idx)}
						/>
					)}
				</For>
			</Sidebar.List>
		</Sidebar.Nav>
	);
}

type NodeRendererProps = {
	node: Node;
};

function NodeRenderer({ node }: NodeRendererProps) {
	switch (node.type) {
		case "separator":
			return <PageTreeSeparator separator={node as Node} />;
		case "page":
			return <PageTreeItem item={node as Item} />;
		case "folder":
			return <PageTreeFolder folder={node as Folder} />;
		default:
			return null;
	}
}

type PageTreeSeparatorProps = {
	separator: Node;
};

function PageTreeSeparator({ separator }: PageTreeSeparatorProps) {
	return (
		<Sidebar.Item
			mb="2"
			px="10"
			mt="24"
			fontSize="14"
			fontWeight="500"
			letterSpacing="sm"
			color="fg.primary"
			display="inline-block"
			textTransform="capitalize"
			css={{ _first: { mt: 0 } }}
		>
			{separator.name}
		</Sidebar.Item>
	);
}

type PageTreeItemProps = {
	item: Item;
};

function PageTreeItem({ item }: PageTreeItemProps) {
	const collapsible = use(PageTreeFolderContext);
	const { open, setOpen } = useDocsLayoutMobileMenuContext();

	return (
		<Sidebar.Item
			onClick={() => {
				if (open) {
					setOpen(false);
				}
			}}
		>
			<Link
				to={item.url}
				preload="intent"
				className={itemStyles}
				activeOptions={{ exact: true }}
			>
				<Show when={collapsible}>
					<span data-part="separator"></span>
				</Show>
				{item.name}
				<Show when={(item as any).status === "new"}>
					<Status
						size="sm"
						colorPalette="accent"
					>
						<Status.Indicator ml="8" />
					</Status>
				</Show>
				<Show when={(item as any).status === "updated"}>
					<Status
						size="sm"
						colorPalette="warning"
					>
						<Status.Indicator ml="8" />
					</Status>
				</Show>
			</Link>
		</Sidebar.Item>
	);
}

const PageTreeFolderContext = createContext(false);

type PageTreeFolderProps = {
	folder: Folder;
};

function PageTreeFolder({ folder }: PageTreeFolderProps) {
	const pathname = useLocation({ select: (l) => l.pathname });
	const isActive = useMemo(() => {
		return isNodeActive(folder, pathname);
	}, [folder, pathname]);

	const [open, setOpen] = useState(folder.defaultOpen);

	function toggle() {
		setOpen(!open);
	}

	useEffect(() => {
		if (isActive) {
			setOpen(true);
		}
	}, [isActive]);

	return (
		<>
			<Show when={folder.collapsible}>
				<PageTreeFolderContext.Provider value={true}>
					<Sidebar.Item>
						<div
							className={itemStyles}
							onClick={() => toggle()}
						>
							{folder.name}
							<Icon
								width={16}
								height={16}
								icon="tabler:chevron-down"
							/>
						</div>
					</Sidebar.Item>
					<Show when={open}>
						<For each={folder.children}>
							{(child) => (
								<NodeRenderer
									node={child}
									key={child.$id}
								/>
							)}
						</For>
					</Show>
				</PageTreeFolderContext.Provider>
			</Show>
			<Show when={!folder.collapsible}>
				<For each={folder.children}>
					{(child) => (
						<NodeRenderer
							node={child}
							key={child.$id}
						/>
					)}
				</For>
			</Show>
		</>
	);
}

const itemStyles = css({
	px: 12,
	height: 32,
	rounded: 8,
	fontSize: 14,
	display: "flex",
	overflow: "clip",
	textAlign: "left",
	cursor: "pointer",
	alignItems: "center",
	position: "relative",
	color: "fg.secondary",
	justifyContent: "space-between",

	"&:has([data-part=separator])": {
		pl: "24",
	},

	"& svg": {
		color: "icon.secondary",
	},

	"&:is([data-status=active], :hover)": {
		color: "fg.primary",
		bgColor: "neutral.secondary",

		"& svg": {
			color: "current",
		},

		"& [data-part=separator]": {
			bgColor: "current",
		},
	},

	"& > [data-part=separator]": {
		left: "14",
		width: "1px",
		content: "''",
		height: "full",
		position: "absolute",
		bgColor: "stroke.primary",
	},
});
