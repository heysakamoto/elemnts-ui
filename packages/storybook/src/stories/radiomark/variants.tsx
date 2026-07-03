import { Radiomark, Stack } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Variants",
	component: Radiomark,
});

export const Variants = meta.story({
	parameters: {
		docs: {
			description: {
				story: "The Radiomark supports multiple sizes and color palettes.",
			},
		},
	},
	render: () => (
		<Stack
			direction="row"
			gap="4"
			alignItems="center"
		>
			<Radiomark
				checked
				size="xs"
			/>
			<Radiomark
				checked
				size="sm"
			/>
			<Radiomark
				checked
				size="md"
			/>
			<Radiomark
				checked
				size="lg"
			/>
			<Radiomark
				checked
				size="xl"
			/>
		</Stack>
	),
});
