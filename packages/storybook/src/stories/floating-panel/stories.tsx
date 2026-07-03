import { FloatingPanel } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: FloatingPanel,
	title: "Overlays/FloatingPanel",
	args: {
		defaultOpen: false,
		draggable: true,
		resizable: true,
	},
	parameters: {
		docs: {
			description: {
				component: "A draggable and resizable floating panel.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
