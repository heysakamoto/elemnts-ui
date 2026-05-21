import preview from "@.storybook/preview";
import { ButtonGroup } from "@moto-ui/react";
import { Basic } from "./basic";
import { FullWidth } from "./full-width";
import { Orientation } from "./orientation";
import { Palettes } from "./palettes";
import { Sizes } from "./sizes";
import { Variants } from "./variants";

const meta = preview.meta({
	title: "Pressables/ButtonGroup",
	component: ButtonGroup,
	tags: ["autodocs"],
	args: {
		attached: false,
		fullWidth: false,
		iconOnly: false,
	},
	parameters: {
		docs: {
			description: {
				component:
					"Organize related buttons into a group with consistent styling and spacing",
			},
		},
	},
});

export default meta;

export { Basic, FullWidth, Orientation, Palettes, Sizes, Variants };
