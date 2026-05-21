import preview from "@.storybook/preview";
import { TreeView } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: TreeView,
	title: "Collections/TreeView",
	args: {
		selectionMode: "single",
	},
	parameters: {
		docs: {
			description: {
				component:
					"A component that displays a hierarchical list of items, such as a file system or a navigation menu.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Checkbox } from "./checkbox";
