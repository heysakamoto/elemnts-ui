import { Icon, Item, Menu, Portal, Surface } from "@moto-ui/react";

const items = [
	{
		id: "1",
		icon: "tabler:plus",
		label: "New file",
		value: "new-file",
	},
	{
		id: "2",
		icon: "tabler:history",
		label: "Open recent",
		value: "open-recent",
		items: [
			{
				id: "2-1",
				icon: "tabler:file",
				label: "File 1",
				value: "file-1",
			},
			{
				id: "2-2",
				icon: "tabler:file",
				label: "File 2",
				value: "file-2",
			},
			{
				id: "2-3",
				icon: "tabler:file",
				label: "File 3",
				value: "file-3",
			},
		],
	},
	{
		id: "3",
		icon: "tabler:app-window",
		label: "New window",
		value: "new-window",
	},
	{
		id: "4",
		icon: "tabler:arrow-bar-up",
		label: "Export",
		value: "export",
	},
	{
		id: "5",
		icon: "tabler:pin",
		label: "Pin",
		value: "pin",
	},
];

export default function Submenu() {
	return (
		<Menu open>
			<Menu.Content asChild>
				<Surface
					delta={1}
					w="12rem"
					rounded="14"
				>
					<Surface.Content
						p="4"
						gap="2"
					>
						{items.map((item) => {
							if (item.items) {
								return (
									<Menu
										key={item.id}
										positioning={{ placement: "right-start", gutter: 2 }}
									>
										<Menu.TriggerItem asChild>
											<Item variant="secondary">
												<Icon
													ml="-6"
													icon={item.icon}
													width={16}
													height={16}
												/>
												<Menu.ItemText>{item.label}</Menu.ItemText>
												<Menu.ItemIndicator>
													<Icon
														width={14}
														height={14}
														icon="tabler:chevron-right"
													/>
												</Menu.ItemIndicator>
											</Item>
										</Menu.TriggerItem>
										<Portal>
											<Menu.Positioner>
												<Menu.Content asChild>
													<Surface
														delta={1}
														w="12rem"
														rounded="14"
														colorPalette="neutral"
													>
														<Surface.Content
															p="4"
															gap="2"
														>
															{item.items.map((subItem) => (
																<Menu.Item
																	asChild
																	key={subItem.id}
																	value={subItem.value}
																>
																	<Item variant="secondary">
																		<Icon
																			ml="-6"
																			width={16}
																			height={16}
																			icon={subItem.icon}
																		/>
																		<Menu.ItemText>
																			{subItem.label}
																		</Menu.ItemText>
																	</Item>
																</Menu.Item>
															))}
														</Surface.Content>
													</Surface>
												</Menu.Content>
											</Menu.Positioner>
										</Portal>
									</Menu>
								);
							}

							return (
								<Menu.Item
									key={item.id}
									value={item.value}
									asChild
								>
									<Item variant="secondary">
										<Icon
											ml="-6"
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
		</Menu>
	);
}
