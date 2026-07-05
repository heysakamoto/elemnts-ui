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
import { lazy, Suspense } from "react";

import { Sponsor } from "@/components/base/sponsor";

const SwitchExample = lazy(() =>
	import("./examples/switch").then((module) => ({
		default: module.SwitchExample,
	})),
);
const SegmentGroupExample = lazy(() =>
	import("./examples/segment-group").then((module) => ({
		default: module.SegmentGroupExample,
	})),
);
const JsonTreeViewExample = lazy(() =>
	import("./examples/json-tree-view").then((module) => ({
		default: module.JsonTreeViewExample,
	})),
);
const MenuExample = lazy(() =>
	import("./examples/menu").then((module) => ({ default: module.MenuExample })),
);

const examples = [
	{ id: "switch", title: "Switch", component: SwitchExample },
	{
		id: "segment-group",
		title: "SegmentGroup",
		component: SegmentGroupExample,
	},
	{
		id: "json-tree-view",
		title: "JsonTreeView",
		component: JsonTreeViewExample,
	},
	{ id: "menu", title: "Menu", component: MenuExample },
];

export function LandingFeatureHero() {
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
					<For each={examples}>
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
