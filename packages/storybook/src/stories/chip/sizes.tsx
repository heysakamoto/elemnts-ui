import {
	Chip,
	type ChipProps,
	Container,
	SegmentGroup,
	Stack,
} from "@moto-ui/react";
import { useState } from "react";

import preview from "@.storybook/preview";

const sizes = ["xs", "sm", "md", "lg", "xl"];
type Size = ChipProps["size"];

const meta = preview.meta({
	title: "Sizes",
	component: Chip,
});

export const Sizes = meta.story({
	parameters: {
		docs: {
			description: {
				story: "Change the size of the component using the `size` prop.",
			},
		},
	},
	render: () => {
		const [value, setValue] = useState("md");

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
						{sizes.map((size) => (
							<SegmentGroup.Item
								value={size}
								key={size}
							>
								<SegmentGroup.ItemText>{size}</SegmentGroup.ItemText>
								<SegmentGroup.ItemHiddenInput />
							</SegmentGroup.Item>
						))}
					</SegmentGroup>
					<Chip
						size={value as Size}
						rounded="24"
					>
						Chip
					</Chip>
				</Stack>
			</Container>
		);
	},
});
