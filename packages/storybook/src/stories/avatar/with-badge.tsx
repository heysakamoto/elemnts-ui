import preview from "@.storybook/preview";
import { Avatar, Badge } from "@moto-ui/react";

const meta = preview.meta({
	title: "With Badge",
	component: Avatar,
});

export const WithBadge = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Add a status or notification badge to the avatar using `Badge`.",
			},
		},
	},
	render: (args) => (
		<Badge size="xs">
			<Avatar
				{...args}
				rounded="24"
			>
				<Avatar.Image src="https://images.pexels.com/photos/9775435/pexels-photo-9775435.jpeg?w=200&h=200" />
				<Avatar.Fallback>Fs</Avatar.Fallback>
			</Avatar>
			<Badge.Indicator />
		</Badge>
	),
});
