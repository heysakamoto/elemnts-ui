import { css, WheelPicker } from "@moto-ui/react";

import preview from "@.storybook/preview";

const options = [
	{ label: "January", value: "jan" },
	{ label: "February", value: "feb" },
	{ label: "March", value: "mar" },
	{ label: "April", value: "apr" },
	{ label: "May", value: "may" },
	{ label: "June", value: "jun" },
	{ label: "July", value: "jul" },
	{ label: "August", value: "aug" },
	{ label: "September", value: "sep" },
	{ label: "October", value: "oct" },
	{ label: "November", value: "nov" },
	{ label: "December", value: "dec" },
];

const meta = preview.meta({
	title: "Radius",
	component: WheelPicker,
});

export const Radius = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the `radius` prop to adjust the border radius of the highlighted area.",
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
					defaultValue="jan"
					classNames={{
						highlightWrapper: css({ rounded: "full" }),
					}}
				/>
			</WheelPicker.Control>
		</WheelPicker>
	),
});
