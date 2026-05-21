import { Container, ImageCropper } from "@moto-ui/react";

export const Basic = () => {
	return (
		<Container maxW="24rem">
			<ImageCropper.Root aspectRatio={16 / 9}>
				<ImageCropper.Viewport>
					<ImageCropper.Image src="https://images.pexels.com/photos/32796102/pexels-photo-32796102.jpeg?w=800&h=800" />
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
			</ImageCropper.Root>
		</Container>
	);
};
