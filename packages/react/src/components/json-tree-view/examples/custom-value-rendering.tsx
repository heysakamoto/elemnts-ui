import { Container, Icon, JsonTreeView } from "@moto-ui/react";

function extractUrl(input: string): string {
	return input.replace(/\\"/g, "").replace(/^"|"$/g, "").trim();
}

export default function CustomValueRendering() {
	const data = {
		website: "https://moto-ui.com",
		documentation: "https://moto-ui.com/docs",
		repository: "https://github.com/moto-ui/moto-ui",
		status: "active",
	};

	return (
		<Container maxW="24rem">
			<JsonTreeView
				data={data}
				defaultExpandedDepth={1}
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
	);
}
