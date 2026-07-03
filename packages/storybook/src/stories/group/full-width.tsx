import { Button, Group } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Full Width",
	component: Group,
});

export const FullWidth = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the `fullWidth` prop to let the children expand to fill the available space.",
			},
		},
	},
	render: (args) => (
		<Group
			{...args}
			fullWidth
			maxW="20rem"
		>
			<Button
				rounded="calc(24px - 8px)"
				variant="tertiary"
			>
				Org
			</Button>
			<Button
				rounded="calc(24px - 8px)"
				variant="tertiary"
			>
				Pro
			</Button>
			<Button
				rounded="calc(24px - 8px)"
				variant="tertiary"
			>
				Free
			</Button>
		</Group>
	),
});
