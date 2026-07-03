import { Container, DataList } from "@moto-ui/react";

export function Horizontal() {
	return (
		<Container maxW="20rem">
			<DataList orientation="horizontal">
				<DataList.Item>
					<DataList.ItemLabel>Name</DataList.ItemLabel>
					<DataList.ItemValue>Moto UI</DataList.ItemValue>
				</DataList.Item>
				<DataList.Item>
					<DataList.ItemLabel>Description</DataList.ItemLabel>
					<DataList.ItemValue>
						A component library built with Ark UI and Panda CSS.
					</DataList.ItemValue>
				</DataList.Item>
				<DataList.Item>
					<DataList.ItemLabel>License</DataList.ItemLabel>
					<DataList.ItemValue>MIT</DataList.ItemValue>
				</DataList.Item>
			</DataList>
		</Container>
	);
}
