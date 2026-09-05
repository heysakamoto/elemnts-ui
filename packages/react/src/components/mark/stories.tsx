import { Mark } from "@elemnts-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import MarkBasicExample from "./examples/basic";
import MarkBasicSource from "./examples/basic?raw";
import MarkPalettesExample from "./examples/palettes";
import MarkPalettesSource from "./examples/palettes?raw";
import MarkVariantsExample from "./examples/variants";
import MarkVariantsSource from "./examples/variants?raw";

const meta = {
	title: "Mark",
	component: Mark,
	tags: ["autodocs"],
} satisfies Meta<typeof Mark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	parameters: {
		docs: {
			source: {
				type: "auto",
				language: "tsx",
				code: MarkBasicSource,
			},
		},
	},
	render: (args) => {
		return <MarkBasicExample {...args} />;
	},
};

export const Palettes: Story = {
	parameters: {
		docs: {
			source: {
				type: "auto",
				language: "tsx",
				code: MarkPalettesSource,
			},
		},
	},
	render: (args) => {
		return <MarkPalettesExample {...args} />;
	},
};

export const Variants: Story = {
	parameters: {
		docs: {
			source: {
				type: "auto",
				language: "tsx",
				code: MarkVariantsSource,
			},
		},
	},
	render: (args) => {
		return <MarkVariantsExample {...args} />;
	},
};
