import { ColorPicker } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: ColorPicker,
	title: "Colors/ColorPicker",
	args: {
		disabled: false,
		readOnly: false,
	},
	parameters: {
		docs: {
			description: {
				component:
					"A component that allows users to select a color from a spectrum or predefined swatches.",
			},
		},
	},
});

export default meta;

export { AreaChannels } from "./area-channels";
export { Basic } from "./basic";
export { ChannelSliderAlpha } from "./channel-slider-alpha";
export { ChannelSlidersRGB } from "./channel-sliders-rgb";
export { SwatchGrid } from "./swatch-grid";
