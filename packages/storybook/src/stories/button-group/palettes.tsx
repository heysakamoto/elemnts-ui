import { ButtonGroup, Container, Stack } from "@moto-ui/react";
import meta from "./stories";

export const Palettes = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the `colorPalette` prop to apply a consistent color scheme to all buttons in the group.",
			},
		},
	},
	render: () => (
		<Container>
			<Stack
				direction="column"
				gap="16"
				align="center"
			>
				<ButtonGroup
					attached
					colorPalette="neutral"
				>
					<ButtonGroup.Item roundedStart="24">
						Photos
						<ButtonGroup.Separator />
					</ButtonGroup.Item>
					<ButtonGroup.Item roundedEnd="24">Videos</ButtonGroup.Item>
				</ButtonGroup>
			</Stack>
		</Container>
	),
});
