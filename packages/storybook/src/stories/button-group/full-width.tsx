import { ButtonGroup, Container, Stack } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Full Width",
	component: ButtonGroup,
});

export const FullWidth = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the `fullWidth` prop to make buttons expand to fill the available space, distributing width evenly across the group.",
			},
		},
	},
	render: () => (
		<Container maxW="16rem">
			<Stack
				direction="column"
				gap="16"
				align="center"
			>
				<ButtonGroup
					fullWidth
					attached
					variant="surface"
				>
					<ButtonGroup.Item roundedStart="24">
						Fix error
						<ButtonGroup.Separator />
					</ButtonGroup.Item>
					<ButtonGroup.Item roundedEnd="24">Ignore</ButtonGroup.Item>
				</ButtonGroup>
			</Stack>
		</Container>
	),
});
