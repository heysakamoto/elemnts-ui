import { ButtonGroup, Container, For, Section, Stack } from "@moto-ui/react";
import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/base/logo";
import { ROOTLAYOUT_URLS } from "./constants";
import { RootLayoutMobileNav } from "./mobile-nav";

export function RootLayoutHeader() {
	return (
		<Section
			top="0"
			zIndex="2"
			as="header"
			position="sticky"
			colorPalette="neutral"
			backdropFilter="blur(20px)"
			borderBottom="1px solid {colors.stroke.primary}"
			bgColor="color-mix(in oklab, {colors.surface-1}, 90% {colors.transparent})"
		>
			<Container
				maxW="40rem"
				px="16"
			>
				<Stack
					h="var(--navbar-height)"
					align="center"
					justify="space-between"
				>
					<Logo />
					<Stack
						align="center"
						justify="end"
					>
						<RootLayoutMobileNav />
						<ButtonGroup
							hideBelow="md"
							variant="ghost"
						>
							<For each={ROOTLAYOUT_URLS}>
								{(url) => (
									<ButtonGroup.Item
										asChild
										key={url.id}
										fontWeight="500"
										css={{
											"&:not(:hover)": {
												color: "fg.secondary",
											},
										}}
									>
										<Link to={url.url}>{url.label}</Link>
									</ButtonGroup.Item>
								)}
							</For>
						</ButtonGroup>
					</Stack>
				</Stack>
			</Container>
		</Section>
	);
}
