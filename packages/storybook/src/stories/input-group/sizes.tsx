import { Container, Icon, InputGroup } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Sizes",
	component: InputGroup,
});

export const Sizes = meta.story({
	parameters: {
		docs: {
			description: {
				story: "Input groups are available in several sizes.",
			},
		},
	},
	render: (args) => (
		<Container maxW="16rem">
			<InputGroup
				{...args}
				size="sm"
				rounded="24"
			>
				<InputGroup.Addon
					pl="8"
					color="icon.secondary"
				>
					<Icon
						icon="tabler:book"
						width={16}
						height={16}
					/>
				</InputGroup.Addon>
				<InputGroup.Input
					px="8"
					fontSize="14"
					placeholder="Search..."
				/>
			</InputGroup>
		</Container>
	),
});
