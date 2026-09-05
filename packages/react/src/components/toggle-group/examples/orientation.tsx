import { Icon, Item, ToggleGroup } from "@elemnts-ui/react";

export default function Orientation() {
	return (
		<ToggleGroup orientation="vertical">
			<ToggleGroup.Item asChild value="bold" aria-label="bold">
				<Item variant="secondary">
					<Icon width={16} height={16} ml="-6" icon="tabler:bold" />
					Bold
				</Item>
			</ToggleGroup.Item>
			<ToggleGroup.Item asChild value="italic" aria-label="Italic">
				<Item variant="secondary">
					<Icon width={16} height={16} ml="-6" icon="tabler:italic" />
					Italic
				</Item>
			</ToggleGroup.Item>
			<ToggleGroup.Item asChild value="underline" aria-label="Underline">
				<Item variant="secondary">
					<Icon width={16} height={16} ml="-6" icon="tabler:underline" />
					Underline
				</Item>
			</ToggleGroup.Item>
		</ToggleGroup>
	);
}
