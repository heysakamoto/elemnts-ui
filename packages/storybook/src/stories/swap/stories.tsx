import preview from "@.storybook/preview";
import { Swap } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Swap,
	title: "Utilities/Swap",
	args: {
		swap: false,
		mode: "fade",
	},
	parameters: {
		docs: {
			description: {
				component:
					"A utility component used to toggle between two elements with an animation.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Fade } from "./fade";
export { Flip } from "./flip";
export { Rotate } from "./rotate";
export { Scale } from "./scale";
