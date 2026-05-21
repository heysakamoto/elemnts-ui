import preview from "@.storybook/preview";
import { Checkbox } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Checkbox,
	title: "Forms/Checkbox",
	args: {
		disabled: false,
		invalid: false,
	},
	parameters: {
		docs: {
			description: {
				component:
					"A control that allows the user to toggle between checked and unchecked states.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Group } from "./group";
