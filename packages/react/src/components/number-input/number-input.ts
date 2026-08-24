import { NumberInput } from "@ark-ui/react/number-input";

import { createStyleContext } from "../../../styled-system/jsx";
import { numberInputRecipe } from "../../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(numberInputRecipe);

export const NumberInputRootProvider = withProvider(
	NumberInput.RootProvider,
	"root",
);
NumberInputRootProvider.displayName = "NumberInputProvider";

export const NumberInputRoot = withProvider(NumberInput.Root, "root");
NumberInputRoot.displayName = "NumberInputRoot";

export const NumberInputContext = NumberInput.Context;

export const NumberInputControl = withContext(NumberInput.Control, "control");
NumberInputControl.displayName = "NumberInputControl";

export const NumberInputDecrementTrigger = withContext(
	NumberInput.DecrementTrigger,
	"decrementTrigger",
);
NumberInputDecrementTrigger.displayName = "NumberInputDecrementTrigger";

export const NumberInputIncrementTrigger = withContext(
	NumberInput.IncrementTrigger,
	"incrementTrigger",
);
NumberInputIncrementTrigger.displayName = "NumberInputIncrementTrigger";

export const NumberInputInput = withContext(NumberInput.Input, "input");
NumberInputInput.displayName = "NumberInputInput";

export const NumberInputLabel = withContext(NumberInput.Label, "label");
NumberInputLabel.displayName = "NumberInputLabel";

export const NumberInputScrubber = withContext(
	NumberInput.Scrubber,
	"scrubber",
);
NumberInputScrubber.displayName = "NumberInputScrubber";

export const NumberInputValueText = withContext(
	NumberInput.ValueText,
	"valueText",
);
NumberInputValueText.displayName = "NumberInputValueText";
