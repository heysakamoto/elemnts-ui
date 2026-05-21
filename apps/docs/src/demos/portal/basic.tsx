import { Container, Portal, Surface } from "@moto-ui/react";

export function Basic() {
	return (
		<Container maxW="20rem">
			<Surface
				delta={1}
				p="8"
			>
				<Surface.Title
					justify="center"
					w="full"
					fontSize="14"
				>
					This text is inside the container.
				</Surface.Title>
			</Surface>
			<Portal>
				<Surface
					p="8"
					top="0"
					left="0"
					w="full"
					delta={1}
					shadow="lg"
					rounded="0"
					position="fixed"
				>
					<Surface.Title
						fontSize="14"
						w="full"
					>
						I am portalled to the end of document.body
					</Surface.Title>
				</Surface>
			</Portal>
		</Container>
	);
}
