import { Container, Portal, Surface } from "@elemnts-ui/react";

export default function Basic() {
	return (
		<Container maxW="20rem">
			<Surface p="12" delta={1}>
				<Surface.Title justify="center">
					This text is inside the container.
				</Surface.Title>
			</Surface>
			<Portal>
				<Surface
					p="12"
					w="fit"
					top="64"
					left="12"
					delta={1}
					zIndex="99"
					position="fixed"
				>
					<Surface.Title>I am portalled to the top of the page</Surface.Title>
				</Surface>
			</Portal>
		</Container>
	);
}
