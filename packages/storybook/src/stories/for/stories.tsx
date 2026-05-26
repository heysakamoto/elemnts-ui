import preview from "@.storybook/preview";
import { For } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: For,
	title: "Utilities/For",
	parameters: {
		docs: {
			description: {
				component: "A utility component for rendering a list of items.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Fallback } from "./fallback";
