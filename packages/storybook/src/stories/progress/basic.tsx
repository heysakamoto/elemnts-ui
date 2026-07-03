import { Container, Progress } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Basic",
	component: Progress,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The Progress component is used to show the completion status of a task. It can be displayed as a linear bar or a circular indicator.",
			},
		},
	},
	render: (args) => (
		<Container maxW="12rem">
			<Progress.Root
				defaultValue={40}
				{...args}
			>
				<Progress.Track>
					<Progress.Range />
				</Progress.Track>
			</Progress.Root>
		</Container>
	),
});
