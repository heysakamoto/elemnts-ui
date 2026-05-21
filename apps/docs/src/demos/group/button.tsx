import { Button, Group } from "@moto-ui/react";

export function ButtonGroup() {
	return (
		<Group>
			<Button
				rounded="calc(24px - 8px)"
				variant="tertiary"
			>
				Premium
			</Button>
			<Button
				rounded="calc(24px - 8px)"
				variant="tertiary"
			>
				Free
			</Button>
		</Group>
	);
}
