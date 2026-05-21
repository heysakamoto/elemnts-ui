import preview from "@.storybook/preview";
import { Textarea } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Textarea,
	title: "Forms/Textarea",
	args: {
		variant: "primary",
		size: "md",
		disabled: false,
	},
	parameters: {
		docs: {
			description: {
				component: "Used to get multi-line text input from the user.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Disabled } from "./disabled";
export { Sizes } from "./sizes";
export { Variants } from "./variants";
