import { Container, DecorativeBox, VirtualList } from "@moto-ui/react";
import { ClientOnly } from "@tanstack/react-router";

export function Basic() {
	return (
		<Container maxW="18rem">
			<ClientOnly>
				<VirtualList.Root
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
				</VirtualList.Root>
			</ClientOnly>
		</Container>
	);
}
