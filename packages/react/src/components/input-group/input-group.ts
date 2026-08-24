import { ark } from "@ark-ui/react";

import { createStyleContext } from "../../../styled-system/jsx";
import { inputGroupRecipe } from "../../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(inputGroupRecipe);

export const InputGroupRoot = withProvider(ark.div, "root", {
	dataAttr: true,
	defaultProps: {
		"data-part": "root",
		"data-scope": "input-group",
	},
});
InputGroupRoot.displayName = "InputGroupRoot";

export const InputGroupAddon = withContext(ark.div, "addon", {
	dataAttr: true,
	defaultProps: {
		"data-part": "addon",
		"data-scope": "input-group",
	},
});
InputGroupAddon.displayName = "InputGroupAddon";

export const InputGroupInput = withContext(ark.input, "input", {
	dataAttr: true,
	defaultProps: {
		"data-part": "input",
		"data-scope": "input-group",
	},
});
InputGroupInput.displayName = "InputGroupInput";

export const InputGroupTextarea = withContext(ark.textarea, "textarea", {
	dataAttr: true,
	defaultProps: {
		"data-part": "textarea",
		"data-scope": "input-group",
	},
});
InputGroupTextarea.displayName = "InputGroupTextarea";
