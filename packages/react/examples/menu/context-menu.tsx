import { Container, Icon, Item, Menu, Portal, Surface } from "@moto-ui/react";

const items = [
	{
		id: "1",
		icon: "tabler:template",
		label: "Teamspaces",
		value: "teamspaces",
	},
	{
		id: "2",
		icon: "tabler:history",
		label: "Recents",
		value: "recents",
	},
	{
		id: "3",
		icon: "tabler:star",
		label: "Favorites",
		value: "favorites",
	},
	{
		id: "4",
		icon: "tabler:users",
		label: "Shared",
		value: "shared",
	},
	{
		id: "5",
		icon: "tabler:lock",
		label: "Private",
		value: "private",
	},
];

export default function ContextMenu() {
	return (
		<Container maxW="20rem">
			<Menu>
				<Menu.ContextTrigger
					h="5rem"
					color="fg.secondary"
					border="2px dashed"
					borderColor="stroke.tertiary"
					rounded="calc(24px - 8px)"
				>
					Right-click here
				</Menu.ContextTrigger>
				<Portal>
					<Menu.Positioner>
						<Menu.Content asChild>
							<Surface
								delta={1}
								w="12rem"
								rounded="24"
							>
								<Surface.Content
									p="4"
									gap="2"
								>
									{items.map((item) => {
										return (
											<Menu.Item
												key={item.id}
												value={item.value}
												asChild
											>
												<Item
													rounded="calc(24px - 4px)"
													colorPalette="neutral"
													variant="secondary"
												>
													{" "}
													<Icon
														icon={item.icon}
														width={16}
														height={16}
													/>
													<Menu.ItemText>{item.label}</Menu.ItemText>
												</Item>
											</Menu.Item>
										);
									})}
								</Surface.Content>
							</Surface>
						</Menu.Content>
					</Menu.Positioner>
				</Portal>
			</Menu>
		</Container>
	);
}
