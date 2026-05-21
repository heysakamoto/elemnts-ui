import preview from "@.storybook/preview";
import { DecorativeBox, Separator, Stack } from "@moto-ui/react";

const meta = preview.meta({
	title: "Vertical",
	component: Separator,
});

export const Vertical = meta.story({
	args: {
		orientation: "vertical",
	},
	parameters: {
		docs: {
			description: {
				story: "Change the separator's direction using the orientation prop.",
			},
		},
	},
	render: (args) => (
		<Stack
			align="center"
			direction="row"
		>
			<DecorativeBox boxSize="64" />
			<Separator
				{...args}
				h="4rem"
				mx="12"
			/>
			<DecorativeBox boxSize="64" />
		</Stack>
	),
});
