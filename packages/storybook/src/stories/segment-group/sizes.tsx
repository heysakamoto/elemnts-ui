import preview from "@.storybook/preview";
import { Container, SegmentGroup, Stack } from "@moto-ui/react";
import { useState } from "react";

const options = [
	{ label: "React", value: "react" },
	{ label: "Vue", value: "vue" },
	{ label: "Svelte", value: "svelte" },
];

const sizes = ["xs", "sm", "md", "lg", "xl"];

const meta = preview.meta({
	title: "Sizes",
	component: SegmentGroup,
});

type Size = SegmentGroup["RootProps"]["size"];

export const Sizes = meta.story({
	parameters: {
		docs: {
			description: {
				story: "The `SegmentGroup` is available in different sizes.",
			},
		},
	},
	render: (args) => {
		const [value, setValue] = useState(sizes[0]);

		return (
			<Container maxW="20rem">
				<Stack
					gap="16"
					align="center"
					direction="column"
					key={value}
				>
					<SegmentGroup.Root
						defaultValue="react"
						{...args}
						size={value as Size}
					>
						<SegmentGroup.Indicator />
						{options.map((option) => (
							<SegmentGroup.Item
								key={option.value}
								value={option.value}
							>
								<SegmentGroup.ItemText>{option.label}</SegmentGroup.ItemText>
								<SegmentGroup.ItemHiddenInput />
							</SegmentGroup.Item>
						))}
					</SegmentGroup.Root>

					<SegmentGroup
						maxW="16rem"
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
				</Stack>
			</Container>
		);
	},
});
