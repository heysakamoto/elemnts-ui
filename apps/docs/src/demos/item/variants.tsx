import { Item, Stack } from "@moto-ui/react";

export function Variants() {
	return (
		<Stack
			direction="row"
			gap="8"
		>
			<Item
				selected
				variant="primary"
				w="auto"
			>
				Primary
			</Item>
			<Item
				selected
				variant="secondary"
				w="auto"
			>
				Secondary
			</Item>
			<Item
				selected
				variant="tertiary"
				w="auto"
			>
				Tertiary
			</Item>
		</Stack>
	);
}
