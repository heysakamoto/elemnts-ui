import preview from "@.storybook/preview";
import { Container, ScrollShadow, Text } from "@moto-ui/react";

const meta = preview.meta({
	title: "Custom Size",
	component: ScrollShadow,
});

export const CustomSize = meta.story({
	args: {
		size: 120,
	},
	parameters: {
		docs: {
			description: {
				story: "Adjust the shadow size by setting the `size` prop.",
			},
		},
	},
	render: (args) => (
		<Container maxW="20rem">
			<ScrollShadow
				h="18rem"
				{...args}
			>
				<Text fontSize="14">
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
