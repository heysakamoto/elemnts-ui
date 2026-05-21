import preview from "@.storybook/preview";
import {
	Container,
	createListCollection,
	Icon,
	InputGroup,
	Item,
	Portal,
	Select,
	Surface,
} from "@moto-ui/react";

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

const meta = preview.meta({
	title: "Basic",
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Allows the selection of a value from a set of predefined choices.",
			},
		},
	},
	render: (args) => {
		return (
			<Container maxW="10rem">
				<Select
					{...args}
					collection={fruits as any}
				>
					<Select.Trigger>
						<Select.Control>
							<InputGroup
								size="md"
								rounded="24"
							>
								<Select.ValueText
									px="8"
									placeholder="Select a fruit"
								/>
								<InputGroup.Addon pr="6">
									<Select.Indicator>
										<Icon
											icon="tabler:chevron-down"
											width={16}
											height={16}
										/>
									</Select.Indicator>
								</InputGroup.Addon>
							</InputGroup>
						</Select.Control>
					</Select.Trigger>
					<Portal>
						<Select.Positioner>
							<Select.Content asChild>
								<Surface
									delta={1}
									rounded="24"
								>
									<Surface.Content
										p="4"
										gap="2"
									>
										{fruits.items.map((item) => (
											<Select.Item
												key={item.id}
												item={item}
												asChild
											>
												<Item
													rounded="calc(24px - 4px)"
													colorPalette="neutral"
													variant="secondary"
												>
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
	},
});
