import preview from "@.storybook/preview";
import { WheelPicker, type WheelPickerOption } from "@moto-ui/react";

const options: WheelPickerOption[] = [
	{ label: "Gaming", value: "gaming" },
	{ label: "Karate", value: "karate" },
	{ label: "Cooking", value: "cooking" },
	{ label: "Reading", value: "reading" },
	{ label: "Writing", value: "writing" },
	{ label: "Running", value: "running" },
	{ label: "Swimming", value: "swimming" },
];

const meta = preview.meta({
	title: "Basic",
	component: WheelPicker,
	args: {
		colorPalette: "neutral",
		variant: "secondary",
	},
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The `WheelPicker` component is used to select a single value from a list of options using a wheel-like interaction.",
			},
		},
	},
	render: (args) => (
		<WheelPicker
			{...args}
			w="10rem"
		>
			<WheelPicker.Control>
				<WheelPicker.Options
					options={options}
					defaultValue="gaming"
				/>
			</WheelPicker.Control>
		</WheelPicker>
	),
});
