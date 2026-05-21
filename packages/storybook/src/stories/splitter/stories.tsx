import preview from "@.storybook/preview";
import { Splitter } from "@moto-ui/react";

const meta = preview.meta({
	title: "Layouts/Splitter",
	component: Splitter,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"A component used to resize adjacent panels with a draggable handle.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { DisabledResize } from "./disabled-resize";
export { MultiplePanels } from "./multiple-panels";
export { SeparatorOnly } from "./separator-only";
export { Vertical } from "./vertical";
