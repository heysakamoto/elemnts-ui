import { ButtonGroup, Container, Icon, Show } from "@moto-ui/react";
import { Link, useLocation } from "@tanstack/react-router";
import { findNeighbour } from "fumadocs-core/page-tree";
import type { PropsWithChildren } from "react";

import { useDocsLayoutContext } from "./client";

export function DocsLayoutPageBody(props: PropsWithChildren) {
	const { children } = props;
	const pathname = useLocation({ select: (l) => l.pathname });
	const { pageTree } = useDocsLayoutContext();

	const { next, previous } = findNeighbour(pageTree, pathname);

	return (
		<Container
			pt="44"
			px="16"
			maxW="40rem"
			pb={{ base: 96, md: 44 }}
		>
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
		</Container>
	);
}
