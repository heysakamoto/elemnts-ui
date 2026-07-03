import { Alert, Container, Icon, Surface } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Palettes",
	component: Alert,
});

export const Palettes = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The Alert component supports different palettes to convey different meanings.",
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
					colorPalette="warning"
					{...args}
				>
					<Alert.Media>
						<Icon
							icon="tabler:info-circle"
							width={20}
							height={20}
						/>
					</Alert.Media>
					<Alert.Title>This is a warning message</Alert.Title>
				</Alert.Root>
			</Surface>
		</Container>
	),
});
