import { DecorativeBox, Stack } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Layouts/Stack",
	component: Stack,
});

export const ResponsiveDirection = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Control the stack’s orientation at different breakpoints with the `direction` prop.",
			},
		},
	},
	render: () => (
		<Stack
			gap="8"
			direction={{ base: "column", md: "row" }}
		>
			{Array.from({ length: 2 }).map((_, idx) => {
				return (
					<DecorativeBox
						key={idx.toString()}
						boxSize="56"
					/>
				);
			})}
		</Stack>
	),
});
