import preview from "@.storybook/preview";
import { Listbox } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Listbox,
	title: "Collections/Listbox",
	args: {
		selectionMode: "single",
	},
	parameters: {
		docs: {
			description: {
				component: "Designed to present a list of choices for user selection.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Disabled } from "./disabled";
export { WithCheckmark } from "./with-checkmark";
