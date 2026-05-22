import {
	Anchor,
	Avatar,
	Button,
	ButtonGroup,
	Container,
	css,
	Grid,
	Group,
	HoverCard,
	Icon,
	Portal,
	Section,
	Stack,
	Surface,
	Text,
} from "@moto-ui/react";
import { Link } from "@tanstack/react-router";
import type { PropsWithChildren } from "react";
import { Logo } from "@//components/base/logo";
import { ComposedDialog } from "@/components/base/composed-dialog";
import { ThemeToggle } from "@/components/base/theme-toggle";

const pageTree = [
	{ name: "About", url: "/docs/about", target: "_self" },
	{ name: "Concepts", url: "/docs/animations", target: "_self" },
	{
		name: "Storybook",
		url: "https://storybook.moto-ui.app",
		target: "_blank",
	},
	{
		name: "Contributing",
		url: "https://github.com/heysakamoto/moto-ui?tab=contributing-ov-file",
		target: "_blank",
	},
	{
		name: "Sponsor",
		url: "https://opencollective.com/motoui",
		target: "_blank",
	},
];

export function Layout(props: PropsWithChildren) {
	return (
		<>
			<Header />
			{props.children}
			<Footer />
		</>
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
					<Grid
						h="64"
						px="20"
						alignContent="center"
						gridTemplateColumns={{
							base: "repeat(2, 1fr)",
							lg: "repeat(3, 1fr)",
						}}
					>
						<Group
							gap="2"
							hideBelow="lg"
						>
							{pageTree.map((item) => (
								<Link
									to={item.url}
									key={item.name}
									target={item.target}
									className={css({
										py: "8",
										px: "12",
										rounded: "24",
										fontSize: "13",
										color: "fg.secondary",
										_hover: { bgColor: "bg.secondary", color: "fg.primary" },
									})}
								>
									{item.name}
								</Link>
							))}
						</Group>
						<Stack
							align="center"
							justify={{ lg: "center" }}
						>
							<Logo />
						</Stack>
						<Group
							gap="8"
							justify="end"
						>
							<ThemeToggle />
							<MobileMenu />
							<Button
								asChild
								size="sm"
								rounded="24"
								fontSize="13"
								hideBelow="sm"
								variant="tertiary"
								colorPalette="neutral"
							>
								<Link to="/docs/$">Visit docs</Link>
							</Button>
						</Group>
					</Grid>
				</Surface>
			</Container>
		</Section>
	);
}

function MobileMenu() {
	return (
		<ComposedDialog
			fullHeight
			trigger={({ onOpen }) => {
				return (
					<Button
						iconOnly
						hideFrom="lg"
						rounded="full"
						variant="ghost"
						onClick={() => onOpen()}
						colorPalette="neutral"
						css={{
							"&:not(:hover)": {
								color: "icon.secondary",
							},
						}}
					>
						<Icon
							width={16}
							height={16}
							icon="tabler:layout-sidebar-right"
						/>
					</Button>
				);
			}}
			content={({ onClose }) => {
				return (
					<Surface.Content
						p="12"
						flex="1"
						justify="space-between"
					>
						<Surface.Addon
							direction="column"
							onClick={() => onClose()}
						>
							{pageTree.map((item) => (
								<Anchor
									py="16"
									asChild
									key={item.url}
									colorPalette="neutral"
									css={{
										"&:not(:hover)": {
											color: "fg.tertiary",
										},
									}}
									_hover={{
										"& svg": {
											opacity: 1,
											transform: "translateY(0px) translateX(0px)",
										},
									}}
								>
									<Link
										to={item.url}
										target={item.target}
									>
										{item.name}
										<Icon
											width={16}
											height={16}
											opacity={0}
											transformOrigin="right"
											icon="tabler:arrow-right"
											transform="translateX(20px)"
											transition="transform 200ms ease"
										/>
									</Link>
								</Anchor>
							))}
						</Surface.Addon>
						<ButtonGroup
							mt="32"
							attached
							fullWidth
							variant="tertiary"
						>
							<Button
								roundedStart="16"
								asChild
							>
								<Link
									to="/docs/$"
									params={{ _splat: "/" }}
								>
									Visit docs
								</Link>
							</Button>
							<Button
								roundedEnd="16"
								asChild
							>
								<Link
									target="_blank"
									to={"https://www.npmjs.com/package/@moto-ui/react" as any}
								>
									Npm
								</Link>
							</Button>
						</ButtonGroup>
					</Surface.Content>
				);
			}}
		/>
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
						<Text color="fg.secondary">
							Built by{" "}
							<HoverCard.Trigger asChild>
								<Anchor
									asChild
									fontSize="inherit"
									colorPalette="neutral"
								>
									<Link to=".">sakamoto</Link>
								</Anchor>
							</HoverCard.Trigger>
							.
						</Text>
						<Portal>
							<HoverCard.Positioner>
								<HoverCard.Content asChild>
									<Surface
										delta={1}
										rounded="24"
									>
										<Surface.Content
											p="8"
											gap="8"
											direction="row"
										>
											<Avatar>
												<Avatar.Image
													src="https://pbs.twimg.com/profile_images/1990437526134231040/GK9squrm_400x400.jpg"
													alt="sakamoto"
												/>
												<Avatar.Fallback>Sm</Avatar.Fallback>
											</Avatar>
											<Surface.Addon
												gap="2"
												pr="4"
											>
												<Surface.Title
													lineHeight="1"
													fontSize="14"
												>
													Sakamoto
												</Surface.Title>
												<Surface.Description
													fontSize="12"
													lineHeight="1"
												>
													@hey__sakamoto
												</Surface.Description>
											</Surface.Addon>
											<Button
												asChild
												iconOnly
												rounded="full"
												variant="surface"
											>
												<Link
													target="_blank"
													to={"https://x.com/hey__sakamoto" as string}
												>
													<Icon
														icon="tabler:arrow-right"
														width={16}
														height={16}
													/>
												</Link>
											</Button>
										</Surface.Content>
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
