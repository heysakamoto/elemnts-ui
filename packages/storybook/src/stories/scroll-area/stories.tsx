import { ScrollArea } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: ScrollArea,
	title: "Layouts/ScrollArea",
	args: {
		variant: "hover",
		size: "md",
	},
	parameters: {
		docs: {
			description: {
				component:
					"A component that provides custom scrollbars for overflowing content.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Horizontal } from "./horizontal";
export { Rtl } from "./rtl";
export { Sizes } from "./sizes";
export { Variants } from "./variants";
