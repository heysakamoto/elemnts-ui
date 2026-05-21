import { Icon, Item, Toggle } from "@moto-ui/react";
import { useState } from "react";

export function Controlled() {
	const [pressed, setPressed] = useState(false);

	return (
		<Toggle
			pressed={pressed}
			aria-label="Toggle bold"
			onPressedChange={setPressed}
		>
			<Item
				iconOnly
				selected={pressed}
			>
				<Icon
					icon="tabler:bold"
					width={16}
					height={16}
				/>
			</Item>
		</Toggle>
	);
}
