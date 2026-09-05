import {
	Checkmark,
	Container,
	createTreeCollection,
	Icon,
	Item,
	TreeView,
	useTreeViewNodeContext,
} from "@elemnts-ui/react";

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

export default function Checkbox() {
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
								size="xs"
								fontSize="14"
								variant="secondary"
								pl="calc(var(--depth) * 8px)"
							>
								<TreeViewNodeCheckbox />
								<TreeView.BranchText>{currentNode.name}</TreeView.BranchText>
								<TreeView.BranchIndicator>
									<Icon icon="tabler:chevron-down" width={16} height={16} />
								</TreeView.BranchIndicator>
							</Item>
						</TreeView.BranchControl>
						<TreeView.BranchContent>
							{currentNode.children.map((child: any, idx: number) =>
								renderNode(child, [...indexPath, idx]),
							)}
						</TreeView.BranchContent>
					</TreeView.Branch>
				) : (
					<TreeView.Item asChild>
						<Item
							size="xs"
							fontSize="14"
							variant="secondary"
							pl="calc(var(--depth) * 8px)"
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
			<TreeView.Root collection={collection as any} selectionMode="multiple">
				<TreeView.Tree>
					{collection.rootNode.children?.map((node: any, index: number) =>
						renderNode(node, [index]),
					)}
				</TreeView.Tree>
			</TreeView.Root>
		</Container>
	);
}

function TreeViewNodeCheckbox() {
	const ctx = useTreeViewNodeContext();

	return (
		<TreeView.NodeCheckbox>
			<Checkmark
				size="sm"
				checked={ctx.checked === true}
				indeterminate={ctx.checked === "indeterminate"}
			/>
		</TreeView.NodeCheckbox>
	);
}
