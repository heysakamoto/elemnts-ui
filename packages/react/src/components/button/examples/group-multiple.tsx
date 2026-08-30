import { Button, ButtonGroup } from "@moto-ui/react";

export default function Multiple() {
	return (
		<ButtonGroup>
			<Button
				variant="primary"
				rounded="24"
			>
				Write
			</Button>
			<Button
				variant="secondary"
				rounded="24"
			>
				Ask
			</Button>
			<Button
				colorPalette="destructive"
				variant="tertiary"
				rounded="24"
			>
				Cancel
			</Button>
		</ButtonGroup>
	);
}
