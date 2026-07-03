import { ScrollShadow } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: ScrollShadow,
	title: "Layouts/ScrollShadow",
	args: {
		size: 40,
		isEnabled: true,
		hideScrollbar: true,
	},
	parameters: {
		docs: {
			description: {
				component:
					"Display shadows to signal scrollable overflow, automatically updating with scroll position.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { CustomSize } from "./custom-size";
export { Orientation } from "./orientation";
export { WithSurface } from "./with-surface";
