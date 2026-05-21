import { Button, Download, Format } from "@moto-ui/react";

const data = "anything";

export function FileSize() {
	return (
		<Download
			data={data}
			fileName="file.txt"
			mimeType="text/plain"
			asChild
		>
			<Button
				rounded="24"
				variant="tertiary"
			>
				Download{" "}
				<Format.Byte
					value={data.length}
					unitDisplay="narrow"
				/>
			</Button>
		</Download>
	);
}
