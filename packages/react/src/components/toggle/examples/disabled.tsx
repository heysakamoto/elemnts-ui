import { Icon, Item, Toggle } from "@moto-ui/react";

export default function Disabled() {
	return (
		<Toggle
			asChild
			disabled
			aria-label="Toggle italic"
		>
			<Item
				w="fit"
				variant="secondary"
			>
				<Icon
					icon="tabler:italic"
					width={16}
					height={16}
				/>
			</Item>
		</Toggle>
	);
}
