import { Button, Download } from "@elemnts-ui/react";

const data = "The brown fox jumps over the lazy dog.";

export default function Basic() {
	return (
		<Download data={data} fileName="example.txt" mimeType="text/plain" asChild>
			<Button variant="surface">Download</Button>
		</Download>
	);
}
