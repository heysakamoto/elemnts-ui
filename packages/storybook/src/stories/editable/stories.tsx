import preview from "@.storybook/preview";
import { Editable } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Editable,
	title: "Forms/Editable",
	args: {
		activationMode: "focus",
		autoResize: false,
		defaultEdit: false,
		disabled: false,
		invalid: false,
		readOnly: false,
		required: false,
		selectOnFocus: true,
		submitMode: "both",
	},
	parameters: {
		docs: {
			description: {
				component:
					"An interface for users to switch between a read-only and an editable state.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { CustomControls } from "./custom-controls";
