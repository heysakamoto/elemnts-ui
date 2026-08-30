import {
	Container,
	Input,
	type InputProps,
	SegmentGroup,
	Stack,
} from "@moto-ui/react";
import { useState } from "react";

const variants = ["primary", "secondary", "tertiary"];

type Variant = InputProps["variant"];

export default function Variants() {
	const [value, setValue] = useState(variants[0]);

	return (
		<Container maxW="16rem">
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
				<Input
					rounded="24"
					variant={value as Variant}
					placeholder="Enter your address"
				/>
			</Stack>
		</Container>
	);
}
