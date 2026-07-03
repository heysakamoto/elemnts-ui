import { Container, Progress, Stack } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "With Label",
	component: Progress,
});

export const WithLabel = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"You can add a label and value text to provide more context about the progress.",
			},
		},
	},
	render: (args) => (
		<Container maxW="16rem">
			<Progress.Root
				defaultValue={60}
				{...args}
			>
				<Stack
					justify="space-between"
					align="center"
					mb="8"
				>
					<Progress.Label fontSize="12">Installing...</Progress.Label>
					<Progress.ValueText
						fontSize="12"
						color="fg.tertiary"
					/>
				</Stack>
				<Progress.Track>
					<Progress.Range />
				</Progress.Track>
			</Progress.Root>
		</Container>
	),
});
