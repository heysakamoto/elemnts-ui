import { Format } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Format,
	title: "Internationalization/Format",
	parameters: {
		docs: {
			description: {
				component:
					"A set of components used to format numbers, bytes, and relative time according to the current locale.",
			},
		},
	},
});

export default meta;

export { Byte } from "./byte";
export { Numeral } from "./number";
export { RelativeTime } from "./relative-time";
