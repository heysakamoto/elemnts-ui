import { Box, Button, Group, Icon, Separator, Text } from "@moto-ui/react";
import { Link } from "@tanstack/react-router";
import { type PropsWithChildren, useEffect } from "react";
import { type DocsLayoutState, useDocsLayoutContext } from "./client";
import { Toc } from "./toc";

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
				<Toc.Mobile />
			</Box>
		</Box>
	);
}

type TitleProps = PropsWithChildren;
export function Title(props: TitleProps) {
	const { children } = props;

	return (
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
	);
}

type DescriptionProps = PropsWithChildren;
export function Description(props: DescriptionProps) {
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
