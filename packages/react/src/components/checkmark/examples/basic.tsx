import { Checkmark, Icon } from "@elemnts-ui/react";
import { useState } from "react";

export default function Basic() {
	const [checked, setChecked] = useState(true);

	return (
		<Checkmark checked={checked} onClick={() => setChecked(!checked)}>
			<Icon icon="tabler:check" width={12} height={12} />
		</Checkmark>
	);
}
