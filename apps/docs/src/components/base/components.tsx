import { Button, For, Grid, GridItem } from "@moto-ui/react";
import { Link } from "@tanstack/react-router";

import { demos } from "../../../src/demos";
import { toCamelCase } from "../../../src/utils/string";

export const components = Object.entries(demos).filter(([key]) =>
	key.includes("basic"),
);

export function Components() {
	return (
		<Grid
			my="32"
			gap="20"
			alignContent="start"
			gridTemplateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
		>
			<For each={components}>
				{([key]) => {
					const name = key.split(":")[0] ?? "";

					return (
						<GridItem>
							<Button
								asChild
								fullWidth
								fontSize="16"
								variant="ghost"
								justify="start"
								fontWeight="400"
								textTransform="capitalize"
							>
								<Link
									to="/docs/$"
									params={{ _splat: name }}
								>
									{toCamelCase(name)}
								</Link>
							</Button>
						</GridItem>
					);
				}}
			</For>
		</Grid>
	);
}
