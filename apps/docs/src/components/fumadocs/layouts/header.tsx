import {
	Box,
	Breadcrumb,
	Button,
	ButtonGroup,
	Icon,
	InputGroup,
	Kbd,
	Separator,
	Show,
	Stack,
} from "@moto-ui/react";

import { Link, useLocation } from "@tanstack/react-router";
import { useBreadcrumb } from "fumadocs-core/breadcrumb";
import { Fragment } from "react";
import { Logo } from "@/components/base/logo";
import { Sponsor } from "@/components/base/sponsor";
import { ThemeToggle } from "@/components/base/theme-toggle";
import { Navigation } from "../../base/navigation";
import { AIButtons } from "./ai";
import { useDocsLayoutContext } from "./client";
import { Search } from "./search";
import { Sidebar } from "./sidebar";

export function Header() {
	return (
		<Box>
			<Stack
				h="56"
				px="12"
				align="center"
				borderBottom="1px solid {colors.stroke.primary}"
			>
				<Stack
					w="full"
					gap="16"
					align="center"
				>
					<Logo />
					<Navigation />
				</Stack>
				<Stack
					w="full"
					justify="center"
				>
					<Search>
						<Search.Trigger asChild>
							<InputGroup
								size="lg"
								minW="14rem"
								maxW="20rem"
								rounded="20"
								hideBelow="xl"
								colorPalette="neutral"
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
						</Search.Trigger>
					</Search>
				</Stack>
				<Stack
					gap="0"
					w="full"
					justify="end"
					align="center"
				>
					<ThemeToggle />
					<Search>
						<Search.Trigger asChild>
							<Button
								iconOnly
								hideFrom="xl"
								rounded="full"
								variant="ghost"
								aria-label="search"
								colorPalette="neutral"
								_notHover={{ color: "icon.secondary" }}
							>
								<Icon
									width={16}
									height={16}
									icon="tabler:search"
								/>
							</Button>
						</Search.Trigger>
					</Search>
					<Navigation.Mobile>
						<Navigation.MobileTrigger asChild>
							<Button
								iconOnly
								hideFrom="lg"
								rounded="full"
								variant="ghost"
								aria-label="menu"
								colorPalette="neutral"
								_notHover={{ color: "icon.secondary" }}
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
			<Stack
				h="40"
				px="12"
				align="center"
				justify="space-between"
				borderBottom="1px solid {colors.stroke.primary}"
			>
				<HeaderBreadcrumb />
				<AIButtons>
					<AIButtons.CopyButton />
					<AIButtons.MenuOptions />
				</AIButtons>
			</Stack>
		</Box>
	);
}

function HeaderBreadcrumb() {
	const pathname = useLocation({ select: (s) => s.pathname });
	const {
		state: { pageTree },
	} = useDocsLayoutContext();

	const items = useBreadcrumb(pathname, pageTree, {
		includePage: true,
		includeRoot: true,
	});

	return (
		<Breadcrumb>
			<Breadcrumb.List>
				{items.map((item, idx) => {
					const key = `${idx}-${item.name}`;
					const last = idx === items.length - 1;

					if (idx === 0) return null;

					return (
						<Fragment key={key}>
							<Show
								when={!last}
								fallback={null}
							>
								<Breadcrumb.Item fontSize="13">
									<Breadcrumb.Link asChild>
										<Link to={item.url}>{item.name}</Link>
									</Breadcrumb.Link>
								</Breadcrumb.Item>
							</Show>
							<Show
								when={last}
								fallback={
									<Breadcrumb.Separator>
										<Icon
											width={14}
											height={14}
											icon="tabler:chevron-right"
										/>
									</Breadcrumb.Separator>
								}
							>
								<Breadcrumb.Item>
									<Breadcrumb.Link
										asChild
										hideBelow="md"
									>
										<Link to={item.url}>{item.name}</Link>
									</Breadcrumb.Link>
									<Breadcrumb.CurrentLink hideFrom="md">
										<Sidebar.Mobile>
											<Sidebar.MobileTrigger asChild>
												<Button
													asChild
													size="sm"
													fontSize="13"
													variant="tertiary"
													colorPalette="neutral"
												>
													<Link to={item.url}>
														{item.name}
														<Icon
															mx="-2"
															width={16}
															height={16}
															icon="tabler:chevron-down"
														/>
													</Link>
												</Button>
											</Sidebar.MobileTrigger>
										</Sidebar.Mobile>
									</Breadcrumb.CurrentLink>
								</Breadcrumb.Item>
							</Show>
						</Fragment>
					);
				})}
			</Breadcrumb.List>
		</Breadcrumb>
	);
}
