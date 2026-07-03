import { ClientOnly, Container, Text } from "@moto-ui/react";

export const RenderFn = () => {
	return (
		<Container maxW="28rem">
			<Text fontSize="14">
				Children can be a function for deferred evaluation:
			</Text>
			<ClientOnly
				fallback={
					<Text
						fontSize="14"
						color="fg.tertiary"
					>
						Waiting for client…
					</Text>
				}
			>
				{() => (
					<Text
						fontSize="14"
						color="accent.primary"
					>
						Window width: {window.innerWidth}px
					</Text>
				)}
			</ClientOnly>
		</Container>
	);
};
