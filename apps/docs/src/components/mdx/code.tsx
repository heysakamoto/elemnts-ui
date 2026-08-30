import { type CodeProps, Code as MotoCode, Text } from "@moto-ui/react";

import { useCodeBlockContext } from "./client";

export const Code = (props: CodeProps) => {
	const { children } = props;

	const inCodeBlock = useCodeBlockContext();

	switch (true) {
		case inCodeBlock: {
			return (
				<Text
					as="code"
					fontSize="12"
					fontFamily="mono"
					css={{
						tabSize: 2,
						"& span.line": {
							lineHeight: "2",
							display: "block",
							whiteSpace: "pre",
							"& span": {
								color: "var(--shiki-light)",
								_dark: {
									color: "var(--shiki-dark)",
								},
							},
						},
					}}
				>
					{children}
				</Text>
			);
		}
		default: {
			return (
				<MotoCode
					h="auto"
					py="4"
					size="2xs"
					variant="secondary"
				>
					{children}
				</MotoCode>
			);
		}
	}
};

Code.displayName = "Code";
