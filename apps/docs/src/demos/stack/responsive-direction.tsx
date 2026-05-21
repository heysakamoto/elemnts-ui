import { DecorativeBox, Stack } from "@moto-ui/react";

export function ResponsiveDirection() {
	return (
		<Stack
			gap="8"
			direction={{ base: "column", md: "row" }}
		>
			{Array.from({ length: 2 }).map((_, idx) => {
				return (
					<DecorativeBox
						key={idx.toString()}
						boxSize="56"
					/>
				);
			})}
		</Stack>
	);
}
