import { Tooltip } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Overlays/Tooltip",
	component: Tooltip,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"Displays supplementary information when a user hovers over an element.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Delay } from "./delay";
export { Interactive } from "./interactive";
