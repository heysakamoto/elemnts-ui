import preview from "@.storybook/preview";
import { Container, Progress } from "@moto-ui/react";

const meta = preview.meta({
	title: "Indeterminate",
	component: Progress,
});

export const Indeterminate = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"When the progress value is unknown, set `value` to `null` to show an indeterminate state.",
			},
		},
	},
	render: (args) => (
		<Container maxW="12rem">
			<Progress.Root
				{...args}
				value={null}
			>
				<Progress.Track>
					<Progress.Range />
				</Progress.Track>
			</Progress.Root>
		</Container>
	),
});
