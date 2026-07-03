import { RadioGroup } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: RadioGroup,
	title: "Forms/Radio Group",
	args: {
		orientation: "vertical",
		disabled: false,
	},
	parameters: {
		docs: {
			description: {
				component:
					"A set of checkable buttons, known as radio buttons, where no more than one button can be checked at a time.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Disabled } from "./disabled";
export { Horizontal } from "./horizontal";
