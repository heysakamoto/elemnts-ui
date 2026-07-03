import {
	Container,
	Highlight,
	Image,
	Text,
	useHighlight,
} from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Squiggle",
	component: Highlight,
});

const img =
	"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20preserveAspectRatio='none'%20viewBox='0%200%20100%2012'%3E%3Cpath%20d='M2%208%20Q50%204%2098%207'%20stroke='%231447e6'%20stroke-width='4'%20fill='none'%20stroke-linecap='round'/%3E%3C/svg%3E";

export const Squiggle = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"This example demonstrates how to wrap highlighted text with a custom squiggle image for a more decorative effect.",
			},
		},
	},
	render: () => {
		const chunks = useHighlight({
			text: "Endless scale, powered by real humans.",
			query: ["endless", "real humans."],
		});

		return (
			<Container maxW="20rem">
				<Text
					as="h3"
					fontWeight="500"
					lineHeight="sm"
				>
					{chunks.map((chunk, idx) => {
						if (chunk.match) {
							return (
								<Text
									as="span"
									key={idx.toString()}
									lineHeight="1"
									color="accent.primary"
									position="relative"
								>
									{chunk.text}
									<Image
										h="4"
										alt=""
										left="0"
										src={img}
										bottom="0"
										loading="lazy"
										position="absolute"
									/>
								</Text>
							);
						}
						return <Text key={idx.toString()}>{chunk.text}</Text>;
					})}
				</Text>
			</Container>
		);
	},
});
