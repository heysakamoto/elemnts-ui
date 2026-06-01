import { Code as MotoCode, type TextProps } from "@moto-ui/react";
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
				<MotoCode
					size="xs"
					rounded="8"
					fontSize="13"
					letterSpacing="sm"
					variant="secondary"
					colorPalette="neutral"
				>
					{children}
				</MotoCode>
			);
		}
	}
};

Code.displayName = "Code";
