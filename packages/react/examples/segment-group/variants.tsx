import { Container, SegmentGroup, Stack } from "@moto-ui/react";
import { useState } from "react";

const options = [
	{ label: "React", value: "react" },
	{ label: "Vue", value: "vue" },
	{ label: "Svelte", value: "svelte" },
];

const variants = ["primary", "secondary", "tertiary"];

type Variant = SegmentGroup["RootProps"]["variant"];

export default function Variants() {
	const [value, setValue] = useState(variants[0]);

	return (
		<Container maxW="20rem">
			<Stack
				gap="16"
				align="center"
				direction="column"
			>
				<SegmentGroup.Root
					defaultValue="react"
					variant={value as Variant}
					orientation="horizontal"
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
					{variants.map((variant) => (
						<SegmentGroup.Item
							key={variant}
							value={variant}
						>
							<SegmentGroup.ItemText fontSize="12">
								{variant}
							</SegmentGroup.ItemText>
							<SegmentGroup.ItemHiddenInput />
						</SegmentGroup.Item>
					))}
				</SegmentGroup>
			</Stack>
		</Container>
	);
}
