import { Container, Input } from "@moto-ui/react";

export default function Disabled() {
	return (
		<Container maxW="10rem">
			<Input
				rounded="24"
				placeholder="City"
				disabled
			/>
		</Container>
	);
}
