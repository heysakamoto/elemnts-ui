import { ColorPicker, parseColor } from "@moto-ui/react";

export default function AreaChannels() {
	const color = parseColor("hsl(50, 50%, 50%)");

	return (
		<ColorPicker
			inline
			defaultValue={color}
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
}
