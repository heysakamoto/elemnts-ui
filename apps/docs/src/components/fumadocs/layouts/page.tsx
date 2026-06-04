import { Box, ButtonGroup, Icon, Show, Stack, Text } from "@moto-ui/react";
import { Link } from "@tanstack/react-router";
import { type PropsWithChildren, useEffect } from "react";
import { DocsLayoutAiButtons } from "./ai";
import { type DocsLayoutState, useDocsLayoutContext } from "./client";

type DocsLayoutPageProps = PropsWithChildren<Pick<DocsLayoutState, "toc">>;
export function DocsLayoutPage(props: DocsLayoutPageProps) {
	const { toc, children } = props;
	const { setState, next, previous } = useDocsLayoutContext();

	useEffect(() => {
		setState({ type: "SET_STATE", payload: { toc } });
	}, [toc, setState]);

	return (
		<Box colorPalette="neutral">
			{children}
			<ButtonGroup
				mt="40"
				hideBelow="md"
				colorPalette="neutral"
				justify="space-between"
			>
				<Show when={previous}>
					{(previous) => (
						<ButtonGroup.Item
							asChild
							variant="surface"
						>
							<Link
								preload="intent"
								to={previous.url}
							>
								<Icon
									ml="-2"
									width={16}
									height={16}
									icon="tabler:arrow-left"
								/>
								{previous.name}
							</Link>
						</ButtonGroup.Item>
					)}
				</Show>
				<Show when={next}>
					{(next) => (
						<ButtonGroup.Item
							asChild
							variant="surface"
						>
							<Link
								to={next.url}
								preload="intent"
							>
								{next.name}
								<Icon
									mr="-2"
									width={16}
									height={16}
									icon="tabler:arrow-right"
								/>
							</Link>
						</ButtonGroup.Item>
					)}
				</Show>
			</ButtonGroup>
		</Box>
	);
}

type DocsLayoutTitleProps = PropsWithChildren;
export function DocsLayoutTitle(props: DocsLayoutTitleProps) {
	const { children } = props;

	return (
		<Stack
			align="center"
			justify="space-between"
		>
			<Text
				as="h1"
				fontWeight="500"
				lineHeight="none"
				color="fg.primary"
				letterSpacing="-0.02em"
				fontSize={{ base: "24", md: "32" }}
			>
				{children}
			</Text>
			<DocsLayoutAiButtons>
				<DocsLayoutAiButtons.CopyButton />
				<DocsLayoutAiButtons.MenuOptions />
			</DocsLayoutAiButtons>
		</Stack>
	);
}

type DocsLayoutDescriptionProps = PropsWithChildren;
export function DocsLayoutDescription(props: DocsLayoutDescriptionProps) {
	const { children } = props;

	return (
		<Text
			mt="20"
			mb="32"
			fontSize="1rem"
			lineHeight="md"
			color="fg.secondary"
			letterSpacing="-.005em"
		>
			{children}
		</Text>
	);
}
