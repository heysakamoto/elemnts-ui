import {
	Checkmark,
	Container,
	createListCollection,
	Icon,
	Item,
	Listbox,
	Surface,
	useListboxItemContext,
} from "@moto-ui/react";

import preview from "@.storybook/preview";

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
	title: "With Checkmark",
});

export const WithCheckmark = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use custom checkmarks to indicate selected items in scenarios that allow multiple selections, ensuring clear visual distinction for users.",
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
										<ListboxItem
											key={item.id}
											item={item}
										/>
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

function ListboxItem(props: { item: (typeof collection.items)[number] }) {
	const { item } = props;

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
				<ListboxItemCheckmark />
				<Listbox.ItemText>{item.label}</Listbox.ItemText>
			</Item>
		</Listbox.Item>
	);
}

function ListboxItemCheckmark() {
	const context = useListboxItemContext();

	return (
		<Checkmark
			ml="-2"
			checked={context.selected}
			disabled={context.disabled}
		>
			<Icon
				icon="tabler:check"
				width={12}
				height={12}
			/>
		</Checkmark>
	);
}
