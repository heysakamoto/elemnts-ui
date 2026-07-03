import {
	Container,
	createTreeCollection,
	Icon,
	Item,
	TreeView,
} from "@moto-ui/react";

import preview from "@.storybook/preview";

type Node = {
	id: string;
	name: string;
	children?: Node[];
};

const collection = createTreeCollection<Node>({
	nodeToValue: (node) => node.id,
	nodeToString: (node) => node.name,
	rootNode: {
		id: "ROOT",
		name: "",
		children: [
			{
				id: "public",
				name: "public",
				children: [
					{
						id: "public/images",
						name: "images",
						children: [
							{ id: "public/images/hero-bg.png", name: "hero-bg.png" },
							{ id: "public/images/service-bg.png", name: "service-bg.png" },
						],
					},
					{ id: "public/favicon.ico", name: "favicon.ico" },
					{ id: "public/logo.png", name: "logo.png" },
				],
			},
			{
				id: "src",
				name: "src",
				children: [
					{
						id: "src/components",
						name: "components",
						children: [
							{ id: "src/components/header.tsx", name: "header.tsx" },
							{ id: "src/components/footer.tsx", name: "footer.tsx" },
							{ id: "src/components/index.ts", name: "index.ts" },
						],
					},
					{ id: "src/app.tsx", name: "app.tsx" },
					{ id: "src/main.tsx", name: "main.tsx" },
				],
			},
			{ id: "panda.config", name: "panda.config.ts" },
			{ id: "package.json", name: "package.json" },
		],
	},
});

const meta = preview.meta({
	title: "Basic",
	component: TreeView,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The TreeView component is built using the compound component pattern. You'll need to provide a collection created with createTreeCollection and recursively render the nodes using TreeView.NodeProvider.",
			},
		},
	},
	render: (args) => {
		const renderNode = (
			currentNode: any,
			indexPath: number[],
		): React.ReactNode => {
			return (
				<TreeView.NodeProvider
					key={currentNode.id}
					node={currentNode}
					indexPath={indexPath}
				>
					{currentNode.children ? (
						<TreeView.Branch>
							<TreeView.BranchControl asChild>
								<Item
									size="md"
									rounded="calc(24px - 4px)"
									colorPalette="neutral"
									variant="secondary"
								>
									<Icon icon="tabler:folder" />
									<TreeView.BranchText>{currentNode.name}</TreeView.BranchText>
									<TreeView.BranchIndicator>
										<Icon
											icon="tabler:chevron-down"
											width={16}
											height={16}
										/>
									</TreeView.BranchIndicator>
								</Item>
							</TreeView.BranchControl>
							<TreeView.BranchContent>
								<TreeView.BranchIndentGuide />
								{currentNode.children.map((child: any, idx: number) =>
									renderNode(child, [...indexPath, idx]),
								)}
							</TreeView.BranchContent>
						</TreeView.Branch>
					) : (
						<TreeView.Item asChild>
							<Item
								size="md"
								rounded="calc(24px - 4px)"
								colorPalette="neutral"
								variant="secondary"
							>
								<Icon icon="tabler:file-spark" />
								<TreeView.ItemText>{currentNode.name}</TreeView.ItemText>
							</Item>
						</TreeView.Item>
					)}
				</TreeView.NodeProvider>
			);
		};

		return (
			<Container maxW="16rem">
				<TreeView.Root
					collection={collection as any}
					{...args}
				>
					<TreeView.Tree>
						{collection.rootNode.children?.map((node: any, index: number) =>
							renderNode(node, [index]),
						)}
					</TreeView.Tree>
				</TreeView.Root>
			</Container>
		);
	},
});
