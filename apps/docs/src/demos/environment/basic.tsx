import { Container, Environment, Surface, Text } from "@moto-ui/react";

export function Basic() {
	return (
		<Container maxW="20rem">
			<Environment>
				<Surface
					p="12"
					delta={1}
					rounded="24"
				>
					<Text fontSize="14">
						The components inside this provider will use the environment
						(window, document) provided by the Environment component.
					</Text>
				</Surface>
			</Environment>
		</Container>
	);
}
