import { Skeleton } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Skeleton,
	title: "Feedback/Skeleton",
	args: {
		effect: "pulse",
		textOnly: false,
	},
	parameters: {
		docs: {
			description: {
				component:
					"A placeholder component used to represent content while it's loading.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { TextOnly } from "./text-only";
export { Variants } from "./variants";
