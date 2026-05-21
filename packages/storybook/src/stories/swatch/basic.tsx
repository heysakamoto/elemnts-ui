import preview from "@.storybook/preview";
import { Stack, Swatch } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: Swatch,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The Swatch component is a simple circular indicator used to display a color. It is commonly used within color pickers, palette generators, or to document design tokens.",
			},
		},
	},
	render: () => (
		<Stack
			direction="row"
			gap="8"
		>
			<Swatch bg="red.50" />
			<Swatch bg="blue.50" />
		</Stack>
	),
});
