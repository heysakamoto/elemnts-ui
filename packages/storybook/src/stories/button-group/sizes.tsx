import { ButtonGroup, Container, SegmentGroup, Stack } from "@moto-ui/react";
import { useState } from "react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Sizes",
	component: ButtonGroup,
});

const sizes = ["sm", "md", "lg"];
type Size = ButtonGroup["RootProps"]["size"];

export const Sizes = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Set the `size` on the group to scale all contained buttons consistently.",
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
						value={value}
						onValueChange={(e) => {
							const v = e.value ?? "";
							setValue(v);
						}}
						size="xs"
						fontFamily="mono"
						orientation="horizontal"
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
					<ButtonGroup
						attached
						size={value as Size}
					>
						<ButtonGroup.Item roundedStart="24">
							Good
							<ButtonGroup.Separator />
						</ButtonGroup.Item>
						<ButtonGroup.Item roundedEnd="24">Poor</ButtonGroup.Item>
					</ButtonGroup>
				</Stack>
			</Container>
		);
	},
});
