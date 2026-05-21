import preview from "@.storybook/preview";
import { DecorativeBox, ScrollArea, Stack } from "@moto-ui/react";

const meta = preview.meta({
	title: "Horizontal",
	component: ScrollArea,
});

export const Horizontal = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Horizontal scrolling is automatically enabled when the content exceeds the container's width.",
			},
		},
	},
	render: (args) => (
		<ScrollArea
			w="20rem"
			{...args}
		>
			<ScrollArea.Viewport>
				<ScrollArea.Content pb="12">
					<Stack gap="8">
						{Array.from({ length: 8 }).map((_, idx) => (
							<DecorativeBox
								w="10rem"
								h="56"
								key={idx.toString()}
							/>
						))}
					</Stack>
				</ScrollArea.Content>
			</ScrollArea.Viewport>
			<ScrollArea.Scrollbar orientation="horizontal">
				<ScrollArea.Thumb />
			</ScrollArea.Scrollbar>
		</ScrollArea>
	),
});
