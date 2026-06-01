import { Container, Icon, Surface } from "@moto-ui/react";

export function Pro() {
	return (
		<Container maxW="24rem">
			<Surface
				delta={1}
				elevated={false}
			>
				<Surface.Content p="24">
					<Icon
						ml="-8"
						width={40}
						height={40}
						color="icon.secondary"
						icon="tabler:stopwatch"
					/>
					<Surface.Title
						mt="16"
						fontSize="16"
						letterSpacing="xs"
					>
						Coming soon...
					</Surface.Title>
					<Surface.Description mt="4">
						Stay tuned! The next premium components release will feature
						animated components, sections, and layouts.
					</Surface.Description>
				</Surface.Content>
			</Surface>
		</Container>
	);
}
