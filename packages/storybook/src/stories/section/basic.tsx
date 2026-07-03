import { Section } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Basic",
	component: Section,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The `Section` component renders an HTML `<section>` element and provides properties for aligning content and controlling its height.",
			},
		},
	},
	render: (args) => (
		<Section
			{...args}
			border="1px solid {colors.stroke.primary}"
			p="4"
			rounded="md"
		>
			Basic Section
		</Section>
	),
});
