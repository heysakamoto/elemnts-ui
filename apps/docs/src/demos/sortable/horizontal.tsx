import { Container, DecorativeBox, Sortable } from "@moto-ui/react";

const items = [
	{ id: "1", label: "Item 1" },
	{ id: "2", label: "Item 2" },
	{ id: "3", label: "Item 3" },
	{ id: "4", label: "Item 4" },
	{ id: "5", label: "Item 5" },
	{ id: "6", label: "Item 6" },
];

export function Horizontal() {
	return (
		<Container maxW="full">
			<Sortable
				gap="12"
				wrap="wrap"
				direction="row"
				defaultValue={items}
			>
				{items.map((item, idx) => {
					return (
						<Sortable.Item
							flex="1"
							index={idx}
							id={item.id}
							key={item.id}
							fontSize="14"
						>
							<Sortable.ItemHandle>
								<DecorativeBox
									h="4rem"
									minW="8rem"
								>
									{item.label}
								</DecorativeBox>
							</Sortable.ItemHandle>
						</Sortable.Item>
					);
				})}
			</Sortable>
		</Container>
	);
}
