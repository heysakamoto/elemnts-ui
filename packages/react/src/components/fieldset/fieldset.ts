import { Fieldset } from "@ark-ui/react/fieldset";

import { createStyleContext } from "../../../styled-system/jsx";
import { fieldsetRecipe } from "../../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(fieldsetRecipe);

export const FieldsetRootProvider = withProvider(Fieldset.RootProvider, "root");
FieldsetRootProvider.displayName = "FieldsetRootProvider";

export const FieldsetRoot = withProvider(Fieldset.Root, "root");
FieldsetRoot.displayName = "FieldsetRoot";

export const FieldsetLegend = withContext(Fieldset.Legend, "legend");
FieldsetLegend.displayName = "FieldsetLegend";

export const FieldsetHelperText = withContext(
	Fieldset.HelperText,
	"helperText",
);
FieldsetHelperText.displayName = "FieldsetHelperText";

export const FieldsetErrorText = withContext(Fieldset.ErrorText, "errorText");
FieldsetErrorText.displayName = "FieldsetErrorText";

export const FieldsetContext = Fieldset.Context;
