import preview from "@.storybook/preview";
import {
	Box,
	Button,
	ButtonGroup,
	FloatingPanel,
	Portal,
	Surface,
	Text,
} from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: FloatingPanel,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The FloatingPanel is a complex component designed for windows that users can interactively reposition and resize.",
			},
		},
	},
	render: (args) => (
		<FloatingPanel {...args}>
			<FloatingPanel.Trigger asChild>
				<Button
					rounded="24"
					variant="surface"
				>
					Open
				</Button>
			</FloatingPanel.Trigger>
			<Portal>
				<FloatingPanel.Positioner>
					<FloatingPanel.Content asChild>
						<Surface
							delta={1}
							rounded="32"
						>
							<FloatingPanel.Header
								py="8"
								px="10"
							>
								<FloatingPanel.Control>
									<ButtonGroup justify="space-between">
										<FloatingPanel.StageTrigger
											asChild
											stage="minimized"
										>
											<Button
												size="xs"
												variant="ghost"
												colorPalette="neutral"
											>
												Min.
											</Button>
										</FloatingPanel.StageTrigger>
										<FloatingPanel.StageTrigger
											asChild
											stage="maximized"
										>
											<Button
												size="xs"
												variant="ghost"
												colorPalette="neutral"
											>
												Max.
											</Button>
										</FloatingPanel.StageTrigger>
									</ButtonGroup>
								</FloatingPanel.Control>
							</FloatingPanel.Header>
							<FloatingPanel.Body
								px="8"
								pb="8"
							>
								<Box p="20">
									<Text>Floating Panel Content</Text>
								</Box>
							</FloatingPanel.Body>
							<FloatingPanel.ResizeTrigger axis="nw" />
							<FloatingPanel.ResizeTrigger axis="ne" />
							<FloatingPanel.ResizeTrigger axis="sw" />
							<FloatingPanel.ResizeTrigger axis="se" />
						</Surface>
					</FloatingPanel.Content>
				</FloatingPanel.Positioner>
			</Portal>
		</FloatingPanel>
	),
});
