import {
	Button,
	ButtonGroup,
	ColorScheme,
	Dialog,
	For,
	Icon,
	List,
	Portal,
	Separator,
	Surface,
	VisuallyHidden,
} from "@moto-ui/react";
import { Link } from "@tanstack/react-router";

import { InDialogContextProvider } from "./client";
import { socials, urls } from "./constant";
import { DocsLayoutTree } from "./tree";

type DocsLayoutMobileNavProps = {
	children?: React.ReactNode;
};

export function DocsLayoutMobileNav(props: DocsLayoutMobileNavProps) {
	const { children } = props;

	return (
		<InDialogContextProvider value={true}>
			<Dialog
				modal
				size="cover"
			>
				<Dialog.Trigger asChild>{children}</Dialog.Trigger>
				<Portal>
					<Dialog.Backdrop />
					<Dialog.Positioner pt="48">
						<Dialog.Content asChild>
							<Surface
								delta={1}
								rounded="24"
								colorPalette="neutral"
							>
								<Surface.Header
									p="12"
									w="full"
									direction="column"
								>
									<List
										gap="2"
										w="full"
									>
										<For each={urls}>
											{(url) => (
												<List.Item key={url.id}>
													<Button
														asChild
														fullWidth
														justify="start"
														variant="ghost"
														disabled={url.disabled}
														data-disabled={url.disabled ? "" : undefined}
													>
														<Link
															to={url.url}
															target="_blank"
														>
															{url.label}
															<Separator
																flex="1"
																variant="ghost"
																orientation="horizontal"
															/>
															<Icon
																width={16}
																height={16}
																icon="tabler:external-link"
															/>
														</Link>
													</Button>
												</List.Item>
											)}
										</For>
									</List>
								</Surface.Header>
								<Separator orientation="horizontal" />
								<Surface.Content
									p="12"
									overflow="auto"
								>
									<DocsLayoutTree />
								</Surface.Content>
								<Separator orientation="horizontal" />
								<Surface.Footer
									px="20"
									py="12"
								>
									<ButtonGroup
										gap="8"
										iconOnly
										variant="ghost"
									>
										<For each={socials}>
											{(social) => (
												<Button
													asChild
													key={social.id}
												>
													<Link
														to={social.url}
														target="_blank"
													>
														<VisuallyHidden>{social.label}</VisuallyHidden>
														<Icon
															width={16}
															height={16}
															icon={social.icon}
														/>
													</Link>
												</Button>
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
												<VisuallyHidden>Toggle color scheme</VisuallyHidden>
												<Icon
													width={16}
													height={16}
													icon="tabler:moon"
												/>
											</ColorScheme.Trigger>
										</Button>
									</ButtonGroup>
								</Surface.Footer>
							</Surface>
						</Dialog.Content>
					</Dialog.Positioner>
				</Portal>
			</Dialog>
		</InDialogContextProvider>
	);
}
