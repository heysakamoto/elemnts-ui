import preview from "@.storybook/preview";
import { Container, Skeleton, Stack, Text } from "@moto-ui/react";

const meta = preview.meta({
	title: "Variants",
	component: Skeleton,
});

export const Variants = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The Skeleton supports two types of animations: pulse (default) and shimmer.",
			},
		},
	},
	render: (args) => (
		<Container maxW="20rem">
			<Stack
				gap="8"
				align="center"
				justify="center"
			>
				<Stack
					gap="2"
					direction="column"
				>
					<Text fontSize="12">Pulse</Text>
					<Skeleton
						w="5rem"
						h=".8rem"
						{...args}
						effect="pulse"
					/>
				</Stack>

				<Stack
					gap="2"
					direction="column"
				>
					<Text fontSize="12">Shimmer</Text>
					<Skeleton
						w="5rem"
						h=".8rem"
						{...args}
						effect="shimmer"
					/>
				</Stack>
			</Stack>
		</Container>
	),
});
