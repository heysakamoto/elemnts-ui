import preview from "@.storybook/preview";
import { ColorPicker, Container, parseColor } from "@moto-ui/react";

const meta = preview.meta({
	title: "Channel Slider Alpha",
	component: ColorPicker,
});

export const ChannelSliderAlpha = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the alpha channel with a ColorPicker.TransparencyGrid to allow users to adjust the opacity of a color.",
			},
		},
	},
	render: (args) => {
		const color = parseColor("rgba(12, 40, 255, 0.5)");

		return (
			<Container maxW="16rem">
				<ColorPicker
					inline
					defaultValue={color}
					{...args}
				>
					<ColorPicker.ChannelSlider channel="alpha">
						<ColorPicker.ChannelSliderControl>
							<ColorPicker.TransparencyGrid />
							<ColorPicker.ChannelSliderTrack rounded="24">
								<ColorPicker.ChannelSliderThumb />
							</ColorPicker.ChannelSliderTrack>
						</ColorPicker.ChannelSliderControl>
					</ColorPicker.ChannelSlider>
					<ColorPicker.HiddenInput />
				</ColorPicker>
			</Container>
		);
	},
});
