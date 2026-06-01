import {
	Box,
	Button,
	ButtonGroup,
	Icon,
	Spinner,
	Surface,
} from "@moto-ui/react";
import { Link } from "@tanstack/react-router";
import { Suspense } from "react";
import { demos } from "../../../src/demos";
import { toCamelCase } from "../../../src/utils/string";

export const components = Object.entries(demos).filter(([key]) =>
	key.includes("basic"),
);

export function Components() {
	return (
		<Box
			my="32"
			spaceY="12"
			colorPalette="neutral"
		>
			{components.map(([key, demo]) => {
				const name = key.split(":")[0];

				return (
					<Surface
						delta={1}
						key={key}
						rounded="24"
					>
						<Surface.Content
							p="12"
							h="280"
							scrollbar="hidden"
							style={{
								height: 280,
								overflow: "auto",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Suspense fallback={<Spinner colorPalette="neutral" />}>
								<demo.component />
							</Suspense>
						</Surface.Content>
						<Surface.Footer
							py="8"
							w="full"
							align="center"
						>
							<Surface
								p="2"
								delta={1}
								rounded="24"
							>
								<ButtonGroup>
									<Button
										asChild
										size="sm"
										rounded="24"
										fontSize="12"
										variant="ghost"
										textTransform="capitalize"
									>
										<Link
											to="/docs/$"
											preload="intent"
											params={{ _splat: `components/${name}` }}
										>
											<Icon
												ml="-2"
												width={16}
												height={16}
												icon="tabler:arrow-right"
											/>
											{toCamelCase(name ?? "")}
										</Link>
									</Button>
								</ButtonGroup>
							</Surface>
						</Surface.Footer>
					</Surface>
				);
			})}
		</Box>
	);
}
