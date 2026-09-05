import { Icon, Item, Surface, ToggleGroup } from "@elemnts-ui/react";

export default function Attached() {
	return (
		<Surface rounded="12">
			<ToggleGroup attached>
				<ToggleGroup.Item asChild value="bold" aria-label="bold">
					<Item variant="secondary">
						<Icon ml="-6" width={16} height={16} icon="tabler:bold" />
						Bold
					</Item>
				</ToggleGroup.Item>
				<ToggleGroup.Item asChild value="italic" aria-label="Italic">
					<Item variant="secondary">
						<Icon ml="-6" width={16} height={16} icon="tabler:italic" />
						Italic
					</Item>
				</ToggleGroup.Item>
				<ToggleGroup.Item asChild value="underline" aria-label="Underline">
					<Item variant="secondary">
						<Icon ml="-6" width={16} height={16} icon="tabler:underline" />
						Underline
					</Item>
				</ToggleGroup.Item>
			</ToggleGroup>
		</Surface>
	);
}
