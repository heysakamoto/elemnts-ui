import preview from "@.storybook/preview";
import { Image } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: Image,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the Image component to display pictures in your UI while keeping them accessible and performant. See the basic example above.",
			},
		},
	},
	render: (args) => (
		<Image
			width="300"
			height="240"
			rounded="calc(24px - 8px)"
			src="https://images.pexels.com/photos/36838200/pexels-photo-36838200.jpeg?w=600h=600"
			alt="farmer-watering-plant"
			{...args}
		/>
	),
});
