import { Button, Group } from "@moto-ui/react";

export default function Attached() {
	return (
		<Group attached>
			<Button variant="tertiary">Premium</Button>
			<Button variant="tertiary">Free</Button>
		</Group>
	);
}
