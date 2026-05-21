import preview from "@.storybook/preview";
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

const meta = preview.meta({
	title: "Sizes",
	component: Separator,
});

export const Sizes = meta.story({
	args: {
		orientation: "horizontal",
	},
	parameters: {
		docs: {
			description: {
				story: "Adjust the separator's size using the size prop.",
			},
		},
	},
	render: (args) => {
		const sizes = ["xs", "sm", "md", "lg", "xl"];
		// eslint-disable-next-line react-hooks/rules-of-hooks
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
						{...args}
						w="12rem"
						my="8"
						size={value as Size}
					/>
					<DecorativeBox boxSize="64" />
				</Stack>
			</Container>
		);
	},
});
