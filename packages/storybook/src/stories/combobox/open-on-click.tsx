import {
	Button,
	Combobox,
	Container,
	Icon,
	InputGroup,
	Item,
	Portal,
	Surface,
	useFilter,
	useListCollection,
} from "@moto-ui/react";

import preview from "@.storybook/preview";

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

const meta = preview.meta({
	title: "Open On Click",
	component: Combobox,
});

export const OpenOnClick = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Set the openOnClick prop to open the combobox when a user clicks the input.",
			},
		},
	},
	args: {
		openOnClick: true,
	},
	render: (args) => {
		const { contains } = useFilter({ sensitivity: "base" });

		const { collection, filter } = useListCollection({
			initialItems: items,
			filter: contains,
		});

		return (
			<Container maxW="10rem">
				<Combobox
					{...args}
					collection={collection}
					onInputValueChange={(e) => filter(e.inputValue)}
				>
					<Combobox.Control>
						<InputGroup
							size="md"
							rounded="24"
						>
							<Combobox.Input asChild>
								<InputGroup.Input
									px="8"
									placeholder="Type to search..."
									fontSize="14"
								/>
							</Combobox.Input>
							<InputGroup.Addon pr="4">
								<Combobox.Trigger asChild>
									<Button
										size="xs"
										iconOnly
										variant="plain"
										colorPalette="neutral"
									>
										<Icon
											icon="tabler:chevron-down"
											width={16}
											height={16}
										/>
									</Button>
								</Combobox.Trigger>
							</InputGroup.Addon>
						</InputGroup>
					</Combobox.Control>
					<Portal>
						<Combobox.Positioner>
							<Combobox.Content asChild>
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
												<Combobox.Item
													asChild
													key={item.id}
													item={item}
												>
													<Item
														rounded="calc(24px - 4px)"
														colorPalette="neutral"
														variant="secondary"
													>
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
	},
});
