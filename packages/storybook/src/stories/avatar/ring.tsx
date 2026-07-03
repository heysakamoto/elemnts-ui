import { Avatar } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Ring",
	component: Avatar,
});

export const Ring = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Add an outline ring around the avatar using the `outline` style props.",
			},
		},
	},
	render: (args) => (
		<Avatar
			{...args}
			outline="2px solid {colors.colorPalette.primary}"
			outlineOffset="1"
		>
			<Avatar.Image src="https://images.pexels.com/photos/9775435/pexels-photo-9775435.jpeg?w=200&h=200" />
			<Avatar.Fallback>Fs</Avatar.Fallback>
		</Avatar>
	),
});
