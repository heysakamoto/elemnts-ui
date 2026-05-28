import { Container, Mark, SegmentGroup, Stack, Text } from "@moto-ui/react";
import { useState } from "react";

const palettes = ["accent", "neutral"];

export function Palettes() {
	const [value, setValue] = useState("accent");

	return (
		<Container>
			<Stack
				direction="column"
				gap="16"
				align="center"
			>
				<SegmentGroup
					size="xs"
					fontFamily="mono"
					orientation="horizontal"
					value={value}
					onValueChange={(e) => {
						const v = e.value ?? "";
						setValue(v);
					}}
				>
					<SegmentGroup.Indicator />
					{palettes.map((palette) => (
						<SegmentGroup.Item
							value={palette}
							key={palette}
						>
							<SegmentGroup.ItemText>{palette}</SegmentGroup.ItemText>
							<SegmentGroup.ItemHiddenInput />
						</SegmentGroup.Item>
					))}
				</SegmentGroup>
				<Text fontSize="16">
					This uses the <Mark colorPalette={value}>{value}</Mark> color palette.
				</Text>
			</Stack>
		</Container>
	);
}
