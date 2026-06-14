import {
	Button,
	Icon,
	InputGroup,
	Kbd,
	Separator,
	Stack,
	Surface,
} from "@moto-ui/react";
import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/base/logo";
import { Sponsor } from "@/components/base/sponsor";
import { ThemeToggle } from "@/components/base/theme-toggle";
import { Navigation } from "../../base/navigation";
import { DocsLayoutBreadcrumb } from "./breadcrumb";
import { DocsLayoutSearch } from "./search";

function Root() {
	return (
		<Stack
			h="56"
			align="center"
			colorPalette="neutral"
			px={{ base: "12", xl: "0" }}
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
				<DocsLayoutSearch>
					<DocsLayoutSearch.Trigger asChild>
						<InputGroup
							size="lg"
							minW="12rem"
							maxW="20rem"
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
			<Stack
				w="full"
				justify="end"
				align="center"
			>
				<Button
					mr="4"
					asChild
					iconOnly
					size="md"
					rounded="24"
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
				<Navigation.Mobile>
					<Navigation.MobileTrigger asChild>
						<Button
							iconOnly
							hideFrom="lg"
							rounded="full"
							variant="ghost"
							aria-label="menu"
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
	);
}

function Sub() {
	return (
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
	);
}

export const DocsLayoutHeader = Object.assign(Root, {
	Sub,
});
