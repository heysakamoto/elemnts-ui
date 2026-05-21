import preview from "@.storybook/preview";
import { Combobox } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Combobox,
	title: "Collections/Combobox",
	args: {
		multiple: false,
		disabled: false,
	},
	parameters: {
		docs: {
			description: {
				component:
					"A flexible input component that pairs a text field with a listbox, enabling users to filter options and choose one or more values.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Disabled } from "./disabled";
export { HighlightMatchingText } from "./highlight-matching-text";
export { Multiple } from "./multiple";
export { OpenOnClick } from "./open-on-click";
