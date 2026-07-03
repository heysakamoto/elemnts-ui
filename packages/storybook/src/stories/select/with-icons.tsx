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

import preview from "@.storybook/preview";

const fruits = createListCollection({
	items: [
		{
			id: "1",
			label: "System",
			value: "system",
			icon: "tabler:device-laptop",
		},
		{
			id: "2",
			label: "Light",
			value: "light",
			icon: "tabler:sun",
		},
		{
			id: "3",
			label: "Dark",
			value: "dark",
			icon: "tabler:moon",
		},
	],
});

const meta = preview.meta({
	title: "With Icons",
});

export const WithIcons = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"This example demonstrates how to use the Select component with icons to enhance the user interface.",
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
									placeholder="Select theme"
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
													<Icon
														icon={item.icon}
														width={16}
														height={16}
													/>
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
