import preview from "@.storybook/preview";
import { Avatar } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: Avatar,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use `Avatar` to show a user’s profile picture with a graceful fallback when no image is available or it fails to load.",
			},
		},
	},
	render: (args) => (
		<Avatar {...args}>
			<Avatar.Image
				src="https://images.pexels.com/photos/12698114/pexels-photo-12698114.jpeg?w=200&h=200"
				alt=""
			/>
			<Avatar.Fallback fontSize="14">Bo</Avatar.Fallback>
		</Avatar>
	),
});
