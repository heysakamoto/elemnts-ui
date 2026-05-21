import preview from "@.storybook/preview";
import { Button, Download } from "@moto-ui/react";

const data = `
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red"/>
</svg>
`;

const meta = preview.meta({
	title: "Svg",
	component: Download,
});

export const Svg = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					'Pass the SVG markup as a string to `data`, set `fileName` to a `.svg` filename, and use `mimeType` `"image/svg+xml"`.',
			},
		},
	},
	render: () => (
		<Download
			data={data}
			fileName="circle.svg"
			mimeType="image/svg+xml"
			asChild
		>
			<Button
				rounded="24"
				variant="surface"
			>
				Download svg
			</Button>
		</Download>
	),
});
