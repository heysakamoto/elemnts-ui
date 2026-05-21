import preview from "@.storybook/preview";
import { Progress } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: Progress,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The ProgressCircle component is used to show the completion status of a task using a circular indicator. It is built using the Progress component parts.",
			},
		},
	},
	render: (args) => (
		<Progress.Root
			defaultValue={33}
			{...args}
		>
			<Progress.Circle>
				<Progress.CircleTrack />
				<Progress.CircleRange />
			</Progress.Circle>
		</Progress.Root>
	),
});
