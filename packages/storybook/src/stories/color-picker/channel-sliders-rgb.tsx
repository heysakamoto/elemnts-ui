import { ColorPicker, Container, parseColor, Stack } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Channel Sliders RGB",
	component: ColorPicker,
});

export const ChannelSlidersRGB = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"You can display multiple channel sliders within a ColorPicker.View to allow explicit editing of each color channel.",
			},
		},
	},
	render: (args) => {
		const color = parseColor("#5dd016");

		return (
			<Container maxW="16rem">
				<ColorPicker
					inline
					defaultValue={color}
					{...args}
				>
					<ColorPicker.View
						format="rgba"
						spaceY="12"
					>
						<ColorPicker.ChannelSlider channel="red">
							<Stack
								justify="space-between"
								direction="row"
								align="center"
							>
								<ColorPicker.Label>Red</ColorPicker.Label>
								<ColorPicker.ChannelSliderValueText />
							</Stack>
							<ColorPicker.ChannelSliderControl mt="4">
								<ColorPicker.ChannelSliderTrack rounded="24">
									<ColorPicker.ChannelSliderThumb />
								</ColorPicker.ChannelSliderTrack>
							</ColorPicker.ChannelSliderControl>
						</ColorPicker.ChannelSlider>

						<ColorPicker.ChannelSlider channel="green">
							<Stack
								justify="space-between"
								direction="row"
								align="center"
							>
								<ColorPicker.Label>Green</ColorPicker.Label>
								<ColorPicker.ChannelSliderValueText />
							</Stack>
							<ColorPicker.ChannelSliderControl mt="4">
								<ColorPicker.ChannelSliderTrack rounded="24">
									<ColorPicker.ChannelSliderThumb />
								</ColorPicker.ChannelSliderTrack>
							</ColorPicker.ChannelSliderControl>
						</ColorPicker.ChannelSlider>

						<ColorPicker.ChannelSlider channel="blue">
							<Stack
								justify="space-between"
								direction="row"
								align="center"
							>
								<ColorPicker.Label>Blue</ColorPicker.Label>
								<ColorPicker.ChannelSliderValueText />
							</Stack>
							<ColorPicker.ChannelSliderControl mt="4">
								<ColorPicker.ChannelSliderTrack rounded="24">
									<ColorPicker.ChannelSliderThumb />
								</ColorPicker.ChannelSliderTrack>
							</ColorPicker.ChannelSliderControl>
						</ColorPicker.ChannelSlider>
					</ColorPicker.View>
					<ColorPicker.HiddenInput />
				</ColorPicker>
			</Container>
		);
	},
});
