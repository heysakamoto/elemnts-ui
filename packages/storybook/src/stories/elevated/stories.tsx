import { Elevated } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Elevated,
	title: "Layouts/Elevated",
	parameters: {
		docs: {
			description: {
				component:
					"A layout component that raises the elevation level of its children relative to the current substrate.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { NoBorder } from "./no-border";
export { ShadowOverride } from "./shadow-override";
