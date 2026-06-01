import { Dialog, Portal, Stack, Surface, Text } from "@moto-ui/react";
import { css } from "@moto-ui/styled-system/css";
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
		<Text
			px="8"
			fontSize="14"
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
		</Text>
	);
}

type PageProps = {
	node: Item;
	onClick?: () => void;
};

function Page({ node, onClick }: PageProps) {
	return (
		<Link
			to={node.url}
			preload="intent"
			onClick={onClick}
			activeOptions={{ exact: true }}
			className={css({
				mt: "2",
				h: "28",
				px: "10",
				rounded: "12",
				fontSize: "14",
				textAlign: "left",
				alignItems: "center",
				color: "fg.secondary",
				display: "inline-flex",
				"&:is([data-status=active], :hover)": {
					color: "fg.primary",
					bgColor: "bg.secondary",
				},
			})}
		>
			{node.name}
		</Link>
	);
}

type FolderProps = {
	node: FolderType;
};

function Folder({ node }: FolderProps) {
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
			<Surface.Content>
				{node.children.map((child) => {
					return (
						<Switch
							node={child}
							key={child.$id}
						/>
					);
				})}
			</Surface.Content>
		</Surface>
	);
}

type SwitchProps = {
	node: Node;
};

function Switch({ node }: SwitchProps) {
	const inDialog = useInDialogContext();

	switch (node.type) {
		case "separator":
			return <Separator node={node} />;
		case "page":
			if (inDialog)
				return (
					<Dialog.Context>
						{({ setOpen }) => (
							<Page
								node={node}
								onClick={() => setOpen(false)}
							/>
						)}
					</Dialog.Context>
				);
			return <Page node={node} />;
		case "folder":
			return <Folder node={node} />;
		default:
			return null;
	}
}

type NodesProps = {
	nodes: Node[];
};

function Nodes({ nodes }: NodesProps) {
	return nodes.map((node) => (
		<Switch
			node={node}
			key={node.$id}
		/>
	));
}

const SidebarRoot = () => {
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
						nodes={folder.children}
					/>
				);
			})}
		</Stack>
	);
};

type SidebarMobileProps = {
	children: React.ReactNode;
};

function SidebarMobile({ children }: SidebarMobileProps) {
	return (
		<InDialogProvider value={true}>
			<Dialog
				modal
				size="full"
			>
				{children}
				<Portal>
					<Dialog.Backdrop />
					<Dialog.Positioner pt="48">
						<Dialog.Content asChild>
							<Surface
								delta={1}
								rounded="0"
								roundedTop="24"
							>
								<Surface.Content
									p="12"
									overflow="auto"
								>
									<Sidebar />
								</Surface.Content>
							</Surface>
						</Dialog.Content>
					</Dialog.Positioner>
				</Portal>
			</Dialog>
		</InDialogProvider>
	);
}

export const Sidebar = Object.assign(SidebarRoot, {
	Mobile: SidebarMobile,
	MobileTrigger: Dialog.Trigger,
});
