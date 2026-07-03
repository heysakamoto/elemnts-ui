import { WheelPicker } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: WheelPicker,
	title: "Forms/WheelPicker",
	args: {
		variant: "primary",
	},
	parameters: {
		docs: {
			description: {
				component: "A wheel-style control for picking values from a list.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Radius } from "./radius";
export { Variants } from "./variants";
