import preview from "@.storybook/preview";
import { Progress } from "@moto-ui/react";

const meta = preview.meta({
	title: "Indeterminate",
	component: Progress,
});

export const Indeterminate = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"When the progress value is unknown, set value to null to show an indeterminate state.",
			},
		},
	},
	render: (args) => (
		<Progress.Root
			value={null}
			{...args}
		>
			<Progress.Circle>
				<Progress.CircleTrack />
				<Progress.CircleRange />
			</Progress.Circle>
		</Progress.Root>
	),
});
