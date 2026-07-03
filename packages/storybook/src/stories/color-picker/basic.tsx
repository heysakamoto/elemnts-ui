import {
	ColorPicker,
	Portal,
	parseColor,
	Stack,
	Surface,
	Swatch,
} from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Basic",
	component: ColorPicker,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The ColorPicker component is a feature-rich compound component that provides a complete interface for color selection, including color areas, sliders, and swatches.",
			},
		},
	},
	render: (args) => {
		const color = parseColor("hsba(100, 50%, 50%, 100)");

		return (
			<ColorPicker.Root
				defaultValue={color}
				positioning={{ placement: "bottom" }}
				{...args}
			>
				<ColorPicker.Control
					gap="8"
					alignItems="center"
					justifyContent="center"
				>
					<ColorPicker.Trigger>
						<ColorPicker.ValueSwatch asChild>
							<Swatch
								size="sm"
								rounded="24"
							/>
						</ColorPicker.ValueSwatch>
					</ColorPicker.Trigger>
				</ColorPicker.Control>
				<Portal>
					<ColorPicker.Positioner>
						<ColorPicker.Content asChild>
							<Surface
								delta={1}
								rounded="24"
							>
								<Surface.Content p="6">
									<ColorPicker.Area
										h="14rem"
										rounded="calc(24px - 6px)"
									>
										<ColorPicker.AreaBackground>
											<ColorPicker.AreaThumb />
										</ColorPicker.AreaBackground>
									</ColorPicker.Area>
									<ColorPicker.View
										format="hsba"
										mt="12"
										px="4"
										py="4"
									>
										<ColorPicker.ChannelSlider
											channel="hue"
											gap="4"
										>
											<Stack
												align="center"
												justify="space-between"
											>
												<ColorPicker.ChannelSliderLabel>
													Hue
												</ColorPicker.ChannelSliderLabel>
												<ColorPicker.ChannelSliderValueText
													fontSize="14"
													color="fg.tertiary"
												/>
											</Stack>
											<ColorPicker.ChannelSliderControl>
												<ColorPicker.ChannelSliderTrack rounded="calc(24px - 6px)">
													<ColorPicker.ChannelSliderThumb />
												</ColorPicker.ChannelSliderTrack>
											</ColorPicker.ChannelSliderControl>
										</ColorPicker.ChannelSlider>
									</ColorPicker.View>
								</Surface.Content>
							</Surface>
						</ColorPicker.Content>
					</ColorPicker.Positioner>
				</Portal>
				<ColorPicker.HiddenInput />
			</ColorPicker.Root>
		);
	},
});
