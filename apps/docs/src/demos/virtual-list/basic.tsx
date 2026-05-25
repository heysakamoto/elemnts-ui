import { Container, DecorativeBox, VirtualList } from "@moto-ui/react";

export function Basic() {
	return (
		<Container maxW="18rem">
			<VirtualList
				count={1000}
				estimateSize={() => 35}
			>
				<VirtualList.Viewport style={{ height: 320 }}>
					<VirtualList.Container>
						<VirtualList.Items>
							{(index) => <DecorativeBox h="full">{index}</DecorativeBox>}
						</VirtualList.Items>
					</VirtualList.Container>
				</VirtualList.Viewport>
			</VirtualList>
		</Container>
	);
}
