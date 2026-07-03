import { Collapsible } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Collapsible,
	title: "Disclosure/Collapsible",
	args: {
		defaultOpen: false,
		disabled: false,
	},
	parameters: {
		docs: {
			description: {
				component: "Lets users show or hide additional content.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { DefaultOpen } from "./default-open";
export { Disabled } from "./disabled";
export { PartialHeight } from "./partial-height";
