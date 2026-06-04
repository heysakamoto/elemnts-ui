import {
	Anchor,
	Dialog,
	List,
	Portal,
	Show,
	Status,
	Surface,
} from "@moto-ui/react";
import { Link } from "@tanstack/react-router";
import type { Folder as FolderType, Item, Node } from "fumadocs-core/page-tree";
import {
	InDialogProvider,
	useDocsLayoutContext,
	useInDialogContext,
} from "./client";

type SeparatorProps = {
	node: Node;
};

function Separator({ node }: SeparatorProps) {
	return (
		<List.Item
			px="8"
			as="span"
			fontSize="13"
			letterSpacing="sm"
			color="fg.tertiary"
			textTransform="capitalize"
			css={{
				"&:not(:first-child)": {
					mt: "24",
				},
			}}
		>
			{node.name}
		</List.Item>
	);
}

type PageProps = {
	node: Item;
	onClick?: () => void;
};

function Page({ node, onClick }: PageProps) {
	return (
		<List.Item>
			<Anchor
				mt="2"
				h="28"
				px="10"
				asChild
				w="full"
				unstyled
				rounded="12"
				fontSize="13"
				lineHeight="1"
				fontWeight="500"
				textAlign="left"
				alignItems="center"
				color="fg.secondary"
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
					<Show when={(node as any).status}>
						<Status size="sm">
							<Status.Indicator ml="8" />
						</Status>
					</Show>
				</Link>
			</Anchor>
		</List.Item>
	);
}

type FolderProps = {
	node: FolderType;
};

function Folder({ node }: FolderProps) {
	return (
		<Nodes
			key={node.$id}
			nodes={node.children}
		/>
	);
}

type NodesProps = {
	nodes: Node[];
};

function Nodes({ nodes }: NodesProps) {
	const inDialog = useInDialogContext();
	return nodes.map((node, idx) => {
		const key = `${node.$id}-${idx}`;

		switch (node.type) {
			case "separator":
				return (
					<Separator
						key={key}
						node={node}
					/>
				);
			case "page":
				if (inDialog)
					return (
						<Dialog.Context key={key}>
							{({ setOpen }) => (
								<Page
									node={node}
									onClick={() => setOpen(false)}
								/>
							)}
						</Dialog.Context>
					);
				return (
					<Page
						key={key}
						node={node}
					/>
				);
			case "folder":
				return (
					<Folder
						key={key}
						node={node}
					/>
				);
			default:
				return null;
		}
	});
}

const Root = () => {
	const {
		state: { pageTree },
	} = useDocsLayoutContext();

	const rootFolders = pageTree.children.filter(
		(node) => node.type === "folder",
	);

	return (
		<List>
			{rootFolders.map((folder) => {
				return (
					<Nodes
						key={folder.$id}
						nodes={folder.children}
					/>
				);
			})}
		</List>
	);
};

type MobileProps = {
	children: React.ReactNode;
};

function Mobile({ children }: MobileProps) {
	return (
		<InDialogProvider value={true}>
			<Dialog
				modal
				size="cover"
			>
				{children}
				<Portal>
					<Dialog.Backdrop />
					<Dialog.Positioner pt="48">
						<Dialog.Content asChild>
							<Surface
								delta={0}
								rounded="0"
								bgColor="inherit"
							>
								<Surface.Content
									p="12"
									overflow="auto"
								>
									<Root />
								</Surface.Content>
							</Surface>
						</Dialog.Content>
					</Dialog.Positioner>
				</Portal>
			</Dialog>
		</InDialogProvider>
	);
}

export const DocsLayoutSidebar = Object.assign(Root, {
	Mobile,
	MobileTrigger: Dialog.Trigger,
});
