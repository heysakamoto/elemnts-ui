import { Avatar, Badge } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Content",
	component: Badge,
});

export const Content = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Badge can display text, numbers, or icons. If no children are passed, it renders as a dot-only indicator.",
			},
		},
	},
	render: (args) => (
		<Badge
			{...args}
			size="md"
		>
			<Avatar>
				<Avatar.Image src="https://images.pexels.com/photos/4611686/pexels-photo-4611686.jpeg?w=160&h=160" />
				<Avatar.Fallback fontSize="14">Nu</Avatar.Fallback>
			</Avatar>
			<Badge.Indicator>5</Badge.Indicator>
		</Badge>
	),
});
