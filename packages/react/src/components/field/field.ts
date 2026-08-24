import { Field } from "@ark-ui/react/field";

import { createStyleContext } from "../../../styled-system/jsx";
import { fieldRecipe } from "../../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(fieldRecipe);

export const FieldRootProvider = withProvider(Field.RootProvider, "root");
FieldRootProvider.displayName = "FieldRootProvider";

export const FieldRoot = withProvider(Field.Root, "root");
FieldRoot.displayName = "FieldRoot";

export const FieldLabel = withContext(Field.Label, "label");
FieldLabel.displayName = "FieldLabel";

export const FieldInput = withContext(Field.Input, "input");
FieldInput.displayName = "FieldInput";

export const FieldTextarea = withContext(Field.Textarea, "textarea");
FieldTextarea.displayName = "FieldTextarea";

export const FieldSelect = withContext(Field.Select, "select");
FieldSelect.displayName = "FieldSelect";

export const FieldHelperText = withContext(Field.HelperText, "helperText");
FieldHelperText.displayName = "FieldHelperText";

export const FieldErrorText = withContext(Field.ErrorText, "errorText");
FieldErrorText.displayName = "FieldErrorText";

export const FieldRequiredIndicator = withContext(
	Field.RequiredIndicator,
	"requiredIndicator",
);
FieldRequiredIndicator.displayName = "FieldRequiredIndicator";

export const FieldContext = Field.Context;
