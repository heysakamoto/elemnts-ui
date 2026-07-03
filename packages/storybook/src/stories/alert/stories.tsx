import { Alert } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Alert,
	title: "Feedback/Alert",
	args: {},
	parameters: {
		docs: {
			description: {
				component:
					"Displays a brief, important message in a way that attracts the user's attention without interrupting their task.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Control } from "./control";
export { Description } from "./description";
export { Palettes } from "./palettes";
