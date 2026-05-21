import { Chip, type TextProps } from "@moto-ui/react";
import { useCodeBlockContext } from "./client";

type CodeProps = TextProps;
export const Code = (props: CodeProps) => {
	const { children } = props;

	const inCodeBlock = useCodeBlockContext();

	switch (true) {
		case inCodeBlock: {
			return children;
		}
		default: {
			return (
				<Chip
					as="code"
					size="xs"
					rounded="8"
					fontSize="12"
					fontWeight="400"
					fontFamily="mono"
					letterSpacing="sm"
					variant="secondary"
					colorPalette="neutral"
					whiteSpace="nowrap"
				>
					{children}
				</Chip>
			);
		}
	}
};

Code.displayName = "Code";
