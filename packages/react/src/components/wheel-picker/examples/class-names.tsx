import { WheelPicker } from "@elemnts-ui/react";

import { css } from "../../styled-system/css";

export default function ClassNames() {
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
					classNames={{ highlightItem: css({ fontSize: "14" }) }}
				/>
			</WheelPicker.Control>
		</WheelPicker>
	);
}
