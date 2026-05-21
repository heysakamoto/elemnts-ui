import preview from "@.storybook/preview";
import { TagsInput } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: TagsInput,
	title: "Forms/TagsInput",
	args: {
		disabled: false,
		readOnly: false,
		addOnPaste: false,
		allowOverflow: false,
		autoFocus: false,
		editable: true,
		invalid: false,
		required: false,
	},
	parameters: {
		docs: {
			description: {
				component:
					"A component that allows users to enter multiple values as tags.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Clearable } from "./clearable";
