import { Icon, Item, ToggleGroup } from "@moto-ui/react";
import { useState } from "react";

export default function Controlled() {
	const [value, setValue] = useState(["bold"]);

	return (
		<ToggleGroup
			value={value}
			onValueChange={(e) => setValue(e.value)}
		>
			<ToggleGroup.Item
				asChild
				value="bold"
				aria-label="bold"
			>
				<Item variant="secondary">
					<Icon
						width={16}
						height={16}
						icon="tabler:bold"
					/>
				</Item>
			</ToggleGroup.Item>
			<ToggleGroup.Item
				asChild
				value="italic"
				aria-label="Italic"
			>
				<Item variant="secondary">
					<Icon
						width={16}
						height={16}
						icon="tabler:italic"
					/>
				</Item>
			</ToggleGroup.Item>
			<ToggleGroup.Item
				asChild
				value="underline"
				aria-label="Underline"
			>
				<Item variant="secondary">
					<Icon
						width={16}
						height={16}
						icon="tabler:underline"
					/>
				</Item>
			</ToggleGroup.Item>
		</ToggleGroup>
	);
}
