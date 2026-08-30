import {
	ButtonGroup,
	Container,
	For,
	Section,
	Separator,
	Stack,
} from "@moto-ui/react";
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
			backdropFilter="blur(12px)"
			bgColor="color-mix(in oklab, {colors.surface-1}, 50% {colors.transparent})"
		>
			<Container maxW="40rem">
				<Stack
					h="64"
					px="20"
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
										<Link
											to={url.url}
											target="_blank"
										>
											{url.label}
										</Link>
									</ButtonGroup.Item>
								)}
							</For>
						</ButtonGroup>
					</Stack>
				</Stack>
			</Container>
			<Separator
				variant="tertiary"
				orientation="horizontal"
			/>
		</Section>
	);
}
