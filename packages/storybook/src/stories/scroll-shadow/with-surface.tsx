import preview from "@.storybook/preview";
import {
	Container,
	DecorativeBox,
	ScrollShadow,
	Stack,
	Surface,
} from "@moto-ui/react";

const meta = preview.meta({
	title: "With Surface",
	component: ScrollShadow,
});

export const WithSurface = meta.story({
	parameters: {
		docs: {
			description: {
				story: "Use `ScrollShadow` with the `Surface` component.",
			},
		},
	},
	render: (args) => (
		<Container maxW="20rem">
			<Surface
				p="16"
				delta={1}
				rounded="24"
			>
				<ScrollShadow {...args}>
					<Stack
						gap="8"
						w="max-content"
					>
						<DecorativeBox
							w="12rem"
							h="4rem"
						/>
						<DecorativeBox
							w="12rem"
							h="4rem"
						/>
						<DecorativeBox
							w="12rem"
							h="4rem"
						/>
						<DecorativeBox
							w="12rem"
							h="4rem"
						/>
					</Stack>
				</ScrollShadow>
			</Surface>
		</Container>
	),
});
