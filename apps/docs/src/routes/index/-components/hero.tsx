import { ButtonGroup, Container, Section, Stack, Text } from "@moto-ui/react";
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
						letterSpacing="-.04em"
						fontSize={{ base: "32", lg: "44" }}
					>
						Typesafe for engineers. <Text as="br" /> Perfect for brands.
					</Text>
					<Text
						mt="12"
						mx="auto"
						textAlign="center"
						letterSpacing="sm"
						color="fg.secondary"
						fontSize={{ base: "16", md: "20" }}
						maxW={{ base: "21rem", sm: "32rem", lg: "40rem" }}
					>
						MotoUI is a modern react UI library that helps you build quickly,
						maintain consistency, and ship polished user experiences.
					</Text>
					<ButtonGroup
						mt="20"
						gap="8"
						justify="center"
						colorPalette="neutral"
					>
						<ButtonGroup.Item
							asChild
							size="lg"
							rounded="24"
						>
							<Link to="/docs/$">Documentation</Link>
						</ButtonGroup.Item>
						<ButtonGroup.Item
							size="lg"
							asChild
							rounded="24"
							variant="secondary"
						>
							<Link
								target="_blank"
								to={"https://storybook.moto-ui.app" as any}
							>
								Storybook
							</Link>
						</ButtonGroup.Item>
					</ButtonGroup>
				</Stack>
			</Container>
		</Section>
	);
}
