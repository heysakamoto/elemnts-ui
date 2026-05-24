import preview from "@.storybook/preview";
import { Separator, Stack, Text } from "@moto-ui/react";

const meta = preview.meta({
	title: "Label",
	component: Separator,
});

export const Label = meta.story({
	args: {
		orientation: "horizontal",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Create a label-like structure using the Stack and Text components.",
			},
		},
	},
	render: (args) => (
		<Stack
			gap="8"
			align="center"
			direction="row"
		>
			<Separator
				{...args}
				w="8rem"
			/>
			<Text color="fg.secondary">or sign in with</Text>
			<Separator
				{...args}
				w="8rem"
			/>
		</Stack>
	),
});
