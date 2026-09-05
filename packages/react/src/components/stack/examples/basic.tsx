import { DecorativeBox, Stack } from "@elemnts-ui/react";

export default function Basic() {
	return (
		<Stack gap="8">
			{Array.from({ length: 2 }).map((_, idx) => {
				return <DecorativeBox key={idx.toString()} boxSize="56" />;
			})}
		</Stack>
	);
}
