import { Button, Download } from "@moto-ui/react";

const data = "The brown fox jumps over the lazy dog.";

export function Basic() {
	return (
		<Download
			data={data}
			fileName="example.txt"
			mimeType="text/plain"
			asChild
		>
			<Button
				rounded="24"
				variant="surface"
			>
				Download
			</Button>
		</Download>
	);
}
