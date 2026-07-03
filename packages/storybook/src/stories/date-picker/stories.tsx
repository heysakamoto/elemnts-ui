import { DatePicker } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: DatePicker,
	title: "Date/DatePicker",
	args: {
		selectionMode: "single",
		closeOnSelect: true,
		disabled: false,
		readOnly: false,
	},
	parameters: {
		docs: {
			description: {
				component:
					"A component that allows users to select a date or a range of dates.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Range } from "./range";
