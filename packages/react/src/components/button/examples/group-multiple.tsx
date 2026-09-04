import { Button, ButtonGroup } from "@moto-ui/react";

export default function Multiple() {
	return (
		<ButtonGroup>
			<Button variant="primary">Write</Button>
			<Button variant="secondary">Ask</Button>
			<Button
				colorPalette="destructive"
				variant="tertiary"
			>
				Cancel
			</Button>
		</ButtonGroup>
	);
}
