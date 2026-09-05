import { Container, DecorativeBox, Sortable } from "@elemnts-ui/react";

const items = [
	{ id: "1", label: "Item 1" },
	{ id: "2", label: "Item 2" },
	{ id: "3", label: "Item 3" },
	{ id: "4", label: "Item 4" },
];

export default function Basic() {
	return (
		<Container maxW="16rem">
			<Sortable gap="12" defaultValue={items}>
				{items.map((item, idx) => {
					return (
						<Sortable.Item index={idx} id={item.id} key={item.id} fontSize="14">
							<Sortable.ItemHandle>
								<DecorativeBox h="4rem">{item.label}</DecorativeBox>
							</Sortable.ItemHandle>
						</Sortable.Item>
					);
				})}
			</Sortable>
		</Container>
	);
}
