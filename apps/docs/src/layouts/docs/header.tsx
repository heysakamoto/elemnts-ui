import {
	Button,
	ButtonGroup,
	For,
	Icon,
	Item,
	Menu,
	Portal,
	Section,
	Separator,
	Stack,
	Surface,
	VisuallyHidden,
} from "@moto-ui/react";

import { FRAMEWORKS } from "./constant";
import { DocsLayoutMobileNav } from "./mobile-nav";
import { DocsLayoutSearch } from "./search";
import { Sponsor } from "@/features/sponsor";

const selectedFramework = FRAMEWORKS.find(
	(framework) => framework.id === "react",
);

export function DocsLayoutHeader() {
	return (
		<Section
			top="0"
			as="header"
			zIndex="2"
			gridColumn="1/-1"
			position="sticky"
			colorPalette="neutral"
			backdropFilter="blur(16px)"
			bgColor="color-mix(in srgb, {colors.surface.1}, {colors.transparent} 90%)"
		>
			<Stack
				h="48"
				align="center"
				justify="space-between"
				px={{ base: "16", md: "20" }}
			>
				<Menu>
					<Menu.Trigger asChild>
						<Button
							fontSize="13"
							rounded="12"
							variant="surface"
						>
							{selectedFramework?.label}
							<Icon
								mr="-2"
								width={16}
								height={16}
								icon="tabler:chevron-down"
							/>
						</Button>
					</Menu.Trigger>
					<Portal>
						<Menu.Positioner>
							<Menu.Content asChild>
								<Surface
									p="4"
									rounded="20"
									w="10rem"
									colorPalette="neutral"
								>
									<For each={FRAMEWORKS}>
										{(framework) => (
											<Menu.Item
												key={framework.id}
												value={framework.id}
												disabled={framework.disabled}
												_disabled={{ opacity: 0.5 }}
											>
												<Item
													size="sm"
													rounded="16"
													fontSize="13"
													variant="secondary"
												>
													<Icon
														width={16}
														height={16}
														icon={framework.icon}
													/>
													{framework.label}
												</Item>
											</Menu.Item>
										)}
									</For>
								</Surface>
							</Menu.Content>
						</Menu.Positioner>
					</Portal>
				</Menu>
				<ButtonGroup variant="ghost">
					<DocsLayoutSearch.Trigger asChild>
						<Button
							iconOnly
							hideFrom="md"
							rounded="full"
							_notHover={{ color: "icon.secondary" }}
						>
							<VisuallyHidden>Search docs</VisuallyHidden>
							<Icon
								width={16}
								height={16}
								icon="tabler:search"
							/>
						</Button>
					</DocsLayoutSearch.Trigger>
					<DocsLayoutMobileNav>
						<ButtonGroup.Item iconOnly>
							<VisuallyHidden>Open sidebar</VisuallyHidden>
							<Icon
								width={16}
								height={16}
								hideFrom="md"
								icon="tabler:layout-sidebar-right"
								_notHover={{ color: "icon.secondary" }}
							/>
						</ButtonGroup.Item>
					</DocsLayoutMobileNav>
					<Sponsor>
						<Sponsor.Trigger asChild>
							<Button
								rounded="12"
								fontSize="13"
								variant="surface"
							>
								Sponsor
							</Button>
						</Sponsor.Trigger>
					</Sponsor>
				</ButtonGroup>
			</Stack>
			<Separator orientation="horizontal" />
		</Section>
	);
}
