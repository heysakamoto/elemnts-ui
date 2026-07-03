import { Radiomark } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Radiomark,
	title: "Utilities/Radiomark",
	args: {
		checked: false,
		disabled: false,
		size: "sm",
	},
	parameters: {
		docs: {
			description: {
				component:
					"A customizable circular indicator used to show a selection state, typically in radio buttons.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Variants } from "./variants";
