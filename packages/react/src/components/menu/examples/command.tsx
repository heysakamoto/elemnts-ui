import { Icon, Item, KbdGroup, Menu, Surface } from "@moto-ui/react";

const items = [
	{
		id: "1",
		icon: "tabler:plus",
		label: "New file",
		value: "new-file",
		command: "⌘N",
	},
	{
		id: "2",
		icon: "tabler:history",
		label: "Open recent",
		value: "open-recent",
		command: "⌘O",
	},
	{
		id: "3",
		icon: "tabler:app-window",
		label: "New window",
		value: "new-window",
		command: "⌘W",
	},
	{
		id: "4",
		icon: "tabler:arrow-bar-up",
		label: "Export",
		value: "export",
		command: "⌘E",
	},
	{
		id: "5",
		icon: "tabler:pin",
		label: "Pin",
		value: "pin",
		command: "⌘P",
	},
];

export default function Command() {
	return (
		<Menu defaultOpen>
			<Menu.Content asChild>
				<Surface
					delta={1}
					w="16rem"
					rounded="20"
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
										variant="secondary"
										rounded=""
									>
										<Icon
											icon={item.icon}
											width={16}
											height={16}
										/>
										<Menu.ItemText>{item.label}</Menu.ItemText>
										<KbdGroup
											mr="-4"
											gap="2"
											size="2xs"
											variant="secondary"
										>
											{Array.from(item.command).map((char) => (
												<KbdGroup.Item>{char}</KbdGroup.Item>
											))}
										</KbdGroup>
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
