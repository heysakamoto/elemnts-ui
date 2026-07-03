import { DataList } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: DataList,
	title: "Data Display/DataList",
	parameters: {
		docs: {
			description: {
				component: "Displays a list of terms and their descriptions.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Horizontal } from "./horizontal";
