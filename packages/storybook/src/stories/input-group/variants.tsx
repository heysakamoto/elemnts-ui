import { Container, Icon, InputGroup } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Variants",
	component: InputGroup,
});

export const Variants = meta.story({
	parameters: {
		docs: {
			description: {
				story: "Input groups support different visual styles.",
			},
		},
	},
	render: (args) => (
		<Container maxW="16rem">
			<InputGroup
				{...args}
				variant="secondary"
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
					placeholder="Search..."
					px="8"
					fontSize="14"
				/>
			</InputGroup>
		</Container>
	),
});
