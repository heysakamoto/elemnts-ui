import { Stack, Tag } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Variants",
	component: Tag,
});

export const Variants = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The `Tag` component supports multiple tones, sizes, and color palettes.",
			},
		},
	},
	render: () => (
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
	),
});
