import preview from "@.storybook/preview";
import { Stack, Status } from "@moto-ui/react";

const meta = preview.meta({
	title: "Sizes",
	component: Status,
});

export const Sizes = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The `Status` component supports different sizes: `sm`, `md` (default), and `lg`.",
			},
		},
	},
	render: (args) => (
		<Stack
			gap="8"
			alignItems="flex-start"
		>
			<Status.Root
				{...args}
				size="sm"
			>
				<Status.Indicator />
				<Status.Text>Small</Status.Text>
			</Status.Root>
			<Status.Root
				{...args}
				size="md"
			>
				<Status.Indicator />
				<Status.Text>Medium</Status.Text>
			</Status.Root>
			<Status.Root
				{...args}
				size="lg"
			>
				<Status.Indicator />
				<Status.Text>Large</Status.Text>
			</Status.Root>
		</Stack>
	),
});
