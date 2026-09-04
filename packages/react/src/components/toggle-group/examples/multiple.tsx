import { Icon, Item, ToggleGroup } from "@moto-ui/react";

export default function Multiple() {
	return (
		<ToggleGroup
			multiple
			defaultValue={["bold", "italic"]}
		>
			<ToggleGroup.Item
				asChild
				value="italic"
				aria-label="Italic"
			>
				<Item variant="secondary">
					<Icon
						width={14}
						height={14}
						icon="tabler:italic"
					/>
					Italic
				</Item>
			</ToggleGroup.Item>
			<ToggleGroup.Item
				asChild
				value="underline"
				aria-label="Underline"
			>
				<Item variant="secondary">
					<Icon
						width={14}
						height={14}
						icon="tabler:underline"
					/>
					Underline
				</Item>
			</ToggleGroup.Item>
		</ToggleGroup>
	);
}
