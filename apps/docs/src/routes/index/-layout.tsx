import {
	Avatar,
	Box,
	Button,
	ButtonGroup,
	Container,
	HoverCard,
	Icon,
	Portal,
	Section,
	Separator,
	Stack,
	Surface,
	Text,
} from "@moto-ui/react";
import { Link } from "@tanstack/react-router";
import type { PropsWithChildren } from "react";
import { Logo } from "@//components/base/logo";
import { Navigation } from "@/components/base/navigation";
import { Sponsor } from "@/components/base/sponsor";
import { ThemeToggle } from "@/components/base/theme-toggle";

export function Layout(props: PropsWithChildren) {
	return (
		<Box as="main">
			<Header />
			{props.children}
			<Footer />
		</Box>
	);
}

function Header() {
	return (
		<Section
			top="0"
			zIndex="2"
			as="header"
			position="sticky"
		>
			<Container maxW="90rem">
				<Surface
					delta={1}
					rounded="0"
					shadow="tertiary"
					roundedBottom="32"
				>
					<Stack
						h="64"
						px="20"
						align="center"
						justify="space-between"
						gridTemplateColumns={{
							base: "repeat(2, 1fr)",
							lg: "repeat(3, 1fr)",
						}}
					>
						<Logo />
						<Navigation />
						<Stack
							align="center"
							justify="end"
						>
							<ThemeToggle />
							<Navigation.Mobile>
								<Navigation.MobileTrigger asChild>
									<Button
										iconOnly
										size="sm"
										hideFrom="lg"
										rounded="full"
										variant="ghost"
										colorPalette="neutral"
										aria-label="Open mobile menu"
										css={{
											"&:not(:hover)": {
												color: "icon.secondary",
											},
										}}
									>
										<Icon
											width={16}
											height={16}
											icon="tabler:menu"
										/>
									</Button>
								</Navigation.MobileTrigger>
							</Navigation.Mobile>
							<Separator
								mx="12"
								h="1.5rem"
								hideBelow="sm"
								orientation="vertical"
							/>
							<ButtonGroup
								attached
								hideBelow="sm"
								colorPalette="neutral"
							>
								<Sponsor>
									<Sponsor.Trigger asChild>
										<ButtonGroup.Item roundedStart="16">
											<Icon
												ml="-2"
												width={16}
												height={16}
												icon="tabler:heart"
											/>
											Sponsor
											<ButtonGroup.Separator />
										</ButtonGroup.Item>
									</Sponsor.Trigger>
								</Sponsor>
								<ButtonGroup.Item
									roundedEnd="16"
									aria-label="github"
								>
									<Link
										target="_blank"
										to={"https://github.com/heysakamoto/moto-ui" as any}
									>
										<Icon
											width={16}
											height={16}
											icon="radix-icons:github-logo"
										/>
									</Link>
								</ButtonGroup.Item>
							</ButtonGroup>
						</Stack>
					</Stack>
				</Surface>
			</Container>
		</Section>
	);
}

function Footer() {
	return (
		<Section as="footer">
			<Container
				maxW="40rem"
				py="24"
			>
				<Stack
					direction="column"
					align="center"
				>
					<HoverCard>
						<Text color="fg.tertiary">
							Built by{" "}
							<HoverCard.Trigger
								fontSize="inherit"
								textDecoration="underline"
							>
								sakamoto
							</HoverCard.Trigger>
							.
						</Text>
						<Portal>
							<HoverCard.Positioner>
								<HoverCard.Content asChild>
									<Surface
										w="16rem"
										delta={1}
										rounded="24"
									>
										<Surface.Header
											p="12"
											align="start"
										>
											<Avatar>
												<Avatar.Image
													src="https://pbs.twimg.com/profile_images/1990437526134231040/GK9squrm_400x400.jpg"
													alt="sakamoto"
												/>
												<Avatar.Fallback>Sm</Avatar.Fallback>
											</Avatar>
										</Surface.Header>
										<Surface.Content px="12">
											<Surface.Title
												fontSize="14"
												lineHeight="1"
											>
												Sakamoto
											</Surface.Title>
											<Surface.Description
												mt="4"
												fontSize="14"
											>
												The creator of Moto UI, a design system and component
												library for building modern web applications.
											</Surface.Description>
										</Surface.Content>
										<Surface.Footer p="12">
											<Button
												asChild
												fullWidth
												rounded="full"
												variant="surface"
											>
												<Link
													target="_blank"
													to={"https://x.com/hey__sakamoto" as string}
												>
													Profile
													<Icon
														icon="tabler:arrow-right"
														width={16}
														height={16}
													/>
												</Link>
											</Button>
										</Surface.Footer>
									</Surface>
								</HoverCard.Content>
							</HoverCard.Positioner>
						</Portal>
					</HoverCard>
				</Stack>
			</Container>
		</Section>
	);
}
