import {
	Avatar,
	Box,
	Button,
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
		<Box bgColor={{ base: "surface.7", _dark: "surface.1" }}>
			<Container maxW="88rem">
				<Header />
				{props.children}
				<Footer />
			</Container>
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
			colorPalette="neutral"
			borderBottom="1px solid {colors.stroke.primary}"
			bgColor={{ base: "surface.7", _dark: "surface.1" }}
		>
			<Stack
				h="64"
				px="20"
				align="center"
				justify="space-between"
			>
				<Logo />
				<Navigation />
				<Stack
					align="center"
					justify="end"
				>
					<Button
						mr="4"
						iconOnly
						size="md"
						rounded="20"
						hideBelow="lg"
						variant="ghost"
						aria-label="github"
						css={{ "&:not(:hover)": { color: "icon.secondary" } }}
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
					</Button>
					<ThemeToggle />
					<Navigation.Mobile>
						<Navigation.MobileTrigger asChild>
							<Button
								iconOnly
								size="sm"
								hideFrom="lg"
								rounded="full"
								variant="ghost"
								aria-label="open menu"
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
						hideBelow="lg"
						orientation="vertical"
					/>
					<Sponsor>
						<Sponsor.Trigger asChild>
							<Button
								rounded="20"
								hideBelow="lg"
							>
								<Icon
									ml="-2"
									width={16}
									height={16}
									icon="tabler:heart"
								/>
								Sponsor
							</Button>
						</Sponsor.Trigger>
					</Sponsor>
				</Stack>
			</Stack>
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
								color="fg.primary"
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
