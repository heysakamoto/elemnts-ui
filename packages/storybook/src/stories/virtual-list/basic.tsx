import preview from "@.storybook/preview";
import { Container, DecorativeBox, VirtualList } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: VirtualList,
});

export const Basic = meta.story({
	args: {
		count: 1000,
	},
	parameters: {
		docs: {
			description: {
				story:
					"Use VirtualList when you need to render thousands of items without compromising performance. It uses virtualization to only render the items currently visible in the viewport.",
			},
		},
	},
	render: (args) => (
		<Container maxW="18rem">
			<VirtualList
				{...args}
				estimateSize={args.estimateSize ?? (() => 35)}
			>
				<VirtualList.Viewport
					h="320"
					scrollbar="hidden"
				>
					<VirtualList.Content>
						{({ item, measureElement }) => (
							<VirtualList.Item
								item={item}
								key={item.index}
								ref={measureElement}
							>
								<DecorativeBox
									mt="8"
									h="64"
									fontSize="14"
								>
									{item.index + 1}
								</DecorativeBox>
							</VirtualList.Item>
						)}
					</VirtualList.Content>
				</VirtualList.Viewport>
			</VirtualList>
		</Container>
	),
});
