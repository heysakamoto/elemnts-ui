import preview from "@.storybook/preview";
import { Avatar, Container, Stack } from "@moto-ui/react";

const meta = preview.meta({
	title: "Colors",
	component: Avatar,
});

export const Colors = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Customize the avatar’s background and text colors using `colorPalette`.",
			},
		},
	},
	render: (args) => (
		<Container>
			<Stack
				direction="row"
				gap="16"
				justify="center"
			>
				<Avatar
					{...args}
					colorPalette="accent"
				>
					<Avatar.Fallback fontSize="14">Bo</Avatar.Fallback>
				</Avatar>
				<Avatar
					{...args}
					colorPalette="neutral"
				>
					<Avatar.Fallback fontSize="14">Bo</Avatar.Fallback>
				</Avatar>
				<Avatar
					{...args}
					colorPalette="success"
				>
					<Avatar.Fallback fontSize="14">Bo</Avatar.Fallback>
				</Avatar>
			</Stack>
		</Container>
	),
});
