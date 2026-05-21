import preview from "@.storybook/preview";
import { Container, ScrollArea, Text } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: ScrollArea,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The ScrollArea component is a compound component that provides a way to scroll content with custom-styled scrollbars.",
			},
		},
	},
	render: (args) => (
		<Container maxW="20rem">
			<ScrollArea
				h="8rem"
				{...args}
			>
				<ScrollArea.Viewport>
					<ScrollArea.Content pr="20">
						<Text fontSize="14">
							Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
							faucibus ex sapien vitae pellentesque sem placerat. In id cursus
							mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
							urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
							egestas. Iaculis massa nisl malesuada lacinia integer nunc
							posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
							litora torquent per conubia nostra inceptos himenaeos.
						</Text>
					</ScrollArea.Content>
				</ScrollArea.Viewport>
				<ScrollArea.Scrollbar>
					<ScrollArea.Thumb />
				</ScrollArea.Scrollbar>
			</ScrollArea>
		</Container>
	),
});
