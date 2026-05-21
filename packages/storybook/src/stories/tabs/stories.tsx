import preview from "@.storybook/preview";
import { Tabs } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Tabs,
	title: "Disclosure/Tabs",
	args: {
		defaultValue: "overview",
		orientation: "horizontal",
	},
	parameters: {
		docs: {
			description: {
				component: "Displays content in a tabbed interface",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Disabled } from "./disabled";
export { Sizes } from "./sizes";
export { Variants } from "./variants";
export { Vertical } from "./vertical";
