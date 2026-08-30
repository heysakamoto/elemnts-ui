import {
	Container,
	DecorativeBox,
	SegmentGroup,
	Separator,
	type SeparatorProps,
	Stack,
} from "@moto-ui/react";
import { useState } from "react";

type Size = SeparatorProps["size"];

export default function Sizes() {
	const sizes = ["xs", "sm", "md", "lg", "xl"];
	const [value, setValue] = useState("sm");

	return (
		<Container maxW="20rem">
			<SegmentGroup
				w="11rem"
				mx="auto"
				size="xs"
				defaultValue="sm"
				orientation="horizontal"
				onValueChange={(e) => setValue(e.value ?? "sm")}
			>
				<SegmentGroup.Indicator />
				{sizes.map((size) => (
					<SegmentGroup.Item
						key={size}
						value={size}
					>
						<SegmentGroup.ItemText
							fontFamily="mono"
							fontSize="12"
						>
							{size}
						</SegmentGroup.ItemText>
						<SegmentGroup.ItemHiddenInput />
					</SegmentGroup.Item>
				))}
			</SegmentGroup>
			<Stack
				mt="20"
				align="center"
				direction="column"
			>
				<DecorativeBox boxSize="64" />
				<Separator
					w="12rem"
					my="8"
					orientation="horizontal"
					size={value as Size}
				/>
				<DecorativeBox boxSize="64" />
			</Stack>
		</Container>
	);
}
