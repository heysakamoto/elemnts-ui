import {
	Button,
	ButtonGroup,
	Container,
	Icon,
	ImageCropper,
} from "@elemnts-ui/react";

export default function Controls() {
	return (
		<Container maxW="28rem">
			<ImageCropper.Root aspectRatio={1}>
				<ImageCropper.Viewport>
					<ImageCropper.Image
						h="20rem"
						src="https://images.pexels.com/photos/32796102/pexels-photo-32796102.jpeg?w=800&h=800"
					/>
					<ImageCropper.Selection>
						{ImageCropper.handles.map((position) => (
							<ImageCropper.Handle key={position} position={position}>
								<div />
							</ImageCropper.Handle>
						))}
						<ImageCropper.Grid axis="horizontal" />
						<ImageCropper.Grid axis="vertical" />
					</ImageCropper.Selection>
				</ImageCropper.Viewport>
				<ImageCropper.Context>
					{(api) => (
						<ButtonGroup size="sm" fullWidth variant="secondary">
							<Button onClick={() => api.reset()}>
								<Icon icon="tabler:history" width={16} height={16} />
							</Button>
							<Button onClick={() => api.rotateBy(-90)}>
								<Icon icon="tabler:rotate" width={16} height={16} />
							</Button>
							<Button onClick={() => api.rotateBy(90)}>
								<Icon icon="tabler:rotate-clockwise" width={16} height={16} />
							</Button>
							<Button onClick={() => api.zoomBy(-0.1)}>
								<Icon icon="tabler:zoom-out" width={16} height={16} />
							</Button>
							<Button onClick={() => api.zoomBy(0.1)}>
								<Icon icon="tabler:zoom-in" width={16} height={16} />
							</Button>
						</ButtonGroup>
					)}
				</ImageCropper.Context>
			</ImageCropper.Root>
		</Container>
	);
}
