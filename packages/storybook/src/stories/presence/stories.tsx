import preview from "@.storybook/preview";
import { Presence } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Presence,
	title: "Utilities/Presence",
	args: {
		present: false,
	},
	parameters: {
		docs: {
			description: {
				component:
					"A utility component that manages the enter and exit animations of its children.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { LazyMount } from "./lazy-mount";
export { Unmount } from "./unmount";
