import preview from "@.storybook/preview";
import { Container, Icon, JsonTreeView } from "@moto-ui/react";

const data = {
	level1: {
		level2: {
			level3: {
				level4: "Deep value",
			},
		},
	},
};

const meta = preview.meta({
	title: "Expanded Depth",
	component: JsonTreeView,
});

export const ExpandedDepth = meta.story({
	args: {
		defaultExpandedDepth: 2,
	},
	parameters: {
		docs: {
			description: {
				story:
					"Use the defaultExpandedDepth prop to specify how many levels should be expanded by default.",
			},
		},
	},
	render: (args) => (
		<Container maxW="24rem">
			<JsonTreeView
				{...args}
				data={data}
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
	),
});
