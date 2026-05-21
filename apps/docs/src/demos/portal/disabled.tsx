import { Container, Portal, Surface } from "@moto-ui/react";

export function Disabled() {
	return (
		<Container maxW="20rem">
			<Portal disabled>
				<Surface
					p="8"
					delta={1}
				>
					<Surface.Title
						fontSize="14"
						lineHeight="sm"
						justify="center"
					>
						Rendered in place.
					</Surface.Title>
				</Surface>
			</Portal>
		</Container>
	);
}
