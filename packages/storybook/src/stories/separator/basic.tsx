import preview from "@.storybook/preview";
import { DecorativeBox, Separator, Stack } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: Separator,
});

export const Basic = meta.story({
	args: {
		orientation: "horizontal",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Use the Separator component to visually divide distinct sections of content.",
			},
		},
	},
	render: (args) => (
		<Stack
			align="center"
			direction="column"
		>
			<DecorativeBox boxSize="64" />
			<Separator
				w="12rem"
				my="8"
				{...args}
			/>
			<DecorativeBox boxSize="64" />
		</Stack>
	),
});
