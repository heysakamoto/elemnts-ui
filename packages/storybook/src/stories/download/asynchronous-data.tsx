import { Button, Download, Icon } from "@moto-ui/react";

import preview from "@.storybook/preview";

const data = async () => {
	const res = await fetch("https://picsum.photos/200/300");
	return res.blob();
};

const meta = preview.meta({
	title: "Asynchronous Data",
	component: Download,
});

export const AsynchronousData = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"You can also trigger downloads from a function that returns a `Promise` resolving to a `Blob`, `File`, or `string`.",
			},
		},
	},
	render: () => (
		<Download
			data={data}
			fileName="image.jpg"
			mimeType="image/jpeg"
			asChild
		>
			<Button
				rounded="24"
				variant="surface"
			>
				Download
				<Icon
					icon="tabler:download"
					width={18}
					height={18}
					mr="-2"
				/>
			</Button>
		</Download>
	),
});
