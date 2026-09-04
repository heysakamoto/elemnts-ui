import { Icon, Item, Menu, Separator, Surface } from "@moto-ui/react";
import { Fragment } from "react";

const groups = {
	account: [
		{
			id: "1",
			icon: "tabler:mail",
			label: "Inbox",
			value: "inbox",
		},
		{
			id: "2",
			icon: "tabler:message-report",
			label: "Notifications",
			value: "notifications",
		},
		{
			id: "3",
			icon: "tabler:shield",
			label: "Privacy",
			value: "privacy",
		},
	],
	appearance: [
		{
			id: "1",
			icon: "tabler:settings",
			label: "General",
			value: "general",
		},
		{
			id: "2",
			icon: "tabler:history",
			label: "Theme",
			value: "theme",
		},
		{
			id: "3",
			icon: "tabler:device-laptop",
			label: "Display",
			value: "display",
		},
	],
};

export default function Group() {
	return (
		<Menu open>
			<Menu.Content asChild>
				<Surface
					delta={1}
					w="12rem"
					rounded="14"
				>
					<Surface.Content gap="2">
						{Object.entries(groups).map(([label, items], index, array) => {
							const isLastGroup = index === array.length - 1;

							return (
								<Fragment key={label}>
									<Menu.ItemGroup p="4">
										<Menu.ItemGroupLabel
											px="12"
											textTransform="capitalize"
										>
											{label}
										</Menu.ItemGroupLabel>
										{items.map((item) => {
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
									</Menu.ItemGroup>
									{!isLastGroup && <Separator orientation="horizontal" />}
								</Fragment>
							);
						})}
					</Surface.Content>
				</Surface>
			</Menu.Content>
		</Menu>
	);
}
