import { Icon, Item } from "@moto-ui/react";

export function IconOnly() {
	return (
		<Item
			iconOnly
			size="sm"
		>
			<Icon
				icon="tabler:plus"
				width={16}
				height={16}
			/>
		</Item>
	);
}
