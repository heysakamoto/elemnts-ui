import { Container, Elevated } from "@moto-ui/react";

export default function ShadowOverride() {
	return (
		<Container maxW="24rem">
			<Elevated
				py="8"
				px="16"
				delta={1}
				rounded="8"
				shadowLevel={4}
			>
				Elevated component with Shadow Level 4
			</Elevated>
		</Container>
	);
}
