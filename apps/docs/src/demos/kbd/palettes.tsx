import { Container, Kbd, SegmentGroup, Stack } from "@moto-ui/react";
import { useState } from "react";

const palettes = ["accent", "neutral"];

export function Palettes() {
	const [value, setValue] = useState("neutral");

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
					{palettes.map((palette) => (
						<SegmentGroup.Item
							key={palette}
							value={palette}
						>
							<SegmentGroup.ItemText>{palette}</SegmentGroup.ItemText>
							<SegmentGroup.ItemHiddenInput />
						</SegmentGroup.Item>
					))}
				</SegmentGroup>
				{value === "neutral" && (
					<Kbd colorPalette="neutral">
						<Kbd.Item>⌘ K</Kbd.Item>
					</Kbd>
				)}
				{value === "accent" && (
					<Kbd colorPalette="accent">
						<Kbd.Item>⌘ K</Kbd.Item>
					</Kbd>
				)}
			</Stack>
		</Container>
	);
}
