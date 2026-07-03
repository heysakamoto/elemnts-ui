import { Container, ImageCropper } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Basic",
	component: ImageCropper,
});

export const Basic = meta.story({
	args: {
		aspectRatio: 16 / 9,
	},
	parameters: {
		docs: {
			description: {
				story:
					"The ImageCropper component is built using the compound component pattern, allowing for full control over the layout and styling of the cropping interface.",
			},
		},
	},
	render: (args) => {
		return (
			<Container maxW="24rem">
				<ImageCropper.Root {...args}>
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
	},
});
