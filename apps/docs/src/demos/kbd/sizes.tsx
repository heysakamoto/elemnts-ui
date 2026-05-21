import { Container, Kbd, SegmentGroup, Stack } from "@moto-ui/react";
import { useState } from "react";

const sizes = ["xs", "sm", "md", "lg", "xl"];
type Size = Kbd["RootProps"]["size"];

export function Sizes() {
	const [value, setValue] = useState("md");

	return (
		<Container>
			<Stack
				direction="column"
				gap="12"
				align="center"
			>
				<SegmentGroup
					size="xs"
					mx="auto"
					maxW="fit"
					value={value}
					fontFamily="mono"
					orientation="horizontal"
					onValueChange={(e) => {
						const v = e.value ?? "";
						setValue(v);
					}}
				>
					<SegmentGroup.Indicator />
					{sizes.map((size) => (
						<SegmentGroup.Item
							key={size}
							value={size}
						>
							<SegmentGroup.ItemText>{size}</SegmentGroup.ItemText>
							<SegmentGroup.ItemHiddenInput />
						</SegmentGroup.Item>
					))}
				</SegmentGroup>
				<Kbd size={value as Size}>
					<Kbd.Item>⌘ K</Kbd.Item>
				</Kbd>
			</Stack>
		</Container>
	);
}
