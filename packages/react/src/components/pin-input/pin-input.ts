import { PinInput } from "@ark-ui/react/pin-input";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { pinInputRecipe } from "@moto-ui/styled-system/recipes";

const { withProvider, withContext } = createStyleContext(pinInputRecipe);

export const PinInputRootProvider = withProvider(PinInput.RootProvider, "root");
PinInputRootProvider.displayName = "PinInputProvider";

export const PinInputRoot = withProvider(PinInput.Root, "root", {
	forwardProps: ["mask"],
});
PinInputRoot.displayName = "PinInputRoot";

export const PinInputContext = PinInput.Context;

export const PinInputControl = withContext(PinInput.Control, "control");
PinInputControl.displayName = "PinInputControl";

export const PinInputInput = withContext(PinInput.Input, "input");
PinInputInput.displayName = "PinInputInput";

export const PinInputLabel = withContext(PinInput.Label, "label");
PinInputLabel.displayName = "PinInputLabel";

export const PinInputHiddenInput = PinInput.HiddenInput;
PinInputHiddenInput.displayName = "PinInputHiddenInput";
