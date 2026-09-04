import {
	Container,
	createListCollection,
	Item,
	Listbox,
	Surface,
} from "@moto-ui/react";

const collection = createListCollection({
	items: [
		{
			id: "1",
			label: "Apple",
			value: "apple",
		},
		{
			id: "2",
			label: "Banana",
			value: "banana",
		},
		{
			id: "3",
			label: "Cherry",
			value: "cherry",
		},
		{
			id: "4",
			label: "Watermelon",
			value: "watermelon",
		},
	],
});

export default function Basic() {
	return (
		<Container maxW="10rem">
			<Listbox collection={collection as any}>
				<Listbox.Content asChild>
					<Surface
						delta={1}
						rounded="14"
					>
						<Surface.Content
							p="4"
							gap="2"
						>
							{collection.items.map((item) => {
								return (
									<Listbox.Item
										key={item.id}
										item={item}
										asChild
									>
										<Item variant="secondary">
											<Listbox.ItemText>{item.label}</Listbox.ItemText>
										</Item>
									</Listbox.Item>
								);
							})}
						</Surface.Content>
					</Surface>
				</Listbox.Content>
			</Listbox>
		</Container>
	);
}
