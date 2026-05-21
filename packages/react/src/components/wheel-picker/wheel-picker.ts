import { ark } from "@ark-ui/react";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { wheelPickerRecipe } from "@moto-ui/styled-system/recipes";
import { WheelPicker, WheelPickerWrapper } from "@ncdai/react-wheel-picker";

const { withProvider } = createStyleContext(wheelPickerRecipe);

export const WheelPickerRoot = withProvider(ark.div, "root");
WheelPickerRoot.displayName = "WheelPickerRoot";

export const WheelPickerControl = WheelPickerWrapper;
WheelPickerControl.displayName = "WheelPickerControl";

export const WheelPickerOptions = WheelPicker;
