import { AspectRatio, Image } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Basic",
	component: AspectRatio,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The `AspectRatio` component offers a simple way to maintain a specific aspect ratio for your content.",
			},
		},
	},
	render: (args) => (
		<AspectRatio
			{...args}
			w="20rem"
			rounded="24"
		>
			<Image
				src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
				alt="Landscape photograph"
			/>
		</AspectRatio>
	),
});
