import { WheelPicker, type WheelPickerOption } from "@moto-ui/react";

export default function Basic() {
	const options: WheelPickerOption[] = [
		{ label: "Gaming", value: "gaming" },
		{ label: "Karate", value: "karate" },
		{ label: "Cooking", value: "cooking" },
		{ label: "Reading", value: "reading" },
		{ label: "Writing", value: "writing" },
		{ label: "Running", value: "running" },
		{ label: "Swimming", value: "swimming" },
	];

	return (
		<WheelPicker
			colorPalette="neutral"
			variant="secondary"
			w="10rem"
		>
			<WheelPicker.Control>
				<WheelPicker.Options
					options={options}
					defaultValue="gaming"
				/>
			</WheelPicker.Control>
		</WheelPicker>
	);
}
