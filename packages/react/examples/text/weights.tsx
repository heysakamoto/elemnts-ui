import { Container, SegmentGroup, Stack, Text } from "@moto-ui/react";
import { useState } from "react";

export default function Weights() {
	const weights = ["300", "400", "500", "600"];
	const [value, setValue] = useState("400");

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
				{weights.map((weight) => (
					<SegmentGroup.Item
						key={weight}
						value={weight}
					>
						<SegmentGroup.ItemText>{weight}</SegmentGroup.ItemText>
						<SegmentGroup.ItemHiddenInput />
					</SegmentGroup.Item>
				))}
			</SegmentGroup>
			<Stack
				direction="column"
				align="center"
				mt="18"
			>
				{value === "300" && (
					<Text
						fontWeight="300"
						textAlign="center"
					>
						{" "}
						Sphinx of black quartz, judge my vow.
					</Text>
				)}
				{value === "400" && (
					<Text
						fontWeight="400"
						textAlign="center"
					>
						{" "}
						Sphinx of black quartz, judge my vow.
					</Text>
				)}
				{value === "500" && (
					<Text
						fontWeight="500"
						textAlign="center"
					>
						{" "}
						Sphinx of black quartz, judge my vow.
					</Text>
				)}
				{value === "600" && (
					<Text
						fontWeight="600"
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
