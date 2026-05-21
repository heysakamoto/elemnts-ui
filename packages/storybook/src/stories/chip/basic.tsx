import preview from "@.storybook/preview";
import { Chip } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: Chip,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use Chip to present compact, contextual metadata like statuses, categories, or tags. Chips can be static (informational), clickable (trigger an action or navigation), or dismissible (removable by the user).",
			},
		},
	},
	render: (args) => (
		<Chip
			rounded="24"
			{...args}
		>
			New release
		</Chip>
	),
});
