import { Blockquote, Container } from "@moto-ui/react";

export default function Basic() {
	return (
		<Container maxW="20rem">
			<Blockquote>
				<Blockquote.Content>
					<p>The best way to predict the future is to invent it. - Alan Kay</p>
				</Blockquote.Content>
				<Blockquote.Caption>— Alan Kay, Computer Scientist</Blockquote.Caption>
			</Blockquote>
		</Container>
	);
}
