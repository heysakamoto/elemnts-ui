import preview from "@.storybook/preview";
import { Container, Slider } from "@moto-ui/react";

const meta = preview.meta({
	title: "Range",
	component: Slider,
});

export const Range = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the defaultValue or value prop with an array of values to enable range selection and render multiple thumbs.",
			},
		},
	},
	args: {
		defaultValue: [30, 60],
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
					<Slider.Thumb index={1}>
						<Slider.HiddenInput />
					</Slider.Thumb>
				</Slider.Control>
			</Slider.Root>
		</Container>
	),
});
