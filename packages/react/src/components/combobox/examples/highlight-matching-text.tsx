import {
	Combobox,
	Container,
	Highlight,
	Icon,
	InputGroup,
	Item,
	Portal,
	Surface,
	useComboboxContext,
	useFilter,
	useListCollection,
} from "@moto-ui/react";

const items = [
	{
		id: "1",
		label: "Bannana",
		value: "bannana",
	},
	{
		id: "2",
		label: "Apple",
		value: "apple",
	},
	{
		id: "3",
		label: "Mango",
		value: "mango",
	},
	{
		id: "4",
		label: "Cherry",
		value: "cherry",
	},
];

export default function HighlightMatchingText() {
	const { contains } = useFilter({ sensitivity: "base" });

	const { collection, filter } = useListCollection({
		initialItems: items,
		filter: contains,
	});

	return (
		<Container maxW="24rem">
			<Combobox
				openOnClick
				collection={collection}
				onInputValueChange={(e) => filter(e.inputValue)}
			>
				<Combobox.Control>
					<InputGroup>
						<Combobox.Input asChild>
							<InputGroup.Input
								placeholder="Type to search..."
								fontSize="14"
							/>
						</Combobox.Input>
						<InputGroup.Addon>
							<Icon
								icon="tabler:chevron-down"
								width={16}
								height={16}
							/>
						</InputGroup.Addon>
					</InputGroup>
				</Combobox.Control>
				<Portal>
					<Combobox.Positioner>
						<Combobox.Content asChild>
							<Surface
								delta={1}
								rounded="16"
							>
								<Surface.Content
									p="4"
									gap="2"
								>
									{collection.items.map((item) => {
										return (
											<ComboboxItem
												item={item}
												key={item.id}
											/>
										);
									})}
								</Surface.Content>
							</Surface>
						</Combobox.Content>
					</Combobox.Positioner>
				</Portal>
			</Combobox>
		</Container>
	);
}

function ComboboxItem(props: { item: (typeof items)[number] }) {
	const { item } = props;
	const comboboxContext = useComboboxContext();

	return (
		<Combobox.Item
			asChild
			item={item}
		>
			<Item
				rounded="calc(16px - 4px)"
				colorPalette="neutral"
				variant="secondary"
			>
				<Combobox.ItemText>
					<Highlight
						ignoreCase
						query={comboboxContext.inputValue}
						text={item.label}
					/>
				</Combobox.ItemText>
			</Item>
		</Combobox.Item>
	);
}
