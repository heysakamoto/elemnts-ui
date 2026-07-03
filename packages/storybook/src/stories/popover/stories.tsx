import { Popover } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Popover,
	title: "Overlays/Popover",
	args: {},
	parameters: {
		docs: {
			description: {
				component: "Displays detailed information in a popover.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { SameWidth } from "./same-width";
