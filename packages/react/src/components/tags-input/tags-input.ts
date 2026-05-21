import { TagsInput } from "@ark-ui/react/tags-input";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { tagsInputRecipe } from "@moto-ui/styled-system/recipes";

const { withProvider, withContext } = createStyleContext(tagsInputRecipe);

export const TagsInputRootProvider = withProvider(
	TagsInput.RootProvider,
	"root",
);
TagsInputRootProvider.displayName = "TagsInputRootProvider";

export const TagsInputRoot = withProvider(TagsInput.Root, "root");
TagsInputRoot.displayName = "TagsInputRoot";

export const TagsInputClearTrigger = withContext(
	TagsInput.ClearTrigger,
	"clearTrigger",
);
TagsInputClearTrigger.displayName = "TagsInputClearTrigger";

export const TagsInputContext = TagsInput.Context;

export const TagsInputItemContext = TagsInput.ItemContext;

export const TagsInputControl = withContext(TagsInput.Control, "control");
TagsInputControl.displayName = "TagsInputControl";

export const TagsInputHiddenInput = withContext(
	TagsInput.HiddenInput,
	"hiddenInput",
);
TagsInputHiddenInput.displayName = "TagsInputHiddenInput";

export const TagsInputInput = withContext(TagsInput.Input, "input");
TagsInputInput.displayName = "TagsInputInput";

export const TagsInputItem = withContext(TagsInput.Item, "item");
TagsInputItem.displayName = "TagsInputItem";

export const TagsInputItemDeleteTrigger = withContext(
	TagsInput.ItemDeleteTrigger,
	"itemDeleteTrigger",
);
TagsInputItemDeleteTrigger.displayName = "TagsInputItemDeleteTrigger";

export const TagsInputItemInput = withContext(TagsInput.ItemInput, "itemInput");
TagsInputItemInput.displayName = "TagsInputItemInput";

export const TagsInputItemPreview = withContext(
	TagsInput.ItemPreview,
	"itemPreview",
);
TagsInputItemPreview.displayName = "TagsInputItemPreview";

export const TagsInputItemText = withContext(TagsInput.ItemText, "itemText");
TagsInputItemText.displayName = "TagsInputItemText";

export const TagsInputLabel = withContext(TagsInput.Label, "label");
TagsInputLabel.displayName = "TagsInputLabel";
