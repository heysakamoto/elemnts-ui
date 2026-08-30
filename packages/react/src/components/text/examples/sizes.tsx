import { Container, SegmentGroup, Stack, Text } from "@moto-ui/react";
import { useState } from "react";

export default function Sizes() {
	const sizes = ["14", "20", "32", "40"];
	const [value, setValue] = useState("14");

	return (
		<Container maxW="20rem">
			<SegmentGroup
				size="xs"
				mx="auto"
				maxW="10rem"
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
			<Stack
				direction="column"
				align="center"
				mt="18"
			>
				{value === "14" && (
					<Text
						fontSize="14"
						textAlign="center"
					>
						{" "}
						Sphinx of black quartz, judge my vow.
					</Text>
				)}
				{value === "20" && (
					<Text
						fontSize="20"
						textAlign="center"
					>
						{" "}
						Sphinx of black quartz, judge my vow.
					</Text>
				)}
				{value === "32" && (
					<Text
						fontSize="32"
						textAlign="center"
					>
						{" "}
						Sphinx of black quartz, judge my vow.
					</Text>
				)}
				{value === "40" && (
					<Text
						fontSize="40"
						textAlign="center"
					>
						{" "}
						Sphinx of black quartz, judge my vow.
					</Text>
				)}
			</Stack>
		</Container>
	);
}
