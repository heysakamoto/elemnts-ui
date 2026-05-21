import preview from "@.storybook/preview";
import { DecorativeBox, Group } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: Group,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use Group to arrange multiple items together with consistent spacing. Pass your items as children.",
			},
		},
	},
	render: (args) => (
		<Group {...args}>
			<DecorativeBox
				h="56"
				w="10rem"
			/>
			<DecorativeBox
				h="56"
				w="10rem"
			/>
		</Group>
	),
});
