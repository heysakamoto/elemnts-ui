import { Button, Download } from "@elemnts-ui/react";

const data = `
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red"/>
</svg>
`;

export default function Svg() {
	return (
		<Download
			data={data}
			fileName="circle.svg"
			mimeType="image/svg+xml"
			asChild
		>
			<Button variant="surface">Download svg</Button>
		</Download>
	);
}
