import {
	Button,
	ButtonGroup,
	ColorScheme,
	Dialog,
	For,
	Icon,
	List,
	Separator,
	Show,
	Sidebar,
	Stack,
	VisuallyHidden,
} from "@moto-ui/react";
import { Link } from "@tanstack/react-router";

import { useDocsLayoutContext, useInDialogContext } from "./client";
import { socials, urls } from "./constant";
import { DocsLayoutTree } from "./tree";
import { Logo } from "@/components/base/logo";

export function DocsLayoutSidebar() {
	const isInDialog = useInDialogContext();
	const { setOpen } = useDocsLayoutContext();

	return (
		<Sidebar.Root
			h="full"
			display="flex"
			direction="column"
		>
			<Sidebar.Header>
				<Stack
					p="8"
					align="center"
					justify="space-between"
				>
					<Stack
						justify="space-between"
						flexGrow="1"
					>
						<Link
							to="/"
							preload="intent"
						>
							<Logo
								width={32}
								height={32}
								style={{ marginLeft: 8 }}
							/>
						</Link>
						<Show when={isInDialog}>
							<Dialog.CloseTrigger asChild>
								<Button
									iconOnly
									rounded="16"
									hideFrom="md"
								>
									<Icon
										width={16}
										height={16}
										icon="tabler:x"
									/>
								</Button>
							</Dialog.CloseTrigger>
						</Show>
					</Stack>
					<Button
						iconOnly
						size="sm"
						rounded="16"
						hideBelow="md"
						variant="ghost"
						onClick={() => setOpen(true)}
					>
						<Icon
							width={16}
							height={16}
							icon="tabler:search"
						/>
					</Button>
				</Stack>
			</Sidebar.Header>
			<Sidebar.Content
				pt="8"
				as="nav"
				flexGrow="1"
				overflow="scroll"
				scrollbar="hidden"
			>
				<DocsLayoutTree />
			</Sidebar.Content>
			<Sidebar.Footer py="8">
				<List gap="2">
					<For each={urls}>
						{(url) => (
							<List.Item
								key={url.id}
								px="8"
							>
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
				<ButtonGroup
					pt="8"
					px="8"
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
						flexGrow="1"
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
							<VisuallyHidden>Toggle color scheme</VisuallyHidden>
							<Icon
								width={16}
								height={16}
								icon="tabler:moon"
							/>
						</ColorScheme.Trigger>
					</Button>
				</ButtonGroup>
			</Sidebar.Footer>
		</Sidebar.Root>
	);
}
