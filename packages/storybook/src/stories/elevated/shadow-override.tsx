import preview from "@.storybook/preview";
import { Elevated, Text } from "@moto-ui/react";

const meta = preview.meta({
	title: "Shadow Override",
	component: Elevated,
});

export const ShadowOverride = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the `shadowLevel` prop to override the shadow level of the card independently of the computed substrate level. This is useful for designs where high elevation is needed visually without changing the underlying substrate level context.",
			},
		},
	},
	args: {
		p: "12",
		delta: 1,
		rounded: "24",
		shadowLevel: 4,
	},
	render: (args) => (
		<Elevated {...args}>
			<Text
				fontSize="14"
				color="fg.tertiary"
			>
				Elevation Level 2 (Custom Shadow Level 4)
			</Text>
		</Elevated>
	),
});
