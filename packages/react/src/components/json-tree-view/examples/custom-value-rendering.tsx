import { Container, Icon, JsonTreeView } from "@moto-ui/react";

function extractUrl(input: string): string {
	return input.replace(/\\"/g, "").replace(/^"|"$/g, "").trim();
}

export default function CustomValueRendering() {
	const data = {
		status: "active",
		website: "https://moto-ui.app",
		documentation: "https://moto-ui.app/docs",
		repository: "https://github.com/heysakamoto/moto-ui",
	};

	return (
		<Container maxW="28rem">
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
