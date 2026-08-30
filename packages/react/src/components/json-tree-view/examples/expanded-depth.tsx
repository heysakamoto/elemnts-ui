import { Container, Icon, JsonTreeView } from "@moto-ui/react";

export default function ExpandedDepth() {
	const data = {
		level1: {
			level2: {
				level3: {
					level4: "Deep value",
				},
			},
		},
	};

	return (
		<Container maxW="24rem">
			<JsonTreeView
				data={data}
				defaultExpandedDepth={2}
			>
				<JsonTreeView.Tree
					arrow={
						<Icon
							icon="tabler:chevron-right"
							width={16}
							height={16}
						/>
					}
				/>
			</JsonTreeView>
		</Container>
	);
}
