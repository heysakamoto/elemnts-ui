import {
	Button,
	ButtonGroup,
	FloatingPanel,
	Portal,
	Surface,
} from "@moto-ui/react";
import * as StepsDemos from "../steps";

export function Basic() {
	return (
		<FloatingPanel>
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
								<StepsDemos.Basic />
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
	);
}
