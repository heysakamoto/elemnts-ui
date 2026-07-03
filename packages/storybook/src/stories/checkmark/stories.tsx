import { Checkmark } from "@moto-ui/react";

import preview from "@.storybook/preview";

export const meta = preview.meta({
	tags: ["autodocs"],
	component: Checkmark,
	title: "Utilities/Checkmark",
	args: {
		checked: false,
		indeterminate: false,
		disabled: false,
	},
	parameters: {
		docs: {
			description: {
				component:
					"A customizable indicator used to show a checked or indeterminate state.",
			},
		},
	},
});

export { Basic } from "./basic";
export { Indeterminate } from "./indeterminate";
export { Variants } from "./variants";
