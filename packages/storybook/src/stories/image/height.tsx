import { Image } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Height",
	component: Image,
});

export const Height = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Control an image’s vertical size with either element attributes or CSS. Pair width and height to reserve space and avoid layout shifts.",
			},
		},
	},
	render: (args) => (
		<Image
			width="300"
			height="400px"
			h="400px"
			rounded="calc(24px - 8px)"
			src="https://images.pexels.com/photos/36798450/pexels-photo-36798450.jpeg?w=600h=600"
			alt="ducks-in-water"
			{...args}
		/>
	),
});
