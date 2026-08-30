import { Button, Download, Icon } from "@moto-ui/react";

const data = async () => {
	const res = await fetch("https://picsum.photos/200/300");
	return res.blob();
};
export default function AsynchronousData() {
	return (
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
	);
}
