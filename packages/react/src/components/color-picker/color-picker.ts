import { ColorPicker } from "@ark-ui/react/color-picker";
import { ark } from "@ark-ui/react/factory";

import { createStyleContext } from "../../../styled-system/jsx";
import { colorPickerRecipe } from "../../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(colorPickerRecipe);

export const ColorPickerRootProvider = withProvider(
	ColorPicker.RootProvider,
	"root",
);
ColorPickerRootProvider.displayName = "ColorPickerRootProvider";

export const ColorPickerRoot = withProvider(ColorPicker.Root, "root");
ColorPickerRoot.displayName = "ColorPickerRoot";

export const ColorPickerArea = withContext(ColorPicker.Area, "area");
ColorPickerArea.displayName = "ColorPickerArea";

export const ColorPickerAreaBackground = withContext(
	ColorPicker.AreaBackground,
	"areaBackground",
);
ColorPickerAreaBackground.displayName = "ColorPickerAreaBackground";

export const ColorPickerAreaThumb = withContext(
	ColorPicker.AreaThumb,
	"areaThumb",
);
ColorPickerAreaThumb.displayName = "ColorPickerAreaThumb";

export const ColorPickerChannelSlider = withContext(
	ColorPicker.ChannelSlider,
	"channelSlider",
);
ColorPickerChannelSlider.displayName = "ColorPickerChannelSlider";

export const ColorPickerChannelSliderControl = withContext(
	ark.div,
	"channelSliderControl",
	{
		dataAttr: true,
		defaultProps: {
			"data-scope": "color-picker",
			"data-part": "channel-slider-control",
		},
	},
);
ColorPickerChannelSliderControl.displayName = "ColorPickerChannelSliderControl";

export const ColorPickerChannelSliderLabel = withContext(
	ColorPicker.ChannelSliderLabel,
	"channelSliderLabel",
);
ColorPickerChannelSliderLabel.displayName = "ColorPickerChannelSliderLabel";

export const ColorPickerChannelSliderThumb = withContext(
	ColorPicker.ChannelSliderThumb,
	"channelSliderThumb",
);
ColorPickerChannelSliderThumb.displayName = "ColorPickerChannelSliderThumb";

export const ColorPickerChannelSliderTrack = withContext(
	ColorPicker.ChannelSliderTrack,
	"channelSliderTrack",
);
ColorPickerChannelSliderTrack.displayName = "ColorPickerChannelSliderTrack";

export const ColorPickerChannelSliderValueText = withContext(
	ColorPicker.ChannelSliderValueText,
	"channelSliderValueText",
);
ColorPickerChannelSliderValueText.displayName =
	"ColorPickerChannelSliderValueText";

export const ColorPickerChannelInput = withContext(
	ColorPicker.ChannelInput,
	"channelInput",
);
ColorPickerChannelInput.displayName = "ColorPickerChannelInput";

export const ColorPickerContent = withContext(ColorPicker.Content, "content");
ColorPickerContent.displayName = "ColorPickerContent";

export const ColorPickerValueSwatch = ColorPicker.ValueSwatch;
ColorPickerValueSwatch.displayName = "ColorPickerValueSwatch";

export const ColorPickerControl = withContext(ColorPicker.Control, "control");
ColorPickerControl.displayName = "ColorPickerControl";

export const ColorPickerEyeDropperTrigger = withContext(
	ColorPicker.EyeDropperTrigger,
	"eyeDropperTrigger",
);
ColorPickerEyeDropperTrigger.displayName = "ColorPickerEyeDropperTrigger";

export const ColorPickerFormatSelect = withContext(
	ColorPicker.FormatSelect,
	"formatSelect",
);
ColorPickerFormatSelect.displayName = "ColorPickerFormatSelect";

export const ColorPickerFormatTrigger = withContext(
	ColorPicker.FormatTrigger,
	"formatTrigger",
);
ColorPickerFormatTrigger.displayName = "ColorPickerFormatTrigger";

export const ColorPickerHiddenInput = ColorPicker.HiddenInput;
ColorPickerHiddenInput.displayName = "ColorPickerHiddenInput";

export const ColorPickerLabel = withContext(ColorPicker.Label, "label");
ColorPickerLabel.displayName = "ColorPickerLabel";

export const ColorPickerPositioner = withContext(
	ColorPicker.Positioner,
	"positioner",
);
ColorPickerPositioner.displayName = "ColorPickerPositioner";

export const ColorPickerSwatch = withContext(ColorPicker.Swatch, "swatch");
ColorPickerSwatch.displayName = "ColorPickerSwatch";

export const ColorPickerSwatchGroup = withContext(
	ColorPicker.SwatchGroup,
	"swatchGroup",
);
ColorPickerSwatchGroup.displayName = "ColorPickerSwatchGroup";

export const ColorPickerSwatchIndicator = withContext(
	ColorPicker.SwatchIndicator,
	"swatchIndicator",
);
ColorPickerSwatchIndicator.displayName = "ColorPickerSwatchIndicator";

export const ColorPickerSwatchTrigger = withContext(
	ColorPicker.SwatchTrigger,
	"swatchTrigger",
);
ColorPickerSwatchTrigger.displayName = "ColorPickerSwatchTrigger";

export const ColorPickerTransparencyGrid = withContext(
	ColorPicker.TransparencyGrid,
	"transparencyGrid",
);
ColorPickerTransparencyGrid.displayName = "ColorPickerTransparencyGrid";

export const ColorPickerTrigger = withContext(ColorPicker.Trigger, "trigger");
ColorPickerTrigger.displayName = "ColorPickerTrigger";

export const ColorPickerValueText = withContext(
	ColorPicker.ValueText,
	"valueText",
);
ColorPickerValueText.displayName = "ColorPickerValueText";

export const ColorPickerView = withContext(ColorPicker.View, "view");
ColorPickerView.displayName = "ColorPickerView";

export const ColorPickerContext = ColorPicker.Context;
