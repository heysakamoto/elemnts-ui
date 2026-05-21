import { ButtonGroup } from "@moto-ui/react";
import meta from "./stories";

export const Basic = meta.story({
	render: () => (
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
	),
});
