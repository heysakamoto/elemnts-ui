import { Radiomark } from "@moto-ui/react";
import { useState } from "react";

export default function Basic() {
	const [checked, setChecked] = useState(true);

	return (
		<Radiomark
			checked={checked}
			onClick={() => setChecked(!checked)}
		/>
	);
}
