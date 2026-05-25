import { Container, DecorativeBox, VirtualList } from "@moto-ui/react";

export function VariableHeight() {
	const rowHeights = new Array(1000)
		.fill(0)
		.map(() => 25 + Math.round(Math.random() * 100));

	return (
		<Container maxW="18rem">
			<VirtualList
				count={1000}
				estimateSize={(index) => rowHeights[index] || 64}
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
	);
}
