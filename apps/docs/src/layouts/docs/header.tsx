import {
	Button,
	ButtonGroup,
	Icon,
	InputGroup,
	Kbd,
	Section,
	Stack,
	Surface,
	VisuallyHidden,
} from "@moto-ui/react";
import { Link } from "@tanstack/react-router";

import { DocsLayoutBreadcrumb } from "./breadcrumb";
import { DocsLayoutSearch } from "./search";
import { Logo } from "@/components/base/logo";
import { Sponsor } from "@/components/base/sponsor";

export function DocsLayoutHeader() {
	return (
		<Section
			top="0"
			as="header"
			zIndex="2"
			gridColumn="1/-1"
			position="sticky"
			backdropFilter="blur(16px)"
			bgColor="color-mix(in srgb, {colors.surface.1}, {colors.transparent} 90%)"
		>
			<Stack
				h="56"
				px="16"
				align="center"
				colorPalette="neutral"
				borderBottom="1px solid {colors.stroke.primary}"
			>
				<Link to="/">
					<VisuallyHidden>Go to homepage</VisuallyHidden>
					<Logo.Brandmark
						width={36}
						height={36}
					/>
				</Link>
				<Stack
					flexGrow="1"
					justify="center"
				>
					<DocsLayoutSearch>
						<DocsLayoutSearch.Trigger asChild>
							<InputGroup
								size="lg"
								minW="12rem"
								maxW="28rem"
								rounded="16"
								hideBelow="xl"
							>
								<InputGroup.Addon pl="10">
									<Icon
										width={16}
										height={16}
										icon="tabler:search"
										color="icon.secondary"
									/>
								</InputGroup.Addon>
								<InputGroup.Input
									px="8"
									fontSize="14"
									placeholder="Search the docs"
								/>
								<InputGroup.Addon pr="8">
									<Kbd variant="secondary">
										<Kbd.Item>/</Kbd.Item>
									</Kbd>
								</InputGroup.Addon>
							</InputGroup>
						</DocsLayoutSearch.Trigger>
					</DocsLayoutSearch>
				</Stack>
				<ButtonGroup>
					<DocsLayoutSearch>
						<DocsLayoutSearch.Trigger asChild>
							<Button
								iconOnly
								hideFrom="xl"
								rounded="full"
								variant="ghost"
								aria-label="search"
								_notHover={{ color: "icon.secondary" }}
							>
								<Icon
									width={16}
									height={16}
									icon="tabler:search"
								/>
							</Button>
						</DocsLayoutSearch.Trigger>
					</DocsLayoutSearch>
					<Sponsor>
						<Sponsor.Trigger asChild>
							<Button rounded="14">Sponsor</Button>
						</Sponsor.Trigger>
					</Sponsor>
				</ButtonGroup>
			</Stack>
			<Surface
				w="full"
				top="55"
				left="0"
				delta={1}
				zIndex="2"
				rounded="0"
				hideFrom="md"
				position="fixed"
			>
				<Surface.Content
					h="48"
					px="16"
					justify="center"
				>
					<DocsLayoutBreadcrumb />
				</Surface.Content>
			</Surface>
		</Section>
	);
}
