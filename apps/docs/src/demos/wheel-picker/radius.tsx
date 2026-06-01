import { WheelPicker } from "@moto-ui/react";
import { css } from "@moto-ui/styled-system/css";

export const Radius = () => {
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

	return (
		<WheelPicker w="10rem">
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
	);
};
