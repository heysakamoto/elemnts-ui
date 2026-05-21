import preview from "@.storybook/preview";
import { PasswordInput } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: PasswordInput,
	title: "Forms/PasswordInput",
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
					"A component that allows users to enter a password with visibility toggle.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { WithField } from "./with-field";
