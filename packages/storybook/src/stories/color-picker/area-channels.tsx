import preview from "@.storybook/preview";
import { ColorPicker, parseColor } from "@moto-ui/react";

const meta = preview.meta({
	title: "Area Channels",
	component: ColorPicker,
});

export const AreaChannels = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The color area can be remapped to different channels using the xChannel and yChannel props.",
			},
		},
	},
	render: (args) => {
		const color = parseColor("hsl(50, 50%, 50%)");

		return (
			<ColorPicker
				inline
				defaultValue={color}
				{...args}
			>
				<ColorPicker.Area
					xChannel="lightness"
					yChannel="saturation"
					rounded="24"
				>
					<ColorPicker.AreaBackground />
					<ColorPicker.AreaThumb />
				</ColorPicker.Area>
				<ColorPicker.HiddenInput />
			</ColorPicker>
		);
	},
});
