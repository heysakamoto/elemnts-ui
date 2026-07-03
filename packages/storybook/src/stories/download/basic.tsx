import { Button, Download } from "@moto-ui/react";

import preview from "@.storybook/preview";

const data = "The brown fox jumps over the lazy dog.";

const meta = preview.meta({
	title: "Basic",
	component: Download,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The `Download` component (internally using `DownloadTrigger`) initiates a client-side file download using in-memory data.\n\nRender the component; when it is activated (e.g., clicked), the browser will prompt the user to download the file.",
			},
		},
	},
	render: () => (
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
	),
});
