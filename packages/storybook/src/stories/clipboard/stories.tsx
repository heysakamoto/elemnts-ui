import { Clipboard } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Clipboard,
	title: "Data Display/Clipboard",
	args: {
		value: "Hello, World!",
		timeout: 3000,
	},
	parameters: {
		docs: {
			description: {
				component: "Copies text to the clipboard",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Timeout } from "./timeout";
export { WithButton } from "./with-button";
export { WithInput } from "./with-input";
