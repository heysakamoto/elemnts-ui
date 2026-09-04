import {
	ButtonGroup,
	Combobox,
	Container,
	For,
	Icon,
	InputGroup,
	Item,
	Portal,
	Show,
	Surface,
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

export default function Multiple() {
	const { contains } = useFilter({ sensitivity: "base" });

	const { collection, filter } = useListCollection({
		initialItems: items,
		filter: contains,
	});

	return (
		<Container maxW="24rem">
			<Combobox
				multiple
				openOnClick
				collection={collection}
				onInputValueChange={(e) => filter(e.inputValue)}
			>
				<Combobox.Context>
					{(ctx) => (
						<Show when={ctx.value}>
							<ButtonGroup mb="12">
								<For each={ctx.value}>
									{(value) => (
										<ButtonGroup.Item
											key={value}
											size="sm"
											variant="secondary"
										>
											{value}
										</ButtonGroup.Item>
									)}
								</For>
							</ButtonGroup>
						</Show>
					)}
				</Combobox.Context>
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
								rounded="14"
								colorPalette="neutral"
							>
								<Surface.Content
									p="4"
									gap="2"
								>
									{collection.items.map((item) => {
										return (
											<Combobox.Item
												asChild
												key={item.id}
												item={item}
											>
												<Item variant="secondary">
													<Combobox.ItemText>{item.label}</Combobox.ItemText>
												</Item>
											</Combobox.Item>
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
