import preview from "@.storybook/preview";
import { Button, Download, Format } from "@moto-ui/react";

const data = "anything";

const meta = preview.meta({
	title: "File Size",
	component: Download,
});

export const FileSize = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Pair the `Download` component with the `Format.Byte` component to display the file size in a human-readable format.",
			},
		},
	},
	render: () => (
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
	),
});
