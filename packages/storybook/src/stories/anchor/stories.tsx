import preview from "@.storybook/preview";
import { Anchor } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Anchor,
	title: "Typography/Anchor",
	parameters: {
		docs: {
			description: {
				component: "Provides accessible navigation",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Routers } from "./routers";
export { Variants } from "./variants";
export { WithinText } from "./within-text";
