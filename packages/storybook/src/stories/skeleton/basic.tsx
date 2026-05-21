import preview from "@.storybook/preview";
import { Skeleton, Stack } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: Skeleton,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The Skeleton component provides a visual cue that content is being loaded. It can be used to mimic the layout of the actual content, such as text, images, or cards.",
			},
		},
	},
	render: (args) => (
		<Stack
			gap="4"
			w="full"
			maxW="300px"
		>
			<Skeleton
				h="1.5rem"
				w="60%"
				{...args}
			/>
			<Skeleton
				h="1.5rem"
				w="40%"
				{...args}
			/>
		</Stack>
	),
});
