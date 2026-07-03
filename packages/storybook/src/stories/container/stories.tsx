import { Container } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Container,
	title: "Layouts/Container",
	args: {
		fluid: false,
	},
	parameters: {
		docs: {
			description: {
				component:
					"Constrains content width to the current breakpoint's max width while keeping it fluid.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Fluid } from "./fluid";
export { Sizes } from "./sizes";
