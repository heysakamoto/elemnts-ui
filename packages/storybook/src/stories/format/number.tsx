import { Format, Stack, Text } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Number",
});

export const Numeral = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The Format.Number component formats a number based on the current locale and specified options. It uses the Intl.NumberFormat API internally.",
			},
		},
	},
	render: (args) => (
		<Stack
			gap="4"
			fontSize="14"
		>
			<Text color="fg.tertiary">USD</Text>
			<Format.Number
				{...args}
				value={1234.56}
				style="currency"
				currency="USD"
			/>
		</Stack>
	),
});
