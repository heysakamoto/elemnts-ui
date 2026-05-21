import {
	Checkmark,
	Container,
	createTreeCollection,
	Icon,
	Item,
	TreeView,
	useTreeViewNodeContext,
} from "@moto-ui/react";

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
					{ id: "public/favicon.ico", name: "favicon.ico" },
					{ id: "public/logo.png", name: "logo.png" },
				],
			},
			{
				id: "src",
				name: "src",
				children: [
					{ id: "src/app.tsx", name: "app.tsx" },
					{ id: "src/main.tsx", name: "main.tsx" },
				],
			},
			{ id: "package.json", name: "package.json" },
		],
	},
});

export const Checkbox = () => {
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
								<TreeViewNodeCheckbox />
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
							<TreeViewNodeCheckbox />
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
				selectionMode="multiple"
			>
				<TreeView.Tree>
					{collection.rootNode.children?.map((node: any, index: number) =>
						renderNode(node, [index]),
					)}
				</TreeView.Tree>
			</TreeView.Root>
		</Container>
	);
};

function TreeViewNodeCheckbox() {
	const ctx = useTreeViewNodeContext();

	return (
		<TreeView.NodeCheckbox>
			<Checkmark
				size="md"
				indeterminate={ctx.checked === "indeterminate"}
				checked={ctx.checked === true}
				fallback={
					<Icon
						icon="tabler:minus"
						width={12}
						height={12}
					/>
				}
			>
				<Icon
					icon="tabler:check"
					width={12}
					height={12}
				/>
			</Checkmark>
		</TreeView.NodeCheckbox>
	);
}
