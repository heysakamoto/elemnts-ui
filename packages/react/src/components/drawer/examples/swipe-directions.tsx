import {
	Button,
	Code,
	Container,
	Drawer,
	For,
	Portal,
	Show,
	Stack,
	Surface,
} from "@elemnts-ui/react";

const directions = ["up", "down", "start", "end"] as const;

export default function SwipeDirections() {
	return (
		<Container>
			<Stack justify="center" gap="8">
				<For each={directions}>
					{(direction) => (
						<Drawer swipeDirection={direction}>
							<Drawer.Trigger asChild>
								<Button size="sm" variant="surface" textTransform="capitalize">
									{direction}
								</Button>
							</Drawer.Trigger>
							<Portal>
								<Drawer.Backdrop />
								<Drawer.Positioner>
									<Drawer.Content asChild>
										<Surface delta={1} colorPalette="neutral">
											<Surface.Header>
												<Show when={direction === "down"}>
													<Drawer.Grabber>
														<Drawer.GrabberIndicator />
													</Drawer.Grabber>
												</Show>
											</Surface.Header>
											<Surface.Content
												p="16"
												mx="auto"
												flex="1"
												maxW="24rem"
												justify="center"
											>
												<Drawer.Title>Drawer swipe directions</Drawer.Title>
												<Drawer.Description fontSize="16">
													The drawer can be swiped in any direction. The
													direction is controlled by the{" "}
													<Code size="xs" variant="secondary">
														swipeDirection
													</Code>{" "}
													prop.
												</Drawer.Description>
											</Surface.Content>
											<Surface.Footer>
												<Show when={direction === "up"}>
													<Drawer.Grabber>
														<Drawer.GrabberIndicator />
													</Drawer.Grabber>
												</Show>
											</Surface.Footer>
										</Surface>
									</Drawer.Content>
								</Drawer.Positioner>
							</Portal>
						</Drawer>
					)}
				</For>
			</Stack>
		</Container>
	);
}
