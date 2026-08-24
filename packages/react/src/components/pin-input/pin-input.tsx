import { PinInput } from "@ark-ui/react/pin-input";
import { forwardRef } from "react";

import { createStyleContext } from "../../../styled-system/jsx";
import { pinInputRecipe } from "../../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(pinInputRecipe);

export const PinInputRootProvider = withProvider(PinInput.RootProvider, "root");
PinInputRootProvider.displayName = "PinInputProvider";

type UnstyledPinInputRootProps = Omit<PinInput.RootProps, "mask"> & {
	masked?: boolean;
};
const UnstyledPinInputRoot = forwardRef<
	HTMLDivElement,
	UnstyledPinInputRootProps
>((props, ref) => {
	const { masked, ...rest } = props;
	return (
		<PinInput.Root
			ref={ref}
			{...rest}
			mask={masked}
		/>
	);
});

export const PinInputRoot = withProvider(UnstyledPinInputRoot, "root", {
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
