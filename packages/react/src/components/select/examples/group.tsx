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

export default function Group() {
	return (
		<Container maxW="24rem">
			<Select collection={fruits as any}>
				<Select.Trigger>
					<Select.Control>
						<InputGroup>
							<Select.ValueText placeholder="Select a fruit" />
							<InputGroup.Addon>
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
								colorPalette="neutral"
							>
								<Surface.Content p="4">
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
											{items.map((item) => (
												<Select.Item
													key={item.id}
													item={item}
													asChild
												>
													<Item variant="secondary">
														<Select.ItemText>{item.label}</Select.ItemText>
													</Item>
												</Select.Item>
											))}
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
}
