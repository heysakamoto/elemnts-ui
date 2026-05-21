import { Container, ScrollArea, SegmentGroup, Text } from "@moto-ui/react";
import { useState } from "react";

type Variant = ScrollArea["RootProps"]["variant"];

export function Variants() {
	const variants = ["hover", "always"];
	const [value, setValue] = useState("hover");

	return (
		<Container maxW="20rem">
			<SegmentGroup
				w="9rem"
				mx="auto"
				size="xs"
				defaultValue="hover"
				orientation="horizontal"
				onValueChange={(e) => setValue(e.value ?? "hover")}
			>
				<SegmentGroup.Indicator />
				{variants.map((v) => (
					<SegmentGroup.Item
						value={v}
						key={v}
					>
						<SegmentGroup.ItemText
							fontFamily="mono"
							fontSize="12"
						>
							{v}
						</SegmentGroup.ItemText>
						<SegmentGroup.ItemHiddenInput />
					</SegmentGroup.Item>
				))}
			</SegmentGroup>
			<ScrollArea
				h="8rem"
				mt="24"
				variant={value as Variant}
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
	);
}
