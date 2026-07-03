import {
	Button,
	ButtonGroup,
	Container,
	For,
	Grid,
	Icon,
	Item,
	JsonTreeView,
	Menu,
	Portal,
	ScrollShadow,
	Section,
	SegmentGroup,
	Surface,
	Switch,
	Text,
	VisuallyHidden,
} from "@moto-ui/react";
import { Link } from "@tanstack/react-router";

import { Sponsor } from "@/components/base/sponsor";

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
									<example.component />
								</Surface.Content>
							</Surface>
						)}
					</For>
				</Grid>
			</Container>
		</Section>
	);
}

const examples = [
	{
		id: "switch",
		title: "Switch",
		component: SwitchExample,
	},
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
	{
		id: "menu",
		title: "Menu",
		component: MenuExample,
	},
];

function SwitchExample() {
	return (
		<Switch size="lg">
			<VisuallyHidden>
				<Switch.Label>Switch</Switch.Label>
			</VisuallyHidden>
			<Switch.Control>
				<Switch.Thumb />
			</Switch.Control>
			<Switch.HiddenInput />
		</Switch>
	);
}

function SegmentGroupExample() {
	const values = [
		{
			label: "Ark",
			value: "ark",
		},
		{
			label: "Pandacss",
			value: "pandacss",
		},
		{
			label: "Moto",
			value: "moto",
		},
	];

	return (
		<SegmentGroup
			orientation="horizontal"
			defaultValue="ark"
		>
			<SegmentGroup.Indicator />
			{values.map((value) => {
				return (
					<SegmentGroup.Item
						key={value.value}
						value={value.value}
					>
						<SegmentGroup.ItemText>{value.label}</SegmentGroup.ItemText>
						<SegmentGroup.ItemHiddenInput />
					</SegmentGroup.Item>
				);
			})}
		</SegmentGroup>
	);
}

function MenuExample() {
	const options = [
		{ label: "Cut", value: "cut" },
		{ label: "Copy", value: "copy" },
		{ label: "Paste", value: "paste" },
	];

	return (
		<Menu positioning={{ placement: "bottom" }}>
			<Menu.Trigger asChild>
				<Button
					variant="surface"
					rounded="24"
				>
					View
				</Button>
			</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content asChild>
						<Surface
							w="8rem"
							delta={1}
							rounded="24"
						>
							<Surface.Content p="4">
								{options.map((option) => (
									<Menu.Item
										key={option.value}
										value={option.value}
									>
										<Item rounded="20">
											<Menu.ItemText>{option.label}</Menu.ItemText>
										</Item>
									</Menu.Item>
								))}
							</Surface.Content>
						</Surface>
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu>
	);
}

function JsonTreeViewExample() {
	const data = {
		name: "John Doe",
		age: 30,
		email: "john.doe@example.com",
		isDeveloper: true,
		skills: ["React", "TypeScript", "Panda CSS"],
		address: {
			street: "123 Main St",
			city: "Anytown",
			zip: "12345",
		},
		lastLogin: new Date().toISOString(),
		settings: null,
	};

	return (
		<ScrollShadow
			maxW="16rem"
			align="center"
			justify="center"
			display="flex"
			direction="column"
		>
			<JsonTreeView
				data={data}
				h="10rem"
				defaultExpandedDepth={1}
			>
				<JsonTreeView.Tree
					arrow={
						<Icon
							width={16}
							height={16}
							icon="tabler:chevron-right"
						/>
					}
				/>
			</JsonTreeView>
		</ScrollShadow>
	);
}
