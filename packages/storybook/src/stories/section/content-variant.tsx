import { Section, Stack } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Content Variant",
	component: Section,
});

export const ContentVariant = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the `content` prop to align content vertically within the section. It supports `start`, `center`, and `end`.",
			},
		},
	},
	render: (args) => (
		<Stack
			w="full"
			gap="4"
		>
			<Section
				{...args}
				content="start"
				border="1px solid {colors.stroke.primary}"
				p="4"
				rounded="md"
			>
				Start
			</Section>
			<Section
				{...args}
				content="center"
				border="1px solid {colors.stroke.primary}"
				p="4"
				rounded="md"
			>
				Center
			</Section>
			<Section
				{...args}
				content="end"
				border="1px solid {colors.stroke.primary}"
				p="4"
				rounded="md"
			>
				End
			</Section>
		</Stack>
	),
});
