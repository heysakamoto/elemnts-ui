import { Tile } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Tile,
	title: "Data Display/Tile",
	args: {
		selected: false,
	},
	parameters: {
		docs: {
			description: {
				component:
					"A versatile component used to display content in a card-like format, often used for selection or feature highlights.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Orientation } from "./orientation";
export { Variants } from "./variants";
