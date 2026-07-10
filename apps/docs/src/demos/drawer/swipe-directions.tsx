import {
	Button,
	Code,
	Container,
	Drawer,
	Portal,
	SegmentGroup,
	Show,
	Stack,
	Surface,
} from "@moto-ui/react";
import { useState } from "react";

const swipeDirections = ["up", "down", "start", "end"] as const;

type SwipeDirection = (typeof swipeDirections)[number];

export function SwipeDirections() {
	const [value, setValue] = useState<SwipeDirection>("down");
	const isDirectionVertical = ["up", "down"].includes(value);

	return (
		<Container>
			<Stack
				direction="column"
				align="center"
				gap="16"
			>
				<SegmentGroup
					size="xs"
					value={value}
					fontFamily="mono"
					orientation="horizontal"
					onValueChange={(e) => {
						const value = e.value as SwipeDirection;
						setValue(value);
					}}
				>
					<SegmentGroup.Indicator />
					{swipeDirections.map((direction) => (
						<SegmentGroup.Item
							key={direction}
							value={direction}
						>
							<SegmentGroup.ItemText>{direction}</SegmentGroup.ItemText>
							<SegmentGroup.ItemHiddenInput />
						</SegmentGroup.Item>
					))}
				</SegmentGroup>
				<Drawer swipeDirection={value}>
					<Drawer.Trigger asChild>
						<Button
							size="sm"
							rounded={"24"}
							variant="surface"
							colorPalette="neutral"
						>
							Open
						</Button>
					</Drawer.Trigger>
					<Portal>
						<Drawer.Backdrop />
						<Drawer.Positioner>
							<Drawer.Content asChild>
								<Surface
									delta={1}
									colorPalette="neutral"
								>
									<Show when={value === "down"}>
										<Drawer.Grabber>
											<Drawer.GrabberIndicator />
										</Drawer.Grabber>
									</Show>
									<Surface.Content
										p="16"
										flexGrow="1"
										justify="center"
									>
										<Drawer.Title
											maxW="24rem"
											mx="auto"
											textAlign="center"
										>
											Drawer swipe directions
										</Drawer.Title>
										<Drawer.Description
											mx="auto"
											maxW="24rem"
											textAlign={isDirectionVertical ? "center" : "start"}
										>
											The drawer can be swiped in any direction. The direction
											is controlled by the{" "}
											<Code
												size="xs"
												fontSize="inherit"
												variant="secondary"
											>
												swipeDirection
											</Code>{" "}
											prop.
										</Drawer.Description>
									</Surface.Content>
									<Show when={value === "up"}>
										<Drawer.Grabber>
											<Drawer.GrabberIndicator />
										</Drawer.Grabber>
									</Show>
								</Surface>
							</Drawer.Content>
						</Drawer.Positioner>
					</Portal>
				</Drawer>
			</Stack>
		</Container>
	);
}
