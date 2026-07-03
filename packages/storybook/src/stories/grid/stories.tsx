import { Grid } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Grid,
	title: "Layouts/Grid",
	args: {
		inline: false,
	},
	parameters: {
		docs: {
			description: {
				component: "Used for creating and managing grid layouts",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { ColSpan } from "./col-span";
export { RowSpan } from "./row-span";
