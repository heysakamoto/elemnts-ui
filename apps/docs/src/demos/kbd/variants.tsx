import { Container, Kbd, SegmentGroup, Stack } from "@moto-ui/react";
import { useState } from "react";

const variants = ["primary", "secondary"];
type Variant = Kbd["RootProps"]["variant"];

export function Variants() {
	const [value, setValue] = useState("secondary");

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
					{variants.map((variant) => (
						<SegmentGroup.Item
							key={variant}
							value={variant}
						>
							<SegmentGroup.ItemText>{variant}</SegmentGroup.ItemText>
							<SegmentGroup.ItemHiddenInput />
						</SegmentGroup.Item>
					))}
				</SegmentGroup>
				<Kbd variant={value as Variant}>
					<Kbd.Item>⌘ K</Kbd.Item>
				</Kbd>
			</Stack>
		</Container>
	);
}
