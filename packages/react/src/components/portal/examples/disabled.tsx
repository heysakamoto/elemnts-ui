import { Container, Portal, Surface } from "@moto-ui/react";

export default function Disabled() {
	return (
		<Container maxW="20rem">
			<Portal disabled>
				<Surface
					p="8"
					delta={1}
				>
					<Surface.Title justify="center">Rendered in place.</Surface.Title>
				</Surface>
			</Portal>
		</Container>
	);
}
