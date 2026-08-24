import { Button, Group } from "@moto-ui/react";

export default function DesignPrinciples() {
	return (
		<Group gap="8">
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
		</Group>
	);
}
