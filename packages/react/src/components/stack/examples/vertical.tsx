import { DecorativeBox, Stack } from "@moto-ui/react";

export default function Vertical() {
	return (
		<Stack
			gap="8"
			direction="column"
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
