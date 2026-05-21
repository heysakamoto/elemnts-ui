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

export function Submenu() {
	return (
		<Menu open>
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
							if (item.items) {
								return (
									<Menu positioning={{ placement: "right-start", gutter: 2 }}>
										<Menu.TriggerItem asChild>
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
												<Menu.ItemText>{item.label}</Menu.ItemText>
												<Menu.ItemIndicator
													mr="-4"
													color="icon.tertiary"
												>
													<Icon
														icon="tabler:chevron-right"
														width={14}
														height={14}
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
														rounded="24"
													>
														<Surface.Content
															p="4"
															gap="2"
														>
															{item.items.map((subItem) => (
																<Menu.Item
																	key={subItem.id}
																	value={subItem.value}
																	asChild
																>
																	<Item
																		colorPalette="neutral"
																		rounded="calc(24px - 4px)"
																		variant="secondary"
																	>
																		<Icon
																			icon={subItem.icon}
																			width={16}
																			height={16}
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
		</Menu>
	);
}
