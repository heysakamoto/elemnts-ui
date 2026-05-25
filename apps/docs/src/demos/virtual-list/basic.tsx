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
					<VirtualList.Container>
						<VirtualList.Items>
							{(index) => (
								<DecorativeBox
									mt="8"
									h="64"
									fontSize="14"
								>
									{index}
								</DecorativeBox>
							)}
						</VirtualList.Items>
					</VirtualList.Container>
				</VirtualList.Viewport>
			</VirtualList>
		</Container>
	);
}
