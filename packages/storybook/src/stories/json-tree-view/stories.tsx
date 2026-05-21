import preview from "@.storybook/preview";
import { JsonTreeView } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: JsonTreeView,
	title: "Utilities/JsonTreeView",
	args: {
		defaultExpandedDepth: 1,
	},
	parameters: {
		docs: {
			description: {
				component:
					"A component that displays JSON data in a browsable, hierarchical tree structure.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { CustomValueRendering } from "./custom-value-rendering";
export { ExpandedDepth } from "./expanded-depth";
