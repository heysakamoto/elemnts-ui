import preview from "@.storybook/preview";
import { InputGroup } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: InputGroup,
	title: "Forms/InputGroup",
	args: {
		variant: "primary",
		size: "md",
		noFocus: false,
	},
	parameters: {
		docs: {
			description: {
				component:
					"A container component to group inputs with icons, buttons, or text addons.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Sizes } from "./sizes";
export { Variants } from "./variants";
