import { Button, ButtonGroup, Container, Surface } from "@elemnts-ui/react";
import { Link } from "@tanstack/react-router";

import { Logo } from "./logo";

export function NotFound() {
	return (
		<Container px="12" minH="100dvh" alignContent="center">
			<Container maxW="20rem">
				<Surface delta={0} rounded="0" elevated={false}>
					<Surface.Header align="center">
						<Logo />
					</Surface.Header>
					<Surface.Content mt="20" gap="8">
						<Surface.Title fontSize="20" justify="center" letterSpacing="xs">
							Nothing to see here
						</Surface.Title>
						<Surface.Description
							fontSize="16"
							textAlign="center"
							letterSpacing="sm"
						>
							The page you’re looking for does not exist. Go home or browse the
							documentation instead.
						</Surface.Description>
					</Surface.Content>
					<Surface.Footer mt="20">
						<ButtonGroup gap="8" fullWidth colorPalette="neutral">
							<Button asChild rounded="12" variant="secondary">
								<Link to="/">Go home</Link>
							</Button>
							<Button asChild rounded="12" variant="primary">
								<Link to="/docs/$" params={{ _splat: "" }}>
									Explore docs
								</Link>
							</Button>
						</ButtonGroup>
					</Surface.Footer>
				</Surface>
			</Container>
		</Container>
	);
}
