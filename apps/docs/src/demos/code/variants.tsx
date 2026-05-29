import { Code, Stack } from "@moto-ui/react";

const variants = ["secondary", "tertiary"] as const;

export function Variants() {
	return (
		<Stack gap="12">
			{variants.map((variant) => (
				<Code
					key={variant}
					variant={variant}
				>
					@moto-ui/react
				</Code>
			))}
		</Stack>
	);
}
