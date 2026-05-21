import {
	Box,
	Button,
	ButtonGroup,
	Group,
	Icon,
	Separator,
	Stack,
	Text,
} from "@moto-ui/react";
import { Link } from "@tanstack/react-router";
import { type PropsWithChildren, useEffect } from "react";
import { AICopyButton } from "@/components/fumadocs/layouts/ai-copy-button";
import { AIMenu } from "@/components/fumadocs/layouts/ai-menu";
import { type DocsLayoutState, useDocsLayoutContext } from "./client";
import { TocMobile } from "./toc";

type PageProps = PropsWithChildren<Pick<DocsLayoutState, "toc">>;
export function Page(props: PageProps) {
	const { toc, children } = props;
	const { setState, next, previous } = useDocsLayoutContext();

	useEffect(() => {
		setState({ type: "SET_STATE", payload: { toc } });
	}, [toc, setState]);

	return (
		<Box>
			<Box minH="76dvh">{children}</Box>
			<Separator
				my="40"
				size="xs"
				orientation="horizontal"
			/>
			<Group
				hideBelow="md"
				justify="space-between"
			>
				{previous && (
					<Button
						asChild
						variant="surface"
						colorPalette="neutral"
					>
						<Link
							preload="intent"
							to={previous.url as any}
						>
							<Icon
								icon="tabler:arrow-left"
								width="16"
								height="16"
								ml="-2"
							/>
							{previous.name}
						</Link>
					</Button>
				)}
				<Box flex="1" />
				{next && (
					<Button
						asChild
						variant="surface"
						colorPalette="neutral"
					>
						<Link
							preload="intent"
							to={next.url as any}
						>
							{next.name}
							<Icon
								icon="tabler:arrow-right"
								width="16"
								height="16"
								mr="-2"
							/>
						</Link>
					</Button>
				)}
			</Group>
			<Box hideFrom="md">
				<TocMobile />
			</Box>
		</Box>
	);
}

type TitleProps = PropsWithChildren;
export function Title(props: TitleProps) {
	const { children } = props;

	return (
		<Stack
			justify="space-between"
			align="center"
		>
			<Text
				as="h1"
				lineHeight="none"
				fontWeight="600"
				color="fg.primary"
				whiteSpace="pre-line"
				letterSpacing="-0.04em"
				fontSize={{ base: "24", md: "28" }}
			>
				{children}
			</Text>

			<ButtonGroup
				attached
				size="md"
				variant="surface"
				colorPalette="neutral"
			>
				<AICopyButton />
				<AIMenu />
			</ButtonGroup>
		</Stack>
	);
}

type DescriptionProps = PropsWithChildren;
export function Description(props: DescriptionProps) {
	const { children } = props;

	return (
		<Text
			mt="12"
			mb="24"
			fontSize="16"
			letterSpacing="xs"
			color="fg.secondary"
		>
			{children}
		</Text>
	);
}
