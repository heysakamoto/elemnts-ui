import preview from "@.storybook/preview";
import { Toggle } from "@moto-ui/react";

const meta = preview.meta({
	title: "Pressables/Toggle",
	component: Toggle,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component: "A two-state button that can be either on or off.",
			},
		},
	},
	args: {
		disabled: false,
		defaultPressed: false,
	},
});

export default meta;

export { Basic } from "./basic";
export { Controlled } from "./controlled";
export { Disabled } from "./disabled";
export { Indicator } from "./indicator";
