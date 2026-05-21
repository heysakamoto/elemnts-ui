import preview from "@.storybook/preview";
import { Format, Stack, Text } from "@moto-ui/react";

const meta = preview.meta({
	title: "Relative Time",
});

export const RelativeTime = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					'The Format.RelativeTime component formats a date into a relative time string (e.g., "2 days ago", "in 5 minutes"). It uses the Intl.RelativeTimeFormat API internally.',
			},
		},
	},
	render: (args) => (
		<Stack
			gap="4"
			fontSize="14"
		>
			<Text color="fg.tertiary">48 hours ago</Text>
			<Format.RelativeTime
				{...args}
				value={new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)}
			/>
		</Stack>
	),
});
