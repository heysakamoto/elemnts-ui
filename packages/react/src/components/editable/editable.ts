import { Editable } from "@ark-ui/react/editable";

import { createStyleContext } from "../../../styled-system/jsx";
import { editableRecipe } from "../../../styled-system/recipes";

const { withRootProvider, withProvider, withContext } =
	createStyleContext(editableRecipe);

export const EditableRootProvider = withRootProvider(Editable.RootProvider);
EditableRootProvider.displayName = "EditableRootProvider";

export const EditableRoot = withProvider(Editable.Root, "root");
EditableRoot.displayName = "EditableRoot";

export const EditableArea = withContext(Editable.Area, "area");
EditableArea.displayName = "EditableArea";

export const EditableLabel = withContext(Editable.Label, "label");
EditableLabel.displayName = "EditableLabel";

export const EditablePreview = withContext(Editable.Preview, "preview");
EditablePreview.displayName = "EditablePreview";

export const EditableInput = withContext(Editable.Input, "input");
EditableInput.displayName = "EditableInput";

export const EditableControl = withContext(Editable.Control, "control");
EditableControl.displayName = "EditableControl";

export const EditableEditTrigger = withContext(
	Editable.EditTrigger,
	"editTrigger",
);
EditableEditTrigger.displayName = "EditableEditTrigger";

export const EditableSubmitTrigger = withContext(
	Editable.SubmitTrigger,
	"submitTrigger",
);
EditableSubmitTrigger.displayName = "EditableSubmitTrigger";

export const EditableCancelTrigger = withContext(
	Editable.CancelTrigger,
	"cancelTrigger",
);
EditableCancelTrigger.displayName = "EditableCancelTrigger";

export const EditableContext = Editable.Context;
