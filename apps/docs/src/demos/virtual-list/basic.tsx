import { Container, VirtualList } from "@moto-ui/react";

export function Basic() {
	return (
		<Container maxW="18rem">
			<VirtualList.Root
				count={1000}
				estimateSize={() => 35}
			>
				<VirtualList.Viewport
					style={{
						height: "400px",
						width: "100%",
						border: "1px solid var(--colors-border-default)",
						borderRadius: "var(--radii-md)",
					}}
				>
					<VirtualList.Container>
						<VirtualList.Items>
							{(index) => (
								<div
									style={{
										padding: "8px",
										borderBottom: "1px solid var(--colors-border-subtle)",
									}}
								>
									Row {index}
								</div>
							)}
						</VirtualList.Items>
					</VirtualList.Container>
				</VirtualList.Viewport>
			</VirtualList.Root>
		</Container>
	);
}
