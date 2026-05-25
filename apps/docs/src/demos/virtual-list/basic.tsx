import { Container, DecorativeBox, VirtualList } from "@moto-ui/react";

export function Basic() {
	return (
		<Container maxW="18rem">
			<VirtualList
				count={1000}
				estimateSize={() => 35}
			>
				<VirtualList.Viewport
					h="320"
					scrollbar="hidden"
				>
					<VirtualList.Content>
						{({ item, measureElement }) => (
							<VirtualList.Item
								item={item}
								key={item.index}
								ref={measureElement}
							>
								<DecorativeBox
									mt="8"
									h="64"
									fontSize="14"
								>
									{item.index}
								</DecorativeBox>
							</VirtualList.Item>
						)}
					</VirtualList.Content>
				</VirtualList.Viewport>
			</VirtualList>
		</Container>
	);
}
