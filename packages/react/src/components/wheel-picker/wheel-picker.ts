import { ark } from "@ark-ui/react";
import { WheelPicker, WheelPickerWrapper } from "@ncdai/react-wheel-picker";

import { createStyleContext } from "../../../styled-system/jsx";
import { wheelPickerRecipe } from "../../../styled-system/recipes";

const { withProvider } = createStyleContext(wheelPickerRecipe);

export const WheelPickerRoot = withProvider(ark.div, "root");
WheelPickerRoot.displayName = "WheelPickerRoot";

export const WheelPickerControl = WheelPickerWrapper;
WheelPickerControl.displayName = "WheelPickerControl";

export const WheelPickerOptions = WheelPicker;
