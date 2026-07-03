import { Alert, Button, Container, Icon, Surface } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Control",
	component: Alert,
});

export const Control = meta.story({
	parameters: {
		docs: {
			description: {
				story: "Action buttons can be added to the alert using Alert.Control.",
			},
		},
	},
	render: (args) => (
		<Container maxW="24rem">
			<Surface
				py="10"
				px="12"
				delta={1}
				rounded="24"
			>
				<Alert.Root
					colorPalette="destructive"
					{...args}
				>
					<Alert.Media>
						<Icon
							icon="tabler:world-x"
							width={20}
							height={20}
						/>
					</Alert.Media>
					<Alert.Title>Build failed</Alert.Title>
					<Alert.Description mt="6">
						Something went wrong while building your project. Try again later.
					</Alert.Description>
					<Alert.Control
						mt="12"
						gridColumn="2/span 1"
					>
						<Button
							size="xs"
							rounded="24"
							colorPalette="destructive"
						>
							Summary
						</Button>
					</Alert.Control>
				</Alert.Root>
			</Surface>
		</Container>
	),
});
