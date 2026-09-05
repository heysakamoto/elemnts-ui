import { Container, DataList } from "@elemnts-ui/react";

export default function Basic() {
	return (
		<Container maxW="20rem">
			<DataList>
				<DataList.Item>
					<DataList.ItemLabel>Name</DataList.ItemLabel>
					<DataList.ItemValue>Elemnts UI</DataList.ItemValue>
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
