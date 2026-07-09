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

import { Sponsor } from "@/features/sponsor";
import { LANDING_HERO_EXAMPLES } from "../constants";

export function LandingHero() {
	return (
		<Section
			pb="80"
			pt={["80", "120"]}
		>
			<Container
				px="16"
				maxW="40rem"
			>
				<Text
					as="h1"
					lineHeight="xs"
					letterSpacing="sm"
					fontSize={["36", "48"]}
					fontFamily="InstrumentSerif"
				>
					Engineered for speed. Made to scale.
				</Text>
				<Text
					mt="12"
					letterSpacing="sm"
					color="fg.secondary"
					fontSize={{ base: "16", md: "18" }}
				>
					Build fast, accessible interfaces with beautiful 100+ components —
					powered by Ark UI and PandaCSS.
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
					<Sponsor>
						<Sponsor.Trigger asChild>
							<ButtonGroup.Item
								rounded="16"
								variant="secondary"
							>
								Become a Sponsor
							</ButtonGroup.Item>
						</Sponsor.Trigger>
					</Sponsor>
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
