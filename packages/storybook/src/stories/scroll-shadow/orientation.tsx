import { Container, ScrollShadow, Text } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Orientation",
	component: ScrollShadow,
});

export const Orientation = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"To see the shadows, make the content overflow the `ScrollShadow` component vertically or horizontally.",
			},
		},
	},
	render: (args) => (
		<Container maxW="20rem">
			<ScrollShadow
				h="18rem"
				{...args}
			>
				<Text
					fontSize="14"
					w="24rem"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
					pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
					hendrerit risus, sed porttitor quam. Morbi accumsan cursus enim, sed
					ultricies sapien. Lorem ipsum dolor sit amet, consectetur adipiscing
					elit. Nullam pulvinar risus non risus hendrerit venenatis.
					<br />
					<br />
					Pellentesque sit amet hendrerit risus, sed porttitor quam. Morbi
					accumsan cursus enim, sed ultricies sapien. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Nullam pulvinar risus non risus
					hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed
					porttitor quam. Morbi accumsan cursus enim, sed ultricies sapien.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
					pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
					hendrerit risus, sed porttitor quam. Morbi accumsan cursus enim, sed
					ultricies sapien. Lorem ipsum dolor sit amet, consectetur adipiscing
					elit. Nullam pulvinar risus non risus hendrerit venenatis.
					<br />
					<br />
					Pellentesque sit amet hendrerit risus, sed porttitor quam. Morbi
					accumsan cursus enim, sed ultricies sapien. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Nullam pulvinar risus non risus
					hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed
					porttitor quam. Morbi accumsan cursus enim, sed ultricies sapien.
					<br />
					<br />
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
					pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
					hendrerit risus, sed porttitor quam. Morbi accumsan cursus enim, sed
					ultricies sapien. Lorem ipsum dolor sit amet, consectetur adipiscing
					elit. Nullam pulvinar risus non risus hendrerit venenatis.
					<br />
					<br />
					Pellentesque sit amet hendrerit risus, sed porttitor quam. Morbi
					accumsan cursus enim, sed ultricies sapien. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Nullam pulvinar risus non risus
					hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed
					porttitor quam. Morbi accumsan cursus enim, sed ultricies sapien.
					<br />
					<br />
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
					pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
					hendrerit risus, sed porttitor quam. Morbi accumsan cursus enim, sed
					ultricies sapien.
				</Text>
			</ScrollShadow>
		</Container>
	),
});
