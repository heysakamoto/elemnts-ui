import preview from "@.storybook/preview";
import { Avatar } from "@moto-ui/react";

const meta = preview.meta({
	title: "Shapes",
	component: Avatar,
});

export const Shapes = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Change the avatar shape by applying a specific `borderRadius | radius` value or using style props.",
			},
		},
	},
	render: (args) => (
		<Avatar
			{...args}
			rounded="24"
		>
			<Avatar.Image
				src="https://images.pexels.com/photos/12698114/pexels-photo-12698114.jpeg?w=200&h=200"
				alt=""
			/>
			<Avatar.Fallback fontSize="14">Bo</Avatar.Fallback>
		</Avatar>
	),
});
