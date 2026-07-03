import { Progress } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Progress,
	title: "Feedback/ProgressCircle",
	args: {
		size: "md",
		thickness: "sm",
		min: 0,
		max: 100,
	},
	parameters: {
		docs: {
			description: {
				component:
					"A circular indicator that displays the status of a task or a process.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Indeterminate } from "./indeterminate";
