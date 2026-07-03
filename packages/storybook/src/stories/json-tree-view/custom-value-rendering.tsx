import { Container, Icon, JsonTreeView } from "@moto-ui/react";

import preview from "@.storybook/preview";

function extractUrl(input: string): string {
	return input.replace(/\\"/g, "").replace(/^"|"$/g, "").trim();
}

const data = {
	website: "https://moto-ui.com",
	documentation: "https://moto-ui.com/docs",
	repository: "https://github.com/moto-ui/moto-ui",
	status: "active",
};

const meta = preview.meta({
	title: "Custom Value Rendering",
	component: JsonTreeView,
});

export const CustomValueRendering = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"You can use the renderValue prop on JsonTreeView.Tree to customize how different values are displayed.",
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
					renderValue={(node) => {
						if (
							node.type === "text" &&
							typeof node.value === "string" &&
							node.value.includes("http")
						) {
							return (
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={extractUrl(node.value)}
								>
									{node.value}
								</a>
							);
						}
					}}
				/>
			</JsonTreeView>
		</Container>
	),
});
