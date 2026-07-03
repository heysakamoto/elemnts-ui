import {
	Container,
	Elevated,
	Stack,
	Substrate,
	Text,
	useSubstrate,
} from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Basic",
	component: Substrate,
});

function SubstrateIndicator() {
	const level = useSubstrate();

	return (
		<Stack
			gap="1"
			direction="column"
		>
			<Text
				fontSize="14"
				fontWeight="semibold"
			>
				Substrate Level {level}
			</Text>
			<Text
				fontSize="14"
				color="fg.tertiary"
			>
				Background shifts to surface.{level}
			</Text>
		</Stack>
	);
}

export const Basic = meta.story({
	args: {
		value: 7,
	},
	parameters: {
		docs: {
			description: {
				story:
					"The Substrate component is a utility provider that establishes a substrate level context for all its children. This level (a value clamped between 1 and 8) is typically consumed by components like Elevated or Surface to dynamically adjust background colors, borders, and shadows based on depth.",
			},
		},
	},
	render: (args) => (
		<Container maxW="20rem">
			<Substrate {...args}>
				<Elevated
					p="12"
					delta={0}
					rounded="24"
				>
					<SubstrateIndicator />
				</Elevated>
			</Substrate>
		</Container>
	),
});
