import { Elevated, Text } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "No Border",
	component: Elevated,
});

export const NoBorder = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The `Elevated` component supports a `withBorder` variant. Setting `withBorder={false}` removes the default border.",
			},
		},
	},
	args: {
		p: "12",
		delta: 2,
		rounded: "24",
		withBorder: false,
	},
	render: (args) => (
		<Elevated {...args}>
			<Text
				fontSize="14"
				color="fg.tertiary"
			>
				Elevation Level 3 (Without Border)
			</Text>
		</Elevated>
	),
});
