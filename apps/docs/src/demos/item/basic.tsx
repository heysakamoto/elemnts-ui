import { Icon, Item, Text } from "@moto-ui/react";

export function Basic() {
	return (
		<Item w="fit">
			<Icon
				icon="tabler:user"
				width={16}
				height={16}
			/>
			<Text>Profile</Text>
		</Item>
	);
}
