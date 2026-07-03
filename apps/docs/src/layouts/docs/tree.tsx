import { Button, Dialog, For, List, Show, Status, Text } from "@moto-ui/react";
import { Link } from "@tanstack/react-router";
import type { Folder as FolderType, Item, Node } from "fumadocs-core/page-tree";
import { Fragment } from "react";

import { useDocsLayoutContext, useInDialogContext } from "./client";

type SeparatorProps = {
	node: Node;
};

function Label({ node }: SeparatorProps) {
	return (
		<Text
			px="8"
			as="span"
			fontSize="13"
			letterSpacing="sm"
			color="fg.tertiary"
			textTransform="capitalize"
		>
			{node.name}
		</Text>
	);
}

type PageProps = {
	node: Item;
	onClick?: () => void;
};

function Page({ node, onClick }: PageProps) {
	return (
		<List.Item
			css={{
				"&:not(:last-of-type)": {
					mb: "2",
				},
			}}
		>
			<Button
				asChild
				size="sm"
				fullWidth
				fontSize="13"
				justify="start"
				variant="ghost"
				textAlign="left"
				alignItems="center"
				display="inline-flex"
				css={{
					"&:is([data-status=active], :hover)": {
						color: "fg.primary",
						bgColor: "bg.secondary",
					},
				}}
			>
				<Link
					to={node.url}
					preload="intent"
					onClick={onClick}
					activeOptions={{ exact: true }}
				>
					{node.name}
					<Show when={(node as any).status === "new"}>
						<Status
							size="sm"
							colorPalette="accent"
						>
							<Status.Indicator ml="8" />
						</Status>
					</Show>
					<Show when={(node as any).status === "updated"}>
						<Status
							size="sm"
							colorPalette="warning"
						>
							<Status.Indicator ml="8" />
						</Status>
					</Show>
				</Link>
			</Button>
		</List.Item>
	);
}

type FolderProps = {
	node: FolderType;
};

function Folder({ node }: FolderProps) {
	return (
		<List
			gap="2"
			css={{
				"&:not(:last-child)": {
					mb: "24",
				},
			}}
		>
			<For each={node.children}>
				{(node) => (
					<Switch
						node={node}
						key={node.$id}
					/>
				)}
			</For>
		</List>
	);
}

type NodesProps = {
	node: Node;
};

function Switch({ node }: NodesProps) {
	const inDialog = useInDialogContext();

	return (
		<Fragment>
			<Show when={node.type === "separator"}>
				<Label node={node as Node} />
			</Show>
			<Show when={node.type === "page"}>
				<Show
					when={inDialog}
					fallback={<Page node={node as Item} />}
				>
					<Dialog.Context>
						{({ setOpen }) => (
							<Page
								node={node as Item}
								onClick={() => setOpen(false)}
							/>
						)}
					</Dialog.Context>
				</Show>
			</Show>
			<Show when={node.type === "folder"}>
				<Folder node={node as FolderType} />
			</Show>
		</Fragment>
	);
}

export function DocsLayoutTree() {
	const { pageTree } = useDocsLayoutContext();

	return (
		<For each={pageTree.children}>
			{(node) => (
				<Switch
					node={node}
					key={node.$id}
				/>
			)}
		</For>
	);
}
