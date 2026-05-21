import { Highlight, Stack, Text } from "@moto-ui/react";

const searchTerm = "code";
const items = ["Code editor", "Code review", "Code deployment"];

export function SearchQuery() {
	return (
		<Stack
			gap="8"
			direction="column"
		>
			<Text
				fontSize="14"
				color="fg.tertiary"
			>
				Showing results for: code
			</Text>
			<Stack
				gap="1"
				direction="column"
			>
				{items.map((item) => (
					<Text
						key={item}
						fontSize="14"
					>
						<Highlight
							variant="tertiary"
							ignoreCase
							query={searchTerm}
							text={item}
						/>
					</Text>
				))}
			</Stack>
		</Stack>
	);
}
