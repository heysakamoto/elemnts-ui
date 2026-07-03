import { Stack, Swatch } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Sizes",
	component: Swatch,
});

export const Sizes = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The Swatch component supports multiple sizes: `xs`, `sm`, `md` (default), `lg`, and `xl`.",
			},
		},
	},
	render: () => (
		<Stack
			direction="row"
			gap="8"
			alignItems="center"
		>
			<Swatch
				size="xs"
				bg="accent.primary"
			/>
			<Swatch
				size="sm"
				bg="accent.primary"
			/>
			<Swatch
				size="md"
				bg="accent.primary"
			/>
			<Swatch
				size="lg"
				bg="accent.primary"
			/>
			<Swatch
				size="xl"
				bg="accent.primary"
			/>
		</Stack>
	),
});
