import preview from "@.storybook/preview";
import { Pagination } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Pagination,
	title: "Disclosure/Pagination",
	args: {
		count: 800,
		pageSize: 10,
		defaultPage: 1,
	},
	parameters: {
		docs: {
			description: {
				component: "Enables navigation across multiple pages.",
			},
		},
	},
});

export default meta;

export { Attached } from "./attached";
export { Basic } from "./basic";
export { SiblingCount } from "./sibling-count";
export { Store } from "./store";
