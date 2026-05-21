import preview from "@.storybook/preview";
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

const meta = preview.meta({
	title: "Basic",
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The Listbox component is a versatile UI element that allows users to select one or more options from a predefined list. It is commonly used in forms, dropdown menus, and other interactive interfaces where selection is required.",
			},
		},
	},
	render: (args) => {
		return (
			<Container maxW="10rem">
				<Listbox
					{...args}
					collection={collection as any}
				>
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
	},
});
