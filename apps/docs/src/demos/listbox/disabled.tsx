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
			disabled: true,
			label: "Apple",
			value: "apple",
		},
		{
			id: "2",
			disabled: false,
			label: "Banana",
			value: "banana",
		},
		{
			id: "3",
			disabled: false,
			label: "Cherry",
			value: "cherry",
		},
		{
			id: "4",
			disabled: false,
			label: "Watermelon",
			value: "watermelon",
		},
	],
});

export function Disabled() {
	return (
		<Container maxW="10rem">
			<Listbox collection={collection as any}>
				<Listbox.Content asChild>
					<Surface
						delta={1}
						rounded="24"
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
										<Item
											rounded="calc(24px - 4px)"
											colorPalette="neutral"
											variant="secondary"
										>
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
