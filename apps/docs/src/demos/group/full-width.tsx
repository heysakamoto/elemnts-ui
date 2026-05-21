import { Button, Group } from "@moto-ui/react";

export function FullWidth() {
	return (
		<Group
			fullWidth
			maxW="20rem"
		>
			<Button
				rounded="calc(24px - 8px)"
				variant="tertiary"
			>
				Org
			</Button>
			<Button
				rounded="calc(24px - 8px)"
				variant="tertiary"
			>
				Pro
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
