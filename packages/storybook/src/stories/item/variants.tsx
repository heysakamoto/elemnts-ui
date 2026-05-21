import preview from "@.storybook/preview";
import { Item, Stack } from "@moto-ui/react";

const meta = preview.meta({
	title: "Variants",
	component: Item,
});

export const Variants = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The `Item` component supports different sizes, appearances, and active variants.",
			},
		},
	},
	render: () => (
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
	),
});
