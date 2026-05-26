import preview from "@.storybook/preview";
import { DataList } from "@moto-ui/react";

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
