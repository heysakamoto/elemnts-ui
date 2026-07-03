import { Steps } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Steps,
	title: "Disclosure/Steps",
	args: {
		count: 3,
		defaultStep: 0,
		orientation: "horizontal",
		linear: false,
	},
	parameters: {
		docs: {
			description: {
				component: "Indicates progress through a multi-step process",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
