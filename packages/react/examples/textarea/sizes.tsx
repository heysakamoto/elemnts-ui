import {
	Container,
	SegmentGroup,
	Stack,
	Textarea,
	type TextareaProps,
} from "@moto-ui/react";
import { useState } from "react";

const sizes = ["xs", "sm", "md", "lg", "xl"];

type Size = TextareaProps["size"];

export default function Sizes() {
	const [value, setValue] = useState("md");

	return (
		<Container maxW="20rem">
			<Stack
				gap="16"
				align="center"
				w="full"
				direction="column"
			>
				<SegmentGroup
					maxW="11rem"
					size="xs"
					orientation="horizontal"
					fontFamily="mono"
					value={value}
					onValueChange={(e) => setValue(e.value ?? "")}
				>
					<SegmentGroup.Indicator />
					{sizes.map((size) => (
						<SegmentGroup.Item
							key={size}
							value={size}
						>
							<SegmentGroup.ItemText fontSize="12">
								{size}
							</SegmentGroup.ItemText>
							<SegmentGroup.ItemHiddenInput />
						</SegmentGroup.Item>
					))}
				</SegmentGroup>
				<Textarea
					rounded="16"
					size={value as Size}
					placeholder="Type your message here..."
				/>
			</Stack>
		</Container>
	);
}
