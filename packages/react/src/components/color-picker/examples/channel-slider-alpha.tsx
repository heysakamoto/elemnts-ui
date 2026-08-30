import { ColorPicker, Container, parseColor } from "@moto-ui/react";

export default function ChannelSliderAlpha() {
	const color = parseColor("rgba(12, 40, 255, 0.5)");

	return (
		<Container maxW="16rem">
			<ColorPicker
				inline
				defaultValue={color}
			>
				<ColorPicker.ChannelSlider channel="alpha">
					<ColorPicker.ChannelSliderControl>
						<ColorPicker.TransparencyGrid />
						<ColorPicker.ChannelSliderTrack>
							<ColorPicker.ChannelSliderThumb />
						</ColorPicker.ChannelSliderTrack>
					</ColorPicker.ChannelSliderControl>
				</ColorPicker.ChannelSlider>
				<ColorPicker.HiddenInput />
			</ColorPicker>
		</Container>
	);
}
