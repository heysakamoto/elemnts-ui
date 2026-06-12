import preview from "@.storybook/preview";
import { Spinner } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Spinner,
	title: "Feedback/Spinner",
	args: {
		size: "md",
		speed: "normal",
	},
	parameters: {
		docs: {
			description: {
				component:
					"A visual indicator used to represent a loading state or an ongoing process.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { CustomIcon } from "./custom-icon";
export { Variants } from "./variants";
