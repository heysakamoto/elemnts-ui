import preview from "@.storybook/preview";
import { Container, DecorativeBox, VirtualList } from "@moto-ui/react";

const rowHeights = Array.from({ length: 1000 }).map(
	() => 25 + Math.round(Math.random() * 100),
);

const meta = preview.meta({
	title: "Variable Height",
	component: VirtualList,
});

export const VariableHeight = meta.story({
	args: {
		count: 1000,
	},
	parameters: {
		docs: {
			description: {
				story:
					"You can provide an `estimateSize` function to handle items with different heights.",
			},
		},
	},
	render: (args) => (
		<Container maxW="18rem">
			<VirtualList
				{...args}
				estimateSize={args.estimateSize ?? ((index) => rowHeights[index] || 64)}
			>
				<VirtualList.Viewport
					h="320"
					scrollbar="hidden"
				>
					<VirtualList.Content>
						{({ item }) => (
							<VirtualList.Item
								item={item}
								style={{ height: `${item.size}px` }}
							>
								<DecorativeBox
									h="full"
									fontSize="14"
								>
									Row {item.index + 1} ({rowHeights[item.index]}px)
								</DecorativeBox>
							</VirtualList.Item>
						)}
					</VirtualList.Content>
				</VirtualList.Viewport>
			</VirtualList>
		</Container>
	),
});
