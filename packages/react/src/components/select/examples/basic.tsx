import {
	Container,
	createListCollection,
	Icon,
	InputGroup,
	Item,
	Portal,
	Select,
	Surface,
} from "@elemnts-ui/react";

const fruits = createListCollection({
	items: [
		{
			id: "1",
			label: "Apple",
			value: "apple",
		},
		{
			id: "2",
			label: "Mango",
			value: "mango",
		},
		{
			id: "3",
			label: "Orange",
			value: "orange",
		},
		{
			id: "4",
			label: "Grapes",
			value: "grapes",
		},
	],
});

export default function Basic() {
	return (
		<Container maxW="24rem">
			<Select collection={fruits as any}>
				<Select.Trigger>
					<Select.Control>
						<InputGroup>
							<Select.ValueText placeholder="Select a fruit" />
							<InputGroup.Addon>
								<Select.Indicator>
									<Icon icon="tabler:chevron-down" width={16} height={16} />
								</Select.Indicator>
							</InputGroup.Addon>
						</InputGroup>
					</Select.Control>
				</Select.Trigger>
				<Portal>
					<Select.Positioner>
						<Select.Content asChild>
							<Surface delta={1} rounded="14" colorPalette="neutral">
								<Surface.Content p="4" gap="2">
									{fruits.items.map((item) => (
										<Select.Item key={item.id} item={item} asChild>
											<Item variant="secondary">
												<Select.ItemText>{item.label}</Select.ItemText>
											</Item>
										</Select.Item>
									))}
								</Surface.Content>
							</Surface>
						</Select.Content>
					</Select.Positioner>
				</Portal>
			</Select>
		</Container>
	);
}
