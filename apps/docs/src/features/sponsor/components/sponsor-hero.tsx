import {
	Alert,
	Button,
	Chip,
	Container,
	For,
	Format,
	Grid,
	Icon,
	RadioGroup,
	Section,
	Show,
	Spinner,
	Tabs,
	Text,
	Tile,
} from "@moto-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { checkoutServerFn } from "@/server/checkout";
import { PRODUCTS } from "../constants";

export function SponsorHero() {
	const navigate = useNavigate();
	const checkout = useServerFn(checkoutServerFn);
	const { mutate, isPending, isError } = useMutation({
		mutationKey: ["checkout"],
		onSuccess: (data) => {
			navigate({ href: data.url });
		},
		mutationFn: ({ productId }: { productId: string }) =>
			checkout({ data: { productId } }),
	});

	const handleCheckout = (productId: string) => {
		mutate({ productId });
	};

	return (
		<Section pt={["3rem", "4rem"]}>
			<Container
				maxW="32rem"
				px="16"
			>
				<Text
					as="h1"
					textAlign="center"
					fontSize={[28, 32]}
					letterSpacing="-0.025em"
				>
					Sponsor this project
				</Text>
				<Text
					mt="8"
					textAlign="center"
				>
					Sponsors receive prominent homepage visibility, a dedicated mention in
					our readme.md and sponsors page, and priority, complimentary support
					directly from the team.
				</Text>
				<Tabs
					mt="32"
					size="sm"
					defaultValue={PRODUCTS[0]?.id}
				>
					<Tabs.List
						p="1"
						w="full"
						rounded="9"
						bgColor="neutral.secondary"
					>
						<Tabs.Indicator />
						<For each={PRODUCTS}>
							{(category) => (
								<Tabs.Trigger
									value={category.id}
									key={category.id}
								>
									<Icon
										icon={category.icon}
										width={16}
										height={16}
									/>
									{category.label}
								</Tabs.Trigger>
							)}
						</For>
					</Tabs.List>
					<For each={PRODUCTS}>
						{(category) => (
							<Tabs.Content
								key={category.id}
								value={category.id}
								mt="16"
							>
								<RadioGroup gap="32">
									<Grid
										gap="16"
										gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
									>
										<For each={category.children}>
											{(product) => (
												<RadioGroup.Item
													key={product.id}
													position="relative"
													value={product.polar.id}
												>
													<Show when={product.recommended}>
														<Chip
															h="20"
															top="-10"
															zIndex="1"
															left="50%"
															fontSize="12"
															lineHeight="16"
															position="absolute"
															colorPalette="accent"
															transform="translateX(-50%)"
														>
															Best value
														</Chip>
													</Show>
													<RadioGroup.ItemContext>
														{(ctx) => (
															<Tile
																gap="0"
																align="center"
																variant="secondary"
																orientation="vertical"
																selected={ctx.checked}
																shadow="2"
																borderColor="stroke.secondary"
															>
																<Tile.Title color="fg.secondary">
																	{product.label}
																</Tile.Title>
																<Tile.Title
																	mt="8"
																	fontSize={[18, 20]}
																>
																	{product.price} USD
																</Tile.Title>
																<Show
																	when={category.id === "recurring"}
																	fallback={
																		<Tile.Description
																			mt="8"
																			fontSize="14"
																		>
																			Pay{" "}
																			<Format.Number value={product.price} />{" "}
																			USD
																		</Tile.Description>
																	}
																>
																	<Tile.Description
																		mt="8"
																		fontSize="14"
																	>
																		<Format.Number value={product.price * 12} />{" "}
																		USD yearly
																	</Tile.Description>
																</Show>
															</Tile>
														)}
													</RadioGroup.ItemContext>
													<RadioGroup.ItemHiddenInput />
												</RadioGroup.Item>
											)}
										</For>
									</Grid>
									<RadioGroup.Context>
										{(ctx) => (
											<Button
												size="lg"
												fullWidth
												disabled={!ctx.value || isPending}
												onClick={() => {
													if (ctx.value) {
														handleCheckout(ctx.value);
													}
												}}
											>
												<Show when={isPending}>
													<Spinner size="sm" />
												</Show>
												Checkout
											</Button>
										)}
									</RadioGroup.Context>
								</RadioGroup>
							</Tabs.Content>
						)}
					</For>
					<Show when={isError}>
						<Alert
							status="destructive"
							mt="20"
							w="full"
						>
							<Alert.Title>Checkout failed. Please try again.</Alert.Title>
						</Alert>
					</Show>
				</Tabs>
			</Container>
		</Section>
	);
}
