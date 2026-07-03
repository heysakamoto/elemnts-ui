import {
	Button,
	type ButtonProps,
	Container,
	SegmentGroup,
	Stack,
} from "@moto-ui/react";
import { useState } from "react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Sizes",
	component: Button,
});

const sizes = ["xs", "sm", "md", "lg", "xl"];
type Size = ButtonProps["size"];

export const Sizes = meta.story({
	parameters: {
		docs: {
			description: {
				story: "Use the `size` prop to change the size of the button.",
			},
		},
	},
	render: () => {
		const [value, setValue] = useState("md");

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
						{sizes.map((size) => (
							<SegmentGroup.Item
								key={size}
								value={size}
							>
								<SegmentGroup.ItemText>{size}</SegmentGroup.ItemText>
								<SegmentGroup.ItemHiddenInput />
							</SegmentGroup.Item>
						))}
					</SegmentGroup>
					<Button
						size={value as Size}
						rounded="24"
					>
						Roadmap
					</Button>
				</Stack>
			</Container>
		);
	},
});
