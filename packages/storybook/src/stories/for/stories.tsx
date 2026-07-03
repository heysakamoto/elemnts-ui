import { For } from "@moto-ui/react";

import preview from "@.storybook/preview";

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
