import { Collapsible, Container, Icon, Stack, Text } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Disabled",
	component: Collapsible,
});

export const Disabled = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Set the `disabled` prop to prevent users from toggling the collapsible.",
			},
		},
	},
	render: (args) => (
		<Container maxW="20rem">
			<Collapsible
				{...args}
				disabled
			>
				<Collapsible.Trigger h="36">
					<Text
						flex="1"
						as="span"
					>
						What is this component?
					</Text>
					<Collapsible.Indicator>
						<Icon
							icon="tabler:chevron-down"
							width={16}
							height={16}
						/>
					</Collapsible.Indicator>
				</Collapsible.Trigger>
				<Collapsible.Content>
					<Stack
						p="12"
						pt="4"
					>
						<Text
							fontSize="14"
							color="fg.secondary"
						>
							A collapsible accordion with animated expand/collapse and
							spring-animated chevron.
						</Text>
					</Stack>
				</Collapsible.Content>
			</Collapsible>
		</Container>
	),
});
