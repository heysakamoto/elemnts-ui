import preview from "@.storybook/preview";
import { Skeleton, Text } from "@moto-ui/react";

const meta = preview.meta({
	title: "Text Only",
	component: Skeleton,
});

export const TextOnly = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The textOnly prop allows you to skeletonize inline text. It uses display: inline and adjusts the width to fit the content.",
			},
		},
	},
	render: (args) => (
		<Text fontSize="12">
			<Skeleton
				{...args}
				textOnly
			>
				some important information
			</Skeleton>
		</Text>
	),
});
