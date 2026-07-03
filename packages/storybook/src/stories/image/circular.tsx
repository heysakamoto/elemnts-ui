import { Image } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Circular",
	component: Image,
});

export const Circular = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					'Make an image appear circular by applying a 50% border-radius (or a "rounded-full" utility).',
			},
		},
	},
	render: (args) => (
		<Image
			boxSize="56"
			rounded="full"
			src="https://images.pexels.com/photos/14862044/pexels-photo-14862044.jpeg?w=300=300"
			alt="ducks-in-water"
			{...args}
		/>
	),
});
