import preview from "@.storybook/preview";
import { Alert, Container, Icon, Surface } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: Alert,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The Alert component is used to communicate a message to the user. It is built on top of the Collapsible component, allowing it to be used for dismissible or togglable messages.",
			},
		},
	},
	render: (args) => (
		<Container maxW="fit">
			<Surface
				p="8"
				delta={1}
				rounded="24"
			>
				<Alert.Root
					colorPalette="success"
					{...args}
				>
					<Alert.Media>
						<Icon
							icon="tabler:rosette-discount-check"
							width={20}
							height={20}
						/>
					</Alert.Media>
					<Alert.Title fontSize="14">
						Your message was sent to the recipient.
					</Alert.Title>
				</Alert.Root>
			</Surface>
		</Container>
	),
});
