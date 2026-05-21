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
			label: "Account",
			value: "account",
			icon: "tabler:user",
			category: "account",
		},
		{
			id: "2",
			label: "Email",
			value: "email",
			icon: "tabler:mail",
			category: "account",
		},
		{
			id: "3",
			label: "Notifications",
			value: "notifications",
			icon: "tabler:bell",
			category: "preferences",
		},
		{
			id: "4",
			label: "Privacy",
			value: "privacy",
			icon: "tabler:shield",
			category: "preferences",
		},
	],
	groupBy: (item) => item.category,
});

const meta = preview.meta({
	title: "Group",
});

export const Group = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The Select.ItemGroup component can be used to organize select options into distinct groups, making it easier for users to navigate and choose.",
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
									<Surface.Content pb="4">
										{fruits.group().map(([category, items]) => (
											<Select.ItemGroup key={category}>
												<Select.ItemGroupLabel
													py="6"
													px="12"
													fontSize="12"
													color="fg.tertiary"
													textTransform="capitalize"
												>
													{category}
												</Select.ItemGroupLabel>
												<Surface.Addon
													px="4"
													gap="2"
												>
													{items.map((item) => (
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
												</Surface.Addon>
											</Select.ItemGroup>
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
