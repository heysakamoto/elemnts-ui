import { Button, Container, Group, Surface } from "@moto-ui/react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./logo";

export function NotFound() {
	return (
		<Container
			px="12"
			minH="100dvh"
			alignContent="center"
		>
			<Container maxW="20rem">
				<Surface
					delta={1}
					rounded="0"
					elevated={false}
				>
					<Surface.Header align="center">
						<Logo type="wordmark" />
					</Surface.Header>
					<Surface.Content
						mt="20"
						gap="8"
					>
						<Surface.Title
							fontSize="20"
							justify="center"
							letterSpacing="xs"
						>
							Nothing to see here
						</Surface.Title>
						<Surface.Description
							fontSize="16"
							textAlign="center"
							letterSpacing="sm"
						>
							The page you’re looking for does not exist. Browse the
							documentation instead.
						</Surface.Description>
					</Surface.Content>
					<Surface.Footer mt="20">
						<Group
							gap="8"
							fullWidth
						>
							<Button
								asChild
								rounded="16"
								variant="secondary"
								colorPalette="neutral"
							>
								<Link to="/">Go home</Link>
							</Button>
							<Button
								asChild
								rounded="16"
								variant="primary"
								colorPalette="neutral"
							>
								<Link
									to="/docs/$"
									params={{ _splat: "" }}
								>
									Explore docs
								</Link>
							</Button>
						</Group>
					</Surface.Footer>
				</Surface>
			</Container>
		</Container>
	);
}
