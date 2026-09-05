import { Radiomark } from "@elemnts-ui/react";
import { useState } from "react";

export default function Basic() {
	const [checked, setChecked] = useState(true);

	return <Radiomark checked={checked} onClick={() => setChecked(!checked)} />;
}
