import { Container, Slider, Stack } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Min Max",
	component: Slider,
});

export const MinMax = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Specify the minimum and maximum values for the slider using the min and max props.",
			},
		},
	},
	args: {
		defaultValue: [5],
		min: -10,
		max: 10,
	},
	render: (args) => (
		<Container maxW="16rem">
			<Slider.Root {...args}>
				<Stack justify="space-between">
					<Slider.Label>Label</Slider.Label>
					<Slider.ValueText />
				</Stack>
				<Slider.Control>
					<Slider.Track>
						<Slider.Range />
					</Slider.Track>
					<Slider.Thumb index={0}>
						<Slider.HiddenInput />
					</Slider.Thumb>
				</Slider.Control>
			</Slider.Root>
		</Container>
	),
});
