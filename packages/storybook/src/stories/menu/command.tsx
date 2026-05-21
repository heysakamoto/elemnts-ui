import preview from "@.storybook/preview";
import { Icon, Item, Kbd, Menu, Surface } from "@moto-ui/react";

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

const meta = preview.meta({
	title: "Command",
	component: Menu,
});

export const Command = meta.story({
	parameters: {
		docs: {
			description: {
				story: "Use the `Kbd` component to show command shortcuts in the menu.",
			},
		},
	},
	render: () => (
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
							return (
								<Menu.Item
									key={item.id}
									value={item.value}
									asChild
								>
									<Item
										variant="secondary"
										colorPalette="neutral"
										rounded="calc(24px - 4px)"
									>
										{" "}
										<Icon
											icon={item.icon}
											width={16}
											height={16}
										/>
										<Menu.ItemText>{item.label}</Menu.ItemText>
										<Kbd
											size="xs"
											fontSize="12"
											colorPalette="neutral"
											variant="secondary"
										>
											<Kbd.Item color="fg.secondary">{item.command}</Kbd.Item>
										</Kbd>
									</Item>
								</Menu.Item>
							);
						})}
					</Surface.Content>
				</Surface>
				d
			</Menu.Content>
		</Menu>
	),
});
