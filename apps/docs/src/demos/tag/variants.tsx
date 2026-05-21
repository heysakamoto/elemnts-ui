import { Stack, Tag } from "@moto-ui/react";

export function Variants() {
	return (
		<Stack
			direction="row"
			gap="4"
		>
			<Tag
				selected
				variant="primary"
			>
				Primary
			</Tag>
			<Tag
				selected
				variant="secondary"
			>
				Secondary
			</Tag>
			<Tag
				selected
				variant="tertiary"
			>
				Tertiary
			</Tag>
		</Stack>
	);
}
