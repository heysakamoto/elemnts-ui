import preview from "@.storybook/preview";
import { Tag } from "@moto-ui/react";

export const meta = preview.meta({
	tags: ["autodocs"],
	component: Tag,
	title: "Utilities/Tag",
	args: {
		selected: false,
		disabled: false,
	},
	parameters: {
		docs: {
			description: {
				component:
					"A versatile tag component for categorizing content, displaying status, or labeling items.",
			},
		},
	},
});

export { Basic } from "./basic";
export { Variants } from "./variants";
export { WithIcon } from "./with-icon";
