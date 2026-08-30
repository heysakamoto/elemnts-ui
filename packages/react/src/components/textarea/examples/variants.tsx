import {
	Container,
	SegmentGroup,
	Stack,
	Textarea,
	type TextareaProps,
} from "@moto-ui/react";
import { useState } from "react";

const variants = ["primary", "secondary", "tertiary"];

type Variant = TextareaProps["variant"];

export default function Variants() {
	const [value, setValue] = useState(variants[0]);

	return (
		<Container maxW="20rem">
			<Stack
				gap="16"
				align="center"
				w="full"
				direction="column"
			>
				<SegmentGroup
					maxW="15rem"
					size="xs"
					orientation="horizontal"
					fontFamily="mono"
					value={value}
					onValueChange={(e) => setValue(e.value ?? "")}
				>
					<SegmentGroup.Indicator />
					{variants.map((variant) => (
						<SegmentGroup.Item
							key={variant}
							value={variant}
						>
							<SegmentGroup.ItemText
								fontSize="12"
								textTransform="capitalize"
							>
								{variant}
							</SegmentGroup.ItemText>
							<SegmentGroup.ItemHiddenInput />
						</SegmentGroup.Item>
					))}
				</SegmentGroup>
				<Textarea
					rounded="16"
					variant={value as Variant}
					placeholder="Type your message here..."
				/>
			</Stack>
		</Container>
	);
}
