import { RatingGroup } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: RatingGroup,
	title: "Forms/RatingGroup",
	args: {
		count: 5,
		defaultValue: 3,
		allowHalf: false,
		disabled: false,
		readOnly: false,
	},
	parameters: {
		docs: {
			description: {
				component: "A set of buttons that allow users to rate something.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Disabled } from "./disabled";
export { HalfRating } from "./half-rating";
export { Palette } from "./palette";
export { ReadOnly } from "./read-only";
