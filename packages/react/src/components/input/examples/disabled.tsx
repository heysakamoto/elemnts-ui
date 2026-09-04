import { Container, Input } from "@moto-ui/react";

export default function Disabled() {
	return (
		<Container maxW="20rem">
			<Input
				placeholder="City"
				disabled
			/>
		</Container>
	);
}
