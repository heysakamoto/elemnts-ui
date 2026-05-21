import preview from "@.storybook/preview";
import { Fieldset } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Fieldset,
	title: "Forms/Fieldset",
	args: {
		disabled: false,
		invalid: false,
	},
	parameters: {
		docs: {
			description: {
				component: "A component used to group related form fields.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Disabled } from "./disabled";
export { Invalid } from "./invalid";
