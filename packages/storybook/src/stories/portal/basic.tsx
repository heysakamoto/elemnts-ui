import { Container, Portal, Surface } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Basic",
	component: Portal,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The `Portal` component is used to transport its children to a different part of the DOM tree, typically at the end of the `document.body`.",
			},
		},
	},
	render: () => (
		<Container maxW="20rem">
			<Surface
				delta={1}
				p="8"
			>
				<Surface.Title
					justify="center"
					w="full"
					fontSize="14"
				>
					This text is inside the container.
				</Surface.Title>
			</Surface>
			<Portal>
				<Surface
					p="8"
					top="0"
					left="0"
					w="full"
					delta={1}
					shadow="lg"
					rounded="0"
					position="fixed"
				>
					<Surface.Title
						fontSize="14"
						w="full"
					>
						I am portalled to the end of document.body
					</Surface.Title>
				</Surface>
			</Portal>
		</Container>
	),
});
