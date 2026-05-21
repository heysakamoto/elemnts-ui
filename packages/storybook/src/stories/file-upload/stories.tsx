import preview from "@.storybook/preview";
import { FileUpload } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: FileUpload,
	title: "Forms/FileUpload",
	args: {
		maxFiles: 1,
		disabled: false,
		allowDrop: true,
	},
	parameters: {
		docs: {
			description: {
				component:
					"A component that allows users to select one or more files from their device.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Dropzone } from "./dropzone";
