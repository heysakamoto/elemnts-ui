import preview from "@.storybook/preview";
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

const meta = preview.meta({
	title: "Sizes",
	component: Textarea,
});

export const Sizes = meta.story({
	parameters: {
		docs: {
			description: {
				story: "Use the size prop to change the size of the textarea.",
			},
		},
	},
	render: (args) => {
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
						{...args}
						rounded="16"
						size={value as Size}
						placeholder="Type your message here..."
					/>
				</Stack>
			</Container>
		);
	},
});
