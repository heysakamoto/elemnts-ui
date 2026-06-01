import { Container, DecorativeBox, Sortable } from "@moto-ui/react";

export function Basic() {
	return (
		<Container maxW="16rem">
			<Sortable gap="12">
				{Array.from({ length: 4 }).map((_, idx) => {
					return (
						<Sortable.Item
							index={idx + 1}
							key={idx.toString()}
							id={(idx + 1).toString()}
						>
							<Sortable.ItemHandle>
								<DecorativeBox h="3rem">{idx + 1}</DecorativeBox>
							</Sortable.ItemHandle>
						</Sortable.Item>
					);
				})}
			</Sortable>
		</Container>
	);
}
