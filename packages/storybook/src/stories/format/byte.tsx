import { Format, Stack, Text } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Byte",
});

export const Byte = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The Format.Byte component formats a byte value into a human-readable string (e.g., KB, MB, GB).",
			},
		},
	},
	render: (args) => (
		<Stack
			gap="4"
			fontSize="14"
		>
			<Text color="fg.tertiary">(1024 bytes)</Text>
			<Format.Byte
				{...args}
				value={1024}
			/>
		</Stack>
	),
});
