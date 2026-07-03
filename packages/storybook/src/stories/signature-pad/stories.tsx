import { SignaturePad } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: SignaturePad,
	title: "Forms/SignaturePad",
	args: {
		disabled: false,
		readOnly: false,
		required: false,
	},
	parameters: {
		docs: {
			description: {
				component: "A component that allows users to draw a signature.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
