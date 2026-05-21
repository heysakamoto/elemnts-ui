import preview from "@.storybook/preview";
import { DecorativeBox, Stack } from "@moto-ui/react";

const meta = preview.meta({
	title: "Layouts/Stack",
	component: Stack,
});

export const Basic = meta.story({
	render: () => (
		<Stack gap="8">
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
