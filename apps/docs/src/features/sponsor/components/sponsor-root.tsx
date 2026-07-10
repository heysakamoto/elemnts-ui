import {
	Button,
	Dialog,
	For,
	Icon,
	Portal,
	Surface,
	Tile,
	ToggleGroup,
	VisuallyHidden,
} from "@moto-ui/react";
import { Link } from "@tanstack/react-router";
import { type PropsWithChildren, useState } from "react";

import { SponsorContext, useSponsor } from "./client";
import { SPONSOR_OPTIONS } from "../constants";

export function SponsorRoot(props: PropsWithChildren) {
	const { children } = props;
	const [value, setValue] = useState(["patreon"]);
	const ctx = useSponsor();

	return (
		<SponsorContext.Provider value={ctx}>
			{children}
			<Dialog
				modal
				size="sm"
				open={ctx.open}
				closeOnEscape={false}
				closeOnInteractOutside={false}
				placement={{ base: "bottom", md: "center" }}
				onOpenChange={(details) => ctx.setOpen(details.open)}
			>
				<Portal>
					<Dialog.Backdrop />
					<Dialog.Positioner>
						<Dialog.Content asChild>
							<Surface
								delta={1}
								rounded="24"
								colorPalette="neutral"
							>
								<Surface.Header
									px="16"
									py="16"
									align="center"
									direction="row"
									justify="space-between"
								>
									<Dialog.CloseTrigger asChild>
										<Button
											iconOnly
											rounded="full"
											flexShrink="0"
											variant="ghost"
										>
											<VisuallyHidden>Close sponsor dialog</VisuallyHidden>
											<Icon
												width={16}
												height={16}
												icon="tabler:x"
											/>
										</Button>
									</Dialog.CloseTrigger>
									<Surface.Title justify="center">
										Choose a Provider
									</Surface.Title>
									<Button
										iconOnly
										asChild
										rounded="full"
										flexShrink={0}
										variant="secondary"
									>
										<Link
											target="_blank"
											to={"https://x.com/hey__sakamoto" as any}
										>
											<VisuallyHidden>Creator social profile</VisuallyHidden>
											<Icon
												mr="-2"
												width={18}
												height={18}
												icon="tabler:link"
											/>
										</Link>
									</Button>
								</Surface.Header>
								<Surface.Content
									px="16"
									py="8"
								>
									<ToggleGroup
										gap="8"
										value={value}
										direction="column"
										onValueChange={({ value }) => setValue(value ?? [])}
									>
										<For each={SPONSOR_OPTIONS}>
											{(option) => {
												const selected = value.includes(option.id);

												return (
													<ToggleGroup.Item
														asChild
														w="full"
														key={option.id}
														value={option.id}
													>
														<Tile
															gap="12"
															rounded="16"
															align="start"
															variant="secondary"
															selected={selected}
															orientation="horizontal"
															disabled={option.disabled}
														>
															<Tile.Addon flexShrink="0">
																<Icon
																	width={24}
																	height={24}
																	icon={option.icon}
																/>
															</Tile.Addon>
															<Tile.Content>
																<Tile.Title>{option.label}</Tile.Title>
																<Tile.Description fontSize="14">
																	{option.description}
																</Tile.Description>
															</Tile.Content>
														</Tile>
													</ToggleGroup.Item>
												);
											}}
										</For>
									</ToggleGroup>
								</Surface.Content>
								<Surface.Footer p="12">
									<Dialog.CloseTrigger asChild>
										<Button
											asChild
											size="lg"
											fullWidth
											rounded="16"
											disabled={value.length === 0}
										>
											<Link
												target="_blank"
												to={SPONSOR_OPTIONS.find((o) => o.id === value[0])?.url}
											>
												Sponsor
											</Link>
										</Button>
									</Dialog.CloseTrigger>
								</Surface.Footer>
							</Surface>
						</Dialog.Content>
					</Dialog.Positioner>
				</Portal>
			</Dialog>
		</SponsorContext.Provider>
	);
}
