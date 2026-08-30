import { Separator, Show, Surface } from "@moto-ui/react";
import type { ReactElement, ReactNode } from "react";
import { nodeToString } from "@/utils/node";
import { CodeBlockProvider, useCodeBlockTabsContext } from "./client";
import { CopyButton } from "./copy-button";

type CodeBlockProps = {
	title?: string;
	lang?: string;
	icon?: ReactNode;
	children?: ReactElement<any>;
};

export const CodeBlock = (props: CodeBlockProps) => {
	const { title, lang, children } = props;
	const inTabs = useCodeBlockTabsContext();

	switch (true) {
		case inTabs: {
			return children;
		}

		default: {
			const code = nodeToString(children);

			return (
				<CodeBlockProvider>
					<Surface
						mt="24"
						delta={1}
						rounded="16"
						shadowLevel={0}
						position="relative"
						data-language={lang}
					>
						<CopyButton
							size="sm"
							top="4"
							right="4"
							value={code}
							position="absolute"
						/>
						<Show when={title}>
							<Surface.Header
								py="12"
								px="12"
								align="center"
								direction="row"
								justify="space-between"
							>
								<Surface.Description
									fontSize="12"
									fontFamily="mono"
									fontStyle="italic"
								>
									{title}
								</Surface.Description>
							</Surface.Header>
							<Separator orientation="horizontal" />
						</Show>
						<Surface.Content
							py="12"
							px="16"
							maxH="32rem"
							overflow="scroll"
							scrollbar="hidden"
						>
							{children}
						</Surface.Content>
					</Surface>
				</CodeBlockProvider>
			);
		}
	}
};

CodeBlock.displayName = "CodeBlock";
