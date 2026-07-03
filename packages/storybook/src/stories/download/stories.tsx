import { Download } from "@moto-ui/react";
import type { Meta } from "@storybook/react";

import preview from "@.storybook/preview";

const meta: Meta<typeof Download> = preview.meta({
	tags: ["autodocs"],
	component: Download,
	title: "Pressables/Download",
	args: {
		data: "Hello, world!",
		fileName: "hello.txt",
		mimeType: "text/plain",
	},
	parameters: {
		docs: {
			description: {
				component: "A component that initiates a file download when clicked.",
			},
		},
	},
});

export default meta;

export { AsynchronousData } from "./asynchronous-data";
export { Basic } from "./basic";
export { FileSize } from "./file-size";
export { Svg } from "./svg";
