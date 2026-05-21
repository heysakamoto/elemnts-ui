import preview from "@.storybook/preview";
import { Progress } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Progress,
	title: "Feedback/Progress",
	args: {
		colorPalette: "accent",
		size: "md",
		orientation: "horizontal",
	},
	parameters: {
		docs: {
			description: {
				component:
					"An indicator that displays the status of a task or a process.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Indeterminate } from "./indeterminate";
export { WithLabel } from "./with-label";
