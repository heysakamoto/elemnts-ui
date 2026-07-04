import {
	Button,
	ButtonGroup,
	ColorScheme,
	For,
	Icon,
	List,
	Section,
	Separator,
	Sidebar,
	VisuallyHidden,
} from "@moto-ui/react";
import { Link } from "@tanstack/react-router";

import { socials, urls } from "./constant";
import { DocsLayoutTree } from "./tree";

export function DocsLayoutSidebar() {
	return (
		<Sidebar.Root
			top="56px"
			as="aside"
			display="flex"
			hideBelow="md"
			position="sticky"
			direction="column"
			h="calc(100dvh - 56px)"
			borderRight="1px solid {colors.stroke.primary}"
		>
			<Sidebar.Header>
				<List
					gap="2"
					p="12"
				>
					<For each={urls}>
						{(url) => (
							<List.Item key={url.id}>
								<Button
									asChild
									size="sm"
									fullWidth
									fontSize="13"
									variant="ghost"
									justify="space-between"
									data-disabled={url.disabled ? "" : undefined}
									css={{
										_icon: {
											color: "icon.secondary",
											_disabled: { bgColor: "red" },
										},
									}}
								>
									<Link
										key={url.id}
										to={url.url}
										target="_blank"
									>
										{url.label}
										<Icon
											width={14}
											height={14}
											icon="tabler:arrow-up-right"
										/>
									</Link>
								</Button>
							</List.Item>
						)}
					</For>
				</List>
			</Sidebar.Header>
			<Separator orientation="horizontal" />
			<Sidebar.Content
				as="nav"
				p="12"
				flexGrow="1"
				overflow="scroll"
				scrollbar="hidden"
			>
				<DocsLayoutTree />
			</Sidebar.Content>
			<Separator orientation="horizontal" />
			<Sidebar.Footer>
				<Section
					py="4"
					px="12"
					rounded="0"
				>
					<ButtonGroup
						size="md"
						iconOnly
						variant="ghost"
					>
						<For each={socials}>
							{(social) => (
								<ButtonGroup.Item
									asChild
									rounded="12"
									key={social.id}
								>
									<Link
										target="_blank"
										to={social.url as any}
									>
										<VisuallyHidden>{social.label}</VisuallyHidden>
										<Icon
											width={16}
											height={16}
											icon={social.icon}
										/>
									</Link>
								</ButtonGroup.Item>
							)}
						</For>
						<Separator
							flex="1"
							variant="ghost"
							orientation="horizontal"
						/>
						<Button
							asChild
							rounded="12"
						>
							<ColorScheme.Trigger
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
							</ColorScheme.Trigger>
						</Button>
					</ButtonGroup>
				</Section>
			</Sidebar.Footer>
		</Sidebar.Root>
	);
}
