import {
	ButtonGroup,
	Container,
	For,
	Section,
	Separator,
	Stack,
	VisuallyHidden,
} from "@moto-ui/react";
import { Link } from "@tanstack/react-router";

import { urls } from "./constants";
import { RootLayoutMobileNav } from "./mobile-nav";
import { Logo } from "@/components/base/logo";

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
					<Link to="/">
						<VisuallyHidden>Go to homepage</VisuallyHidden>
						<Logo.Wordmark
							width="96"
							height="96"
							style={{ marginLeft: -8 }}
						/>
					</Link>
					<Stack
						align="center"
						justify="end"
					>
						<RootLayoutMobileNav />
						<ButtonGroup
							gap="4"
							size="lg"
							hideBelow="lg"
							variant="ghost"
						>
							<For each={urls}>
								{(url) => (
									<ButtonGroup.Item
										asChild
										fontSize="13"
										key={url.id}
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
