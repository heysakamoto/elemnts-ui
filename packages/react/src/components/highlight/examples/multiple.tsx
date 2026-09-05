import { Container, Highlight, Text } from "@elemnts-ui/react";

export default function Multiple() {
	return (
		<Container maxW="20rem">
			<Text fontSize="14">
				<Highlight
					query={["spotlight", "emphasize", "accentuate"]}
					text="
          Use the Highlight component to spotlight, emphasize, and accentuate words.
          "
				/>
			</Text>
		</Container>
	);
}
