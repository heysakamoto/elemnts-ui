import { ButtonGroup } from "@moto-ui/react";

export default function Basic() {
	return (
		<ButtonGroup>
			<ButtonGroup.Item>
				Merge
				<ButtonGroup.Separator />
			</ButtonGroup.Item>
			<ButtonGroup.Item variant="ghost">Cancel</ButtonGroup.Item>
		</ButtonGroup>
	);
}
