import { css, Stack, Surface, Text } from "@moto-ui/react";
import { Link } from "@tanstack/react-router";
import type { Folder as FolderType, Item, Node } from "fumadocs-core/page-tree";
import { useDocsLayoutContext } from "./client";

// --- Components ---

type SeparatorProps = {
	node: Node;
};

function Separator({ node }: SeparatorProps) {
	return (
		<Text
			mb="2"
			px="8"
			fontSize="12"
			color="fg.tertiary"
			textTransform="capitalize"
			css={{
				"&:not(:first-child)": {
					mt: "24",
				},
			}}
		>
			{node.name}
		</Text>
	);
}

type PageProps = {
	node: Item;
	onSelect?: () => void;
};

function Page({ node, onSelect }: PageProps) {
	return (
		<Link
			to={node.url}
			preload="intent"
			activeOptions={{ exact: true }}
			className={css({
				py: "4",
				px: "8",
				rounded: "12",
				fontSize: "13",
				fontWeight: "500",
				textAlign: "left",
				color: "fg.secondary",
				"&:is([data-status=active], :hover)": {
					color: "fg.primary",
					bgColor: "bg.secondary",
				},
			})}
			onClick={onSelect}
		>
			{node.name}
		</Link>
	);
}

type FolderProps = {
	node: FolderType;
	onSelect?: () => void;
};

function Folder({ node, onSelect }: FolderProps) {
	return (
		<Surface
			delta={0}
			rounded="0"
			elevated={false}
			direction="column"
			css={{
				"&:not(:first-child)": {
					mt: "24",
				},
			}}
		>
			<Surface.Content gap="2">
				{node.children.map((child) => {
					return (
						<Switch
							node={child}
							key={child.$id}
							onSelect={onSelect}
						/>
					);
				})}
			</Surface.Content>
		</Surface>
	);
}

type SwitchProps = {
	node: Node;
	onSelect?: () => void;
};

function Switch({ node, onSelect }: SwitchProps) {
	switch (node.type) {
		case "separator":
			return <Separator node={node} />;
		case "page":
			return (
				<Page
					node={node}
					onSelect={onSelect}
				/>
			);
		case "folder":
			return (
				<Folder
					node={node}
					onSelect={onSelect}
				/>
			);
		default:
			return null;
	}
}

type NodesProps = {
	nodes: Node[];
	onSelect?: () => void;
};

function Nodes({ nodes, onSelect }: NodesProps) {
	return nodes.map((node) => (
		<Switch
			node={node}
			key={node.$id}
			onSelect={onSelect}
		/>
	));
}

// --- Main Component ---

type SidebarProps = {
	onSelect?: () => void;
};

export const Sidebar = (props: SidebarProps) => {
	const { onSelect } = props;
	const {
		state: { pageTree },
	} = useDocsLayoutContext();

	const rootFolders = pageTree.children.filter(
		(node) => node.type === "folder",
	);

	return (
		<Stack direction="column">
			{rootFolders.map((folder) => {
				return (
					<Nodes
						key={folder.$id}
						onSelect={onSelect}
						nodes={folder.children}
					/>
				);
			})}
		</Stack>
	);
};
