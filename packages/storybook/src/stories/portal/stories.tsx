import { Portal } from "@moto-ui/react";
import { preview } from "../../../.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Portal,
	title: "Utilities/Portal",
	args: {
		disabled: false,
	},
	parameters: {
		docs: {
			description: {
				component:
					"A component that renders its children into a new element at the end of the document.body.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { CustomContainer } from "./custom-container";
export { Disabled } from "./disabled";
