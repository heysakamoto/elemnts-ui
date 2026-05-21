import preview from "@.storybook/preview";
import { Accordion } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Accordion,
	title: "Disclosure/Accordion",
	args: {
		multiple: false,
		collapsible: false,
	},
	parameters: {
		docs: {
			description: {
				component:
					"Lets users expand or collapse related sections of content on a page",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Disabled } from "./disabled";
export { Multiple } from "./multiple";
export { WithIcon } from "./with-icon";
