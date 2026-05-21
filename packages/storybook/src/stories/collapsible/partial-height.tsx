import preview from "@.storybook/preview";
import { Collapsible, Container, Icon, Stack, Text } from "@moto-ui/react";

const meta = preview.meta({
	title: "Partial Height",
	component: Collapsible,
});

export const PartialHeight = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Set the `collapsedHeight` prop to keep a fixed-height preview of the content visible when collapsed.",
			},
		},
	},
	render: (args) => (
		<Container maxW="20rem">
			<Collapsible
				{...args}
				collapsedHeight="28px"
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
