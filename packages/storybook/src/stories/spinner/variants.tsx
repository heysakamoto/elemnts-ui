import preview from "@.storybook/preview";
import { Spinner, Stack } from "@moto-ui/react";

const meta = preview.meta({
	title: "Variants",
	component: Spinner,
});

export const Variants = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The Spinner supports customization of size, color palette, and animation speed.",
			},
		},
	},
	render: () => (
		<Stack
			direction="row"
			gap="4"
			alignItems="center"
		>
			<Spinner colorPalette="accent" />
			<Spinner colorPalette="success" />
			<Spinner colorPalette="warning" />
			<Spinner colorPalette="destructive" />
			<Spinner colorPalette="neutral" />
		</Stack>
	),
});
