import { Icon, Item } from "@moto-ui/react";

export default function IconOnly() {
	return (
		<Item
			w="fit"
			selected
			iconOnly
			variant="surface"
		>
			<Icon
				width={16}
				height={16}
				icon="tabler:plus"
			/>
		</Item>
	);
}
