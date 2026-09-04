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
	const code = nodeToString(children);

	return (
		<CodeBlockProvider>
			<Surface
				mt="24"
				delta={6}
				rounded="16"
				shadowLevel={0}
				data-language={lang}
			>
				<Surface.Header
					py="2"
					px="16"
					align="center"
					direction="row"
					justify="space-between"
				>
					<Surface.Description fontSize="14">
						<Show
							when={inTabs}
							fallback={title}
						>
							Terminal
						</Show>
					</Surface.Description>
					<Separator variant="ghost" />
					<CopyButton
						size="xs"
						variant="plain"
						value={code}
						mr="-12"
					/>
				</Surface.Header>
				<Surface.Content p="2">
					<Surface.Addon
						py="12"
						px="16"
						rounded="14"
						overflow="scroll"
						scrollbar="hidden"
						bgColor="surface.2"
					>
						{children}
					</Surface.Addon>
				</Surface.Content>
			</Surface>
		</CodeBlockProvider>
	);
};

CodeBlock.displayName = "CodeBlock";
