import { Icon, Item, Toggle } from "@elemnts-ui/react";
import { useState } from "react";

export default function Controlled() {
	const [pressed, setPressed] = useState(false);

	return (
		<Toggle
			asChild
			pressed={pressed}
			aria-label="Toggle bold"
			onPressedChange={setPressed}
		>
			<Item w="fit" variant="secondary">
				<Icon icon="tabler:bold" width={16} height={16} />
			</Item>
		</Toggle>
	);
}
