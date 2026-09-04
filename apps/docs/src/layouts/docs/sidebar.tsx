import {
	ButtonGroup,
	ColorTheme,
	For,
	Icon,
	Separator,
	Sidebar,
	VisuallyHidden,
} from "@moto-ui/react";
import { Link } from "@tanstack/react-router";

import { SOCIAL_LINKS } from "./constants";
import { DocsLayoutPageTree } from "./page-tree";

export function DocsLayoutSidebar() {
	return (
		<Sidebar
			hideBelow="md"
			flexShrink="0"
			display="flex"
			position="sticky"
			direction="column"
			w="var(--sidebar-width)"
			h="var(--sidebar-height)"
			top="var(--navbar-height)"
			borderRight="1px solid {colors.stroke.primary}"
		>
			<DocsLayoutPageTree />
			<Separator orientation="horizontal" />
			<SidebarFooter />
		</Sidebar>
	);
}

function SidebarFooter() {
	return (
		<Sidebar.Addon p="12">
			<ButtonGroup
				size="sm"
				iconOnly
				variant="surface"
			>
				<For each={SOCIAL_LINKS}>
					{(link) => (
						<ButtonGroup.Item
							asChild
							key={link.id}
						>
							<Link
								target="_blank"
								to={link.url as any}
							>
								<VisuallyHidden>{link.label}</VisuallyHidden>
								<Icon
									width={16}
									height={16}
									icon={link.icon}
								/>
							</Link>
						</ButtonGroup.Item>
					)}
				</For>
				<Separator
					flexGrow="1"
					variant="ghost"
					orientation="horizontal"
				/>
				<ColorTheme.Trigger asChild>
					<ButtonGroup.Item>
						<VisuallyHidden>Toggle color scheme</VisuallyHidden>
						<ColorTheme.Indicator
							fallback={
								<Icon
									width={16}
									height={16}
									icon="tabler:sun"
								/>
							}
						>
							<Icon
								width={16}
								height={16}
								icon="tabler:moon"
							/>
						</ColorTheme.Indicator>
					</ButtonGroup.Item>
				</ColorTheme.Trigger>
			</ButtonGroup>
		</Sidebar.Addon>
	);
}
