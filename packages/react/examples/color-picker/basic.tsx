import {
  ColorPicker,
  Portal,
  parseColor,
  Stack,
  Surface,
  Swatch,
} from "@moto-ui/react";

export default function Basic() {
  const color = parseColor("hsba(100, 50%, 50%, 100)");

  return (
    <ColorPicker.Root
      defaultValue={color}
      positioning={{ placement: "bottom" }}
    >
      <ColorPicker.Control gap="8" alignItems="center" justifyContent="center">
        <ColorPicker.Trigger>
          <ColorPicker.ValueSwatch asChild>
            <Swatch size="sm" />
          </ColorPicker.ValueSwatch>
        </ColorPicker.Trigger>
      </ColorPicker.Control>
      <Portal>
        <ColorPicker.Positioner>
          <ColorPicker.Content asChild>
            <Surface delta={1} rounded="24">
              <Surface.Content p="6">
                <ColorPicker.Area h="14rem">
                  <ColorPicker.AreaBackground>
                    <ColorPicker.AreaThumb />
                  </ColorPicker.AreaBackground>
                </ColorPicker.Area>
                <ColorPicker.View format="hsba" mt="12" px="4" py="4">
                  <ColorPicker.ChannelSlider channel="hue" gap="4">
                    <Stack align="center" justify="space-between">
                      <ColorPicker.ChannelSliderLabel>
                        Hue
                      </ColorPicker.ChannelSliderLabel>
                      <ColorPicker.ChannelSliderValueText
                        fontSize="14"
                        color="fg.tertiary"
                      />
                    </Stack>
                    <ColorPicker.ChannelSliderControl>
                      <ColorPicker.ChannelSliderTrack>
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
}
