import { VirtualList } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: VirtualList,
	title: "Layouts/VirtualList",
	args: {
		count: 1000,
		overscan: 5,
	},
	parameters: {
		docs: {
			description: {
				component:
					"Render large lists efficiently by only rendering items in the viewport",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { VariableHeight } from "./variable-height";
