import { WheelPicker, type WheelPickerOption } from "@elemnts-ui/react";

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
		<WheelPicker w="10rem" variant="secondary">
			<WheelPicker.Control>
				<WheelPicker.Options options={options} defaultValue="gaming" />
			</WheelPicker.Control>
		</WheelPicker>
	);
}
