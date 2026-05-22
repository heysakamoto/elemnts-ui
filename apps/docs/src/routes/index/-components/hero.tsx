import { Button, Container, Group, Section, Stack, Text } from "@moto-ui/react";
import { Link } from "@tanstack/react-router";

export function Hero() {
	return (
		<Section pt="120">
			<Container maxW="42rem">
				<Stack
					direction="column"
					justify="center"
				>
					<Text
						as="h1"
						fontWeight="600"
						lineHeight="xs"
						textAlign="center"
						letterSpacing="-0.05em"
						fontSize={{ base: "32", lg: "44" }}
					>
						Typesafe for engineers. <Text as="br" /> Perfect for brands.
					</Text>
					<Text
						mt="12"
						mx="auto"
						textAlign="center"
						letterSpacing="xs"
						color="fg.secondary"
						fontSize={{ base: "16", md: "20" }}
						maxW={{ base: "21rem", sm: "32rem", lg: "40rem" }}
					>
						MotoUI is a modern react UI library that helps you build quickly,
						maintain consistency, and ship polished user experiences.
					</Text>
					<Group
						mt="20"
						gap="8"
						justify="center"
					>
						<Button
							asChild
							size="lg"
							rounded="24"
						>
							<Link to="/docs/$">Start shipping</Link>
						</Button>
						<Button
							size="lg"
							asChild
							rounded="24"
							variant="secondary"
							colorPalette="neutral"
						>
							<Link
								to={"https://github.com/heysakamoto/moto-ui" as any}
								target="_blank"
							>
								Github repo
							</Link>
						</Button>
					</Group>
				</Stack>
			</Container>
		</Section>
	);
}
