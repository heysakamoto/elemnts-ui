import { Container, Portal, Surface } from "@moto-ui/react";

export function Basic() {
	return (
		<Container maxW="20rem">
			<Surface
				p="12"
				delta={1}
			>
				<Surface.Title
					fontSize="14"
					justify="center"
				>
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
					<Surface.Title fontSize="14">
						I am portalled to the top of the page
					</Surface.Title>
				</Surface>
			</Portal>
		</Container>
	);
}
