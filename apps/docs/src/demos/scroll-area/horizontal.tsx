import { DecorativeBox, ScrollArea, Stack } from "@moto-ui/react";

export function Horizontal() {
	return (
		<ScrollArea w="20rem">
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
	);
}
