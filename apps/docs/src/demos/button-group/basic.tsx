import { ButtonGroup } from "@moto-ui/react";

export function Basic() {
	return (
		<ButtonGroup>
			<ButtonGroup.Item rounded="24">
				Merge
				<ButtonGroup.Separator />
			</ButtonGroup.Item>
			<ButtonGroup.Item
				variant="ghost"
				rounded="24"
			>
				Cancel
			</ButtonGroup.Item>
		</ButtonGroup>
	);
}
