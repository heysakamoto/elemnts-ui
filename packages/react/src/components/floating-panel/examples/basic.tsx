import { Button, FloatingPanel, Icon, Portal, Surface } from "@moto-ui/react";

import StepsBasic from "../../steps/examples/basic";

export default function Basic() {
	return (
		<FloatingPanel>
			<FloatingPanel.Trigger asChild>
				<Button
					size="sm"
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
							rounded="24"
							colorPalette="neutral"
						>
							<FloatingPanel.Header
								py="8"
								px="10"
							>
								<FloatingPanel.DragTrigger>
									<FloatingPanel.Title>Work information</FloatingPanel.Title>
									<FloatingPanel.Control justify="end">
										<FloatingPanel.StageTrigger
											asChild
											stage="maximized"
										>
											<Button
												iconOnly
												size="2xs"
												variant="ghost"
											>
												<Icon
													icon="tabler:maximize"
													width={14}
													height={14}
												/>
											</Button>
										</FloatingPanel.StageTrigger>
										<FloatingPanel.StageTrigger
											stage="default"
											asChild
										>
											<Button
												iconOnly
												variant="ghost"
												size="2xs"
											>
												<Icon
													icon="tabler:minimize"
													width={14}
													height={14}
												/>
											</Button>
										</FloatingPanel.StageTrigger>
									</FloatingPanel.Control>
								</FloatingPanel.DragTrigger>
							</FloatingPanel.Header>
							<FloatingPanel.Body
								px="8"
								pb="8"
							>
								<StepsBasic />
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
