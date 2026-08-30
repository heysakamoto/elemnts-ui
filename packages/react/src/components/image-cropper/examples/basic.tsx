import { Container, ImageCropper } from "@moto-ui/react";

export default function Basic() {
	return (
		<Container maxW="28rem">
			<ImageCropper.Root aspectRatio={16 / 9}>
				<ImageCropper.Viewport>
					<ImageCropper.Image
						h="20rem"
						src="https://images.pexels.com/photos/32796102/pexels-photo-32796102.jpeg?w=800&h=800"
					/>
					<ImageCropper.Selection>
						{ImageCropper.handles.map((position) => (
							<ImageCropper.Handle
								key={position}
								position={position}
							/>
						))}
						<ImageCropper.Grid axis="horizontal" />
						<ImageCropper.Grid axis="vertical" />
					</ImageCropper.Selection>
				</ImageCropper.Viewport>
			</ImageCropper.Root>
		</Container>
	);
}
