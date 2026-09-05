import { Button, Download, Format } from "@elemnts-ui/react";

const data = "anything";

export default function FileSize() {
	return (
		<Download data={data} fileName="file.txt" mimeType="text/plain" asChild>
			<Button variant="surface">
				Download <Format.Byte value={data.length} unitDisplay="narrow" />
			</Button>
		</Download>
	);
}
