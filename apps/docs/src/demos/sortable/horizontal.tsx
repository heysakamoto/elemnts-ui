import { Container, DecorativeBox, Sortable } from "@moto-ui/react";

export function Horizontal() {
	return (
		<Container maxW="full">
			<Sortable
				gap="12"
				direction="row"
				flexWrap="wrap"
			>
				{Array.from({ length: 6 }).map((_, idx) => {
					return (
						<Sortable.Item
							flex="1"
							index={idx + 1}
							key={idx.toString()}
							id={(idx + 1).toString()}
						>
							<Sortable.ItemHandle>
								<DecorativeBox
									h="4rem"
									minW="8rem"
								>
									{idx + 1}
								</DecorativeBox>
							</Sortable.ItemHandle>
						</Sortable.Item>
					);
				})}
			</Sortable>
		</Container>
	);
}
