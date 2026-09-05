import { ColorPicker, Container, parseColor, Stack } from "@elemnts-ui/react";

export default function ChannelSlidersRGB() {
	const color = parseColor("#5dd016");

	return (
		<Container maxW="16rem">
			<ColorPicker inline defaultValue={color}>
				<ColorPicker.View format="rgba" spaceY="12">
					<ColorPicker.ChannelSlider channel="red">
						<Stack justify="space-between" direction="row" align="center">
							<ColorPicker.Label>Red</ColorPicker.Label>
							<ColorPicker.ChannelSliderValueText />
						</Stack>
						<ColorPicker.ChannelSliderControl mt="4">
							<ColorPicker.ChannelSliderTrack>
								<ColorPicker.ChannelSliderThumb />
							</ColorPicker.ChannelSliderTrack>
						</ColorPicker.ChannelSliderControl>
					</ColorPicker.ChannelSlider>

					<ColorPicker.ChannelSlider channel="green">
						<Stack justify="space-between" direction="row" align="center">
							<ColorPicker.Label>Green</ColorPicker.Label>
							<ColorPicker.ChannelSliderValueText />
						</Stack>
						<ColorPicker.ChannelSliderControl mt="4">
							<ColorPicker.ChannelSliderTrack>
								<ColorPicker.ChannelSliderThumb />
							</ColorPicker.ChannelSliderTrack>
						</ColorPicker.ChannelSliderControl>
					</ColorPicker.ChannelSlider>

					<ColorPicker.ChannelSlider channel="blue">
						<Stack justify="space-between" direction="row" align="center">
							<ColorPicker.Label>Blue</ColorPicker.Label>
							<ColorPicker.ChannelSliderValueText />
						</Stack>
						<ColorPicker.ChannelSliderControl mt="4">
							<ColorPicker.ChannelSliderTrack>
								<ColorPicker.ChannelSliderThumb />
							</ColorPicker.ChannelSliderTrack>
						</ColorPicker.ChannelSliderControl>
					</ColorPicker.ChannelSlider>
				</ColorPicker.View>
				<ColorPicker.HiddenInput />
			</ColorPicker>
		</Container>
	);
}
