import { Checkbox, Icon } from "@moto-ui/react";

import preview from "@.storybook/preview";

const interests = [
	{ label: "Coding", value: "coding" },
	{ label: "Design", value: "design" },
	{ label: "Writing", value: "writing" },
];

const meta = preview.meta({
	title: "Group",
	component: Checkbox.Group,
});

export const Group = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the Checkbox.Group component to group related checkboxes together.",
			},
		},
	},
	render: (args) => (
		<Checkbox.Group {...args}>
			{interests.map((interest) => (
				<Checkbox.Root
					value={interest.value}
					key={interest.value}
				>
					<Checkbox.Control>
						<Checkbox.Indicator>
							<Icon
								icon="tabler:check"
								width={12}
								height={12}
							/>
						</Checkbox.Indicator>
					</Checkbox.Control>
					<Checkbox.Label>{interest.label}</Checkbox.Label>
					<Checkbox.HiddenInput />
				</Checkbox.Root>
			))}
		</Checkbox.Group>
	),
});
