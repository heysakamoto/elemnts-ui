import preview from "@.storybook/preview";
import { Avatar, Badge } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: Badge,
});

export const Basic = meta.story({
	args: {
		size: "sm",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Use Badge to attach a small indicator to another element (for notification counts, status dots, or short labels). Wrap the element you want to annotate, then render another Badge inside to act as the indicator, as shown below.",
			},
		},
	},
	render: (args) => (
		<Badge {...args}>
			<Avatar>
				<Avatar.Image src="https://images.pexels.com/photos/4611686/pexels-photo-4611686.jpeg?w=160&h=160" />
				<Avatar.Fallback fontSize="14">Nu</Avatar.Fallback>
			</Avatar>
			<Badge.Indicator />
		</Badge>
	),
});
