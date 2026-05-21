import preview from "@.storybook/preview";
import { Item } from "@moto-ui/react";

export const meta = preview.meta({
	tags: ["autodocs"],
	component: Item,
	title: "Utilities/Item",
	args: {
		selected: false,
		disabled: false,
	},
	parameters: {
		docs: {
			description: {
				component:
					"A versatile primitive component used to create lists, menus, and navigation items.",
			},
		},
	},
});

export { Basic } from "./basic";
export { IconOnly } from "./icon-only";
export { Variants } from "./variants";
