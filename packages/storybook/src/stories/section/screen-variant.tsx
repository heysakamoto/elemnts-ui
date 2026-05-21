import preview from "@.storybook/preview";
import { Section } from "@moto-ui/react";

const meta = preview.meta({
	title: "Screen Variant",
	component: Section,
});

export const ScreenVariant = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the `screen` prop to control the minimum height of the section. The `full` variant sets the minimum height to `100dvh`.",
			},
		},
	},
	render: (args) => (
		<Section
			{...args}
			screen="full"
			border="1px solid {colors.stroke.primary}"
			p="4"
			rounded="md"
		>
			Full Screen Section
		</Section>
	),
});
