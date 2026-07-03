import { Input } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Input,
	title: "Forms/Input",
	args: {
		variant: "primary",
		size: "md",
	},
	parameters: {
		docs: {
			description: {
				component: "Used to get single-line text input from the user.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Disabled } from "./disabled";
export { Sizes } from "./sizes";
export { Variants } from "./variants";
