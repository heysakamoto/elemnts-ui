import { Container, DecorativeBox, VirtualList } from "@moto-ui/react";

export function VariableHeight() {
	const rowHeights = new Array(1000)
		.fill(0)
		.map(() => 25 + Math.round(Math.random() * 100));

	return (
		<Container maxW="18rem">
			<VirtualList
				count={1000}
				estimateSize={(index) => rowHeights[index] ?? 50}
			>
				<VirtualList.Viewport
					h="320"
					scrollbar="hidden"
				>
					<VirtualList.Container>
						<VirtualList.Items>
							{(index) => (
								<DecorativeBox h="inherit">
									Row {index} ({rowHeights[index]}px)
								</DecorativeBox>
							)}
						</VirtualList.Items>
					</VirtualList.Container>
				</VirtualList.Viewport>
			</VirtualList>
		</Container>
	);
}
