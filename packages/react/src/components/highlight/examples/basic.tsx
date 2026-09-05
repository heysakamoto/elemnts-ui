import { Highlight, Text } from "@elemnts-ui/react";

export default function Basic() {
	return (
		<Text fontSize="14">
			<Highlight
				query="spotlight"
				text="
        The Highlight component lets you spotlight words.
        "
			/>
		</Text>
	);
}
