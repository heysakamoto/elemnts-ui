import {
	Button,
	Container,
	Group,
	Icon,
	Item,
	Kbd,
	KbdGroup,
	Section,
	Stack,
	VisuallyHidden,
} from "@elemnts-ui/react";
import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/base/logo";
import {
	useDocsLayoutCommandMenuContext,
	useDocsLayoutMobileMenuContext,
} from "./client";
import { NAVIGATION_LINKS } from "./constants";

export function DocsLayoutHeader() {
	const commandMenu = useDocsLayoutCommandMenuContext();
	const mobileMenu = useDocsLayoutMobileMenuContext();

	return (
		<Section
			top="0"
			zIndex="2"
			as="header"
			position="sticky"
			backdropFilter="blur(16px)"
			borderBottom="1px solid {colors.stroke.primary}"
		>
			<Container px="16" maxW="var(--docs-width)">
				<Stack
					align="center"
					justify="space-between"
					h="var(--navbar-height)"
					gap={{ base: "12", md: "20", lg: "48" }}
				>
					<Logo />

					<Group gap="12" hideBelow="md">
						{NAVIGATION_LINKS.map((link) => (
							<Item
								asChild
								key={link.id}
								variant="secondary"
								fontWeight="medium"
								css={{ "&:not(:hover)": { color: "fg.secondary" } }}
							>
								<Link to={link.url} target={link.target}>
									{link.label}
								</Link>
							</Item>
						))}
					</Group>

					<Group flex="1" justify="end" gap={{ base: "8", lg: "16" }}>
						<Button
							size="sm"
							iconOnly
							hideFrom="md"
							variant="surface"
							onClick={() => mobileMenu.setOpen(true)}
						>
							<VisuallyHidden>Menu</VisuallyHidden>
							<Icon icon="tabler:menu" width="16" height="16" />
						</Button>
						<Button
							size="sm"
							iconOnly
							hideFrom="sm"
							variant="surface"
							onClick={() => commandMenu.setOpen(true)}
						>
							<VisuallyHidden>Search</VisuallyHidden>
							<Icon icon="tabler:search" width="16" height="16" />
						</Button>
						<Button
							hideBelow="sm"
							variant="surface"
							onClick={() => commandMenu.setOpen(true)}
						>
							<Icon ml="-2" icon="tabler:search" width="16" height="16" />
							Search
							<KbdGroup ml="12" mr="-4" gap="4">
								<Kbd size="2xs" iconOnly variant="surface">
									⌘
								</Kbd>
								<Kbd size="2xs" iconOnly variant="surface">
									K
								</Kbd>
							</KbdGroup>
						</Button>
						<Button asChild fontWeight="medium">
							<Link to="/sponsor">Sponsor</Link>
						</Button>
					</Group>
				</Stack>
			</Container>
		</Section>
	);
}
