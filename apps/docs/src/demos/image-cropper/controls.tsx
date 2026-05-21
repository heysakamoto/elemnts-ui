import { Button, Container, Group, Icon, ImageCropper } from "@moto-ui/react";

export const Controls = () => {
	return (
		<Container maxW="24rem">
			<ImageCropper.Root aspectRatio={1}>
				<ImageCropper.Viewport>
					<ImageCropper.Image src="https://images.pexels.com/photos/37268294/pexels-photo-37268294.jpeg?w=800&h=800" />
					<ImageCropper.Selection>
						{ImageCropper.handles.map((position) => (
							<ImageCropper.Handle
								key={position}
								position={position}
							>
								<div />
							</ImageCropper.Handle>
						))}
						<ImageCropper.Grid axis="horizontal" />
						<ImageCropper.Grid axis="vertical" />
					</ImageCropper.Selection>
				</ImageCropper.Viewport>
				<ImageCropper.Context>
					{(api) => (
						<Group
							gap="4"
							justify="center"
						>
							<Group attached>
								<Button
									size="sm"
									roundedStart="24"
									variant="secondary"
									onClick={() => api.rotateBy(-90)}
								>
									<Icon
										icon="tabler:rotate-2"
										width={16}
										height={16}
									/>
								</Button>
								<Button
									size="sm"
									roundedEnd="24"
									variant="secondary"
									onClick={() => api.rotateBy(90)}
								>
									<Icon
										icon="tabler:rotate"
										width={16}
										height={16}
									/>
								</Button>
							</Group>
							<Group attached>
								<Button
									size="sm"
									roundedStart="24"
									variant="secondary"
									onClick={() => api.zoomBy(-0.1)}
								>
									<Icon
										icon="tabler:zoom-out"
										width={16}
										height={16}
									/>
								</Button>
								<Button
									size="sm"
									roundedEnd="24"
									variant="secondary"
									onClick={() => api.zoomBy(0.1)}
								>
									<Icon
										icon="tabler:zoom-in"
										width={16}
										height={16}
									/>
								</Button>
							</Group>
							<Button
								size="sm"
								rounded="24"
								variant="secondary"
								onClick={() => api.reset()}
							>
								<Icon
									icon="tabler:refresh"
									width={16}
									height={16}
								/>
							</Button>
						</Group>
					)}
				</ImageCropper.Context>
			</ImageCropper.Root>
		</Container>
	);
};
