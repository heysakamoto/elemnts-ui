import {
	Container,
	Input,
	type InputProps,
	SegmentGroup,
	Stack,
} from "@moto-ui/react";
import { useState } from "react";

const sizes = ["xs", "sm", "md", "lg", "xl"];

type Size = InputProps["size"];

export const Sizes = () => {
	const [value, setValue] = useState(sizes[0]);

	return (
		<Container maxW="16rem">
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
					w="16rem"
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
				<Input
					rounded="24"
					variant="secondary"
					size={value as Size}
					placeholder="Enter your address"
				/>
			</Stack>
		</Container>
	);
};
