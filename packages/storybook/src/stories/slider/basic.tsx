import preview from "@.storybook/preview";
import { Container, Slider } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: Slider,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The Slider component is used to select a single value or a range of values from a predefined range.",
			},
		},
	},
	render: (args) => (
		<Container maxW="16rem">
			<Slider.Root {...args}>
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
