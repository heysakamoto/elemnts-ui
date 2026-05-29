import { Code, Stack } from "@moto-ui/react";

const sizes = ["lg", "xl"] as const;

export function Sizes() {
	return (
		<Stack gap="12">
			{sizes.map((size) => (
				<Code
					key={size}
					size={size}
				>
					@moto-ui/react
				</Code>
			))}
		</Stack>
	);
}
