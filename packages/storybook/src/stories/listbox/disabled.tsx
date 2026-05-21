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

const meta = preview.meta({
	title: "Disabled",
});

export const Disabled = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Mark certain items in the listbox as disabled to show they are not selectable, while still displaying them for informational purposes.",
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
