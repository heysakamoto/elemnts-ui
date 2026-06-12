import preview from "@.storybook/preview";
import { Status } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Status,
	title: "Feedback/Status",
	args: {
		size: "md",
	},
	parameters: {
		docs: {
			description: {
				component: "Used to indicate the status of an item or a process.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { OnlyIndicator } from "./only-indicator";
export { Sizes } from "./sizes";
