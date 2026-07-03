import { HoverCard } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Overlays/HoverCard",
	component: HoverCard,
	tags: ["autodocs"],
	args: {
		openDelay: 600,
		closeDelay: 300,
	},
	parameters: {
		docs: {
			description: {
				component:
					"Displays additional content when a user hovers over a target element.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Delays } from "./delays";
