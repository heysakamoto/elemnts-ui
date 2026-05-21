import preview from "@.storybook/preview";
import { Field } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Field,
	title: "Forms/Field",
	args: {
		disabled: false,
		invalid: false,
		readOnly: false,
		required: false,
	},
	parameters: {
		docs: {
			description: {
				component:
					"Provides a consistent way to render form fields with labels, helper text, and error messages.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Disabled } from "./disabled";
export { HelperText } from "./helper-text";
export { Invalid } from "./invalid";
