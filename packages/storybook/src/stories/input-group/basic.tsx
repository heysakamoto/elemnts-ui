import preview from "@.storybook/preview";
import { Icon, InputGroup } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: InputGroup,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The InputGroup component is used to add prefixes or suffixes to input fields, often used for search bars, units, or action buttons.",
			},
		},
	},
	render: (args) => (
		<InputGroup.Root
			{...args}
			maxW="16rem"
			rounded="24"
		>
			<InputGroup.Addon
				pl="8"
				color="icon.secondary"
			>
				<Icon
					icon="tabler:search"
					width={16}
					height={16}
				/>
			</InputGroup.Addon>
			<InputGroup.Input
				px="8"
				fontSize="14"
				placeholder="Search..."
			/>
			<InputGroup.Addon
				pr="8"
				color="icon.secondary"
			>
				<Icon
					icon="tabler:command"
					width={16}
					height={16}
				/>
			</InputGroup.Addon>
		</InputGroup.Root>
	),
});
