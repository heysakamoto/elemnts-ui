import { Box, Button, css, Icon, Stack, Text } from "@moto-ui/react";
import { Link, useLocation } from "@tanstack/react-router";
import { useBreadcrumb } from "fumadocs-core/breadcrumb";
import { Fragment } from "react";
import { ComposedDialog } from "@/components/base/composed-dialog";
import { ComposedTooltip } from "@/components/base/composed-tooltip";
import { Logo } from "@/components/base/logo";
import { ThemeToggle } from "@/components/base/theme-toggle";
import { useDocsLayoutContext } from "./client";
import { Search } from "./search";
import { Sidebar } from "./sidebar";

export const links = [
	{
		url: "/docs/about",
		label: "About",
		target: "_self",
	},
	{
		url: "/docs/animations",
		label: "Concepts",
		target: "_self",
	},
	{
		url: "https://storybook.moto-ui.app",
		label: "Storybook",
		target: "_blank",
	},
	{
		url: "https://github.com/heysakamoto/moto-ui?tab=contributing-ov-file",
		label: "Contribute",
		target: "_blank",
	},
	{
		url: "https://opencollective.com/motoui",
		label: "Sponsor",
		target: "_blank",
	},
];

type HeaderLinkProps = {
	label: React.ReactNode;
	url: string;
	target: string;
};

export function HeaderLink({ label, url, target }: HeaderLinkProps) {
	return (
		<Link
			to={url}
			target={target}
			className={css({
				py: "8",
				px: "12",
				fontSize: "13",
				rounded: "full",
				align: "center",
				lineHeight: "none",
				color: "fg.tertiary",
				display: "inline-flex",
				_hover: {
					color: "fg.primary",
					bgColor: "bg.secondary",
				},
			})}
		>
			{label}
		</Link>
	);
}

export function HeaderBreadcrumb() {
	const pathname = useLocation({ select: (s) => s.pathname });
	const {
		state: { pageTree },
	} = useDocsLayoutContext();

	const items = useBreadcrumb(pathname, pageTree, {
		includePage: true,
		includeRoot: true,
	});

	return (
		<Stack align="center">
			{items.map((item, idx) => {
				const isLast = idx === items.length - 1;
				const key = `${idx}-${item.name}`;

				if (idx === 0) return null;

				return (
					<Fragment key={key}>
						<Text
							asChild
							fontSize="12"
							lineHeight="1"
							fontWeight="400"
							color="fg.tertiary"
						>
							{item.name}
						</Text>
						{!isLast && (
							<Icon
								mx="6"
								width={6}
								height={6}
								color="icon.tertiary"
								icon="tabler:circle-filled"
							/>
						)}
					</Fragment>
				);
			})}
		</Stack>
	);
}

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
					gap="4"
					w="full"
					direction="row"
					hideBelow="md"
				>
					{links.map((link) => (
						<HeaderLink
							url={link.url}
							key={link.label}
							label={link.label}
							target={link.target}
						/>
					))}
				</Stack>
				<Stack
					w="full"
					align="center"
					justify={{ md: "center" }}
				>
					<Logo />
				</Stack>
				<Stack
					mr="-4"
					gap="4"
					w="full"
					justify="end"
				>
					<ThemeToggle />
					<Search>
						{(ctx) => {
							return (
								<ComposedTooltip
									content="Search"
									trigger={
										<Button
											iconOnly
											rounded="full"
											variant="ghost"
											colorPalette="neutral"
											onClick={() => ctx.onOpen()}
											_notHover={{ color: "icon.secondary" }}
										>
											<Icon
												icon="tabler:search"
												width={16}
												height={16}
											/>
										</Button>
									}
								/>
							);
						}}
					</Search>
					<ComposedDialog
						content={
							<Stack
								gap="8"
								direction="column"
							>
								{links.map((link) => (
									<HeaderLink
										key={link.url}
										url={link.url}
										label={link.label}
										target={link.target}
									/>
								))}
							</Stack>
						}
						trigger={(ctx) => {
							return (
								<ComposedTooltip
									content="Open menu"
									trigger={
										<Button
											iconOnly
											hideFrom="md"
											rounded="full"
											variant="ghost"
											colorPalette="neutral"
											onClick={() => ctx.onOpen()}
											_notHover={{ color: "icon.secondary" }}
										>
											<Icon
												width={18}
												height={18}
												icon="tabler:layout-sidebar-right"
											/>
										</Button>
									}
								/>
							);
						}}
					/>
				</Stack>
			</Stack>
			<ComposedDialog
				fullHeight
				content={({ onClose }) => {
					return (
						<Stack
							direction="column"
							onClick={() => onClose()}
						>
							<Sidebar />
						</Stack>
					);
				}}
				trigger={(ctx) => {
					return (
						<Stack
							h="36"
							px="12"
							gap="8"
							align="center"
							justify="start"
							cursor="pointer"
							gridColumn="1 / -1"
							onClick={ctx.onOpen}
							colorPalette="neutral"
							pointerEvents={{ base: "auto", md: "none" }}
							borderBottom="1px solid {colors.stroke.primary}"
						>
							<Icon
								width={16}
								height={16}
								color="icon.secondary"
								icon="tabler:layout-sidebar"
							/>
							<HeaderBreadcrumb />
						</Stack>
					);
				}}
			/>
		</Box>
	);
}
