import { PasswordInput } from "@ark-ui/react/password-input";

import { createStyleContext } from "../../../styled-system/jsx";
import { passwordInputRecipe } from "../../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(passwordInputRecipe);

export const PasswordInputRootProvider = withProvider(
	PasswordInput.RootProvider,
	"root",
);
PasswordInputRootProvider.displayName = "PasswordInputProvider";

export const PasswordInputRoot = withProvider(PasswordInput.Root, "root");
PasswordInputRoot.displayName = "PasswordInputRoot";

export const PasswordInputContext = PasswordInput.Context;

export const PasswordInputControl = withContext(
	PasswordInput.Control,
	"control",
);
PasswordInputControl.displayName = "PasswordInputControl";

export const PasswordInputInput = withContext(PasswordInput.Input, "input");
PasswordInputInput.displayName = "PasswordInputInput";

export const PasswordInputIndicator = withContext(
	PasswordInput.Indicator,
	"indicator",
);
PasswordInputIndicator.displayName = "PasswordInputIndicator";

export const PasswordInputLabel = withContext(PasswordInput.Label, "label");
PasswordInputLabel.displayName = "PasswordInputLabel";

export const PasswordInputVisibilityTrigger = withContext(
	PasswordInput.VisibilityTrigger,
	"visibilityTrigger",
);
PasswordInputVisibilityTrigger.displayName = "PasswordInputVisibilityTrigger";
