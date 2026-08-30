import {
	ButtonGroup,
	Container,
	For,
	Grid,
	Icon,
	Section,
	Surface,
	Text,
} from "@moto-ui/react";
import { Link } from "@tanstack/react-router";
import { Suspense } from "react";

import { LANDING_HERO_EXAMPLES } from "../constants";

export function LandingHero() {
	return (
		<Section
			pb="80"
			pt={["80", "96"]}
		>
			<Container
				px="16"
				maxW="40rem"
			>
				<Text
					as="h1"
					lineHeight="xs"
					letterSpacing="-0.04em"
					fontSize={["32", "36", "40"]}
				>
					The ultimate UI toolkit for high-velocity teams.
				</Text>
				<Text
					mt="12"
					color="fg.secondary"
					fontSize={{ base: "16", md: "18" }}
				>
					Accessible components for building high-quality web applications and
					design systems faster.{" "}
					<Text
						as="span"
						color="fg.primary"
					>
						Works with all major frameworks.
					</Text>
				</Text>
				<ButtonGroup
					mt="20"
					gap="12"
					size="lg"
				>
					<ButtonGroup.Item
						asChild
						rounded="16"
					>
						<Link to="/docs/$">
							Go to docs
							<Icon
								width={20}
								height={20}
								icon="tabler:arrow-right"
							/>
						</Link>
					</ButtonGroup.Item>
					<ButtonGroup.Item
						asChild
						rounded="16"
						variant="secondary"
					>
						<Link to="/sponsor">Become a Sponsor</Link>
					</ButtonGroup.Item>
				</ButtonGroup>
			</Container>
			<Container
				px="16"
				maxW="40rem"
				mt={["48", "64"]}
			>
				<Grid
					gap="20"
					gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
				>
					<For each={LANDING_HERO_EXAMPLES}>
						{(example) => (
							<Surface
								p="16"
								delta={1}
								rounded="24"
								key={example.id}
							>
								<Surface.Content
									h="11.5rem"
									align="center"
									justify="center"
								>
									<Suspense fallback={null}>
										<example.component />
									</Suspense>
								</Surface.Content>
							</Surface>
						)}
					</For>
				</Grid>
			</Container>
		</Section>
	);
}
