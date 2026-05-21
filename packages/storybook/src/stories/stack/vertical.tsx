import preview from "@.storybook/preview";
import { DecorativeBox, Stack } from "@moto-ui/react";

const meta = preview.meta({
	title: "Layouts/Stack",
	component: Stack,
});

export const Vertical = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					'Set the direction prop to "column" to arrange children in a vertical stack.',
			},
		},
	},
	render: () => (
		<Stack
			gap="8"
			direction="column"
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
